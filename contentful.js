const NEXT_PUBLIC_CONTENTFUL_SPACE = "bxded2igkelb";
// TODO: Generate a new API Key and migrate to environment variable
const NEXT_PUBLIC_CONTENTFUL_API_KEY =
  "ABj5d9b1tXNYy3w3YmmmUpVtj_tj8pxKDP2NJn5RAOA";

const imageQuery = `{
    url
    width
    height
}`;

const contentQuery = `{
    __typename
    ...on Text {
        text
    }
    ...on Chart {
        source ${imageQuery}
        mobileSource ${imageQuery}
        imageOverlay ${imageQuery}
        textOverlay
    } 
    ...on Sidenote {
        card1
        card2
        card3
    }       
    ...on Simulation {
        sectionsCollection(limit: 4) {
            items {
                title
                image ${imageQuery}
                inputs
            }
        }
    }
    ...on List {
        type
        title
        itemsCollection(limit: 10) {
            items {
                title
                description
                image ${imageQuery}
            }
        }
    }
}`;

const bookQuery = `{
    bookCollection(limit: 1) {
        items {
            chaptersCollection(limit: 5)  {
                items {
                    title
                    slug
                    number
                    dark
                    bordered
                    hideSubchapterNav
                    introCollection(limit: 10) {
                        items ${contentQuery}
                    }
                    subchaptersCollection(limit: 5) {
                        items {
                            header
                            slug
                            number
                            type
                            contentCollection(limit: 10) {
                                items ${contentQuery}
                            }
                        }
                    }
                }
            }
        }
    }
}`;

export async function queryBook() {
  const result = await queryContentful(bookQuery);
  return result.data.book[0];
}

export async function queryContentful(query) {
  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${NEXT_PUBLIC_CONTENTFUL_SPACE}/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${NEXT_PUBLIC_CONTENTFUL_API_KEY}`,
      },
      body: JSON.stringify({ query }),
    }
  );

  if (!response.ok) {
    try {
      const data = await response.json();
      throw new Error(JSON.stringify(data));
    } catch {
      throw new Error(response.statusText);
    }
  }

  const result = replaceCollectionAndItems(await response.json());
  return result;
}

const replaceCollectionAndItems = (result) => {
  if (Array.isArray(result)) {
    return result.map(replaceCollectionAndItems);
  } else if (result && typeof result === "object") {
    let newResult = {};
    for (const [key, value] of Object.entries(result)) {
      if (key === "items") {
        return replaceCollectionAndItems(value);
      } else if (key.includes("Collection")) {
        newResult[key.replace("Collection", "")] =
          replaceCollectionAndItems(value);
      } else {
        newResult[key] = replaceCollectionAndItems(value);
      }
    }
    return newResult;
  } else {
    return result;
  }
};
