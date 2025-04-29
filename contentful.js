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
        title
    }       
    ...on Simulation {
        sectionsCollection(limit: 4) {
            items {
                explanation
                title
                image ${imageQuery}
                inputs
            }
        }
    }
    ...on List {
        type
        title
        label
        itemsCollection(limit: 12) {
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
    `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE}/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_API_KEY}`,
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
