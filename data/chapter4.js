const Chapter4 = {
  title: "About",
  slug: "about",
  number: 4,
  options: {
    dark: true,
    spacer: true,
  },
  subchapters: [
    {
      slug: "4-1",
      header: "People",
      number: 1,
      options: {
        bordered: true,
      },
      content: [
        {
          type: "imagegrid",
          data: {
            type: "three-column",
            items: [
              {
                title: "Key Person 1",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis viverra risus quis tempor. Mauris posuere massa eu ultricies mattis. Proin non tempus dolor.",
                image: "",
              },
              {
                title: "Key Person 2",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis viverra risus quis tempor. Mauris posuere massa eu ultricies mattis. Proin non tempus dolor.",
                image: "",
              },
              {
                title: "Key Person 3",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis viverra risus quis tempor. Mauris posuere massa eu ultricies mattis. Proin non tempus dolor.",
                image: "",
              },
              {
                title: "Key Person 4",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis viverra risus quis tempor. Mauris posuere massa eu ultricies mattis. Proin non tempus dolor.",
                image: "",
              },
              {
                title: "Key Person 5",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis viverra risus quis tempor. Mauris posuere massa eu ultricies mattis. Proin non tempus dolor.",
                image: "",
              },
              {
                title: "Key Person 6",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis viverra risus quis tempor. Mauris posuere massa eu ultricies mattis. Proin non tempus dolor.",
                image: "",
              },
            ],
          },
        },
        {
          type: "spacer",
          data: {
            border: false,
          },
        },
      ],
    },
    {
      slug: "4-2",
      header: "Acknowledgements",
      number: 2,
      options: {
        bordered: true,
      },
      content: [
        {
          type: "imagegrid",
          data: {
            type: "two-column",
            items: [
              {
                title: "Key Person 1",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis viverra risus quis tempor. Mauris posuere massa eu ultricies mattis. Proin non tempus dolor.",
                image: "",
              },
              {
                title: "Key Person 2",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis viverra risus quis tempor. Mauris posuere massa eu ultricies mattis. Proin non tempus dolor.",
                image: "",
              },
              {
                title: "Key Person 3",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis viverra risus quis tempor. Mauris posuere massa eu ultricies mattis. Proin non tempus dolor.",
                image: "",
              },
              {
                title: "Key Person 4",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis viverra risus quis tempor. Mauris posuere massa eu ultricies mattis. Proin non tempus dolor.",
                image: "",
              },
              {
                title: "Key Person 5",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis viverra risus quis tempor. Mauris posuere massa eu ultricies mattis. Proin non tempus dolor.",
                image: "",
              },
              {
                title: "Key Person 6",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis viverra risus quis tempor. Mauris posuere massa eu ultricies mattis. Proin non tempus dolor.",
                image: "",
              },
            ],
          },
        },
        {
          type: "spacer",
          data: {
            border: false,
          },
        },
      ],
    },
    {
      slug: "4-3",
      header: "Scientists Interviewed",
      options: {
        type: "header",
        bordered: true,
      },
      number: 3,
      content: [
        {
          type: "namegrid",
          data: {
            items: new Array(100).fill({
              name: "First Name Last Name",
              organization: "Organization",
            }),
          },
        },
        {
          type: "spacer",
          data: {
            border: false,
          },
        },
      ],
    },
    {
      slug: "4-4",
      header: "PUBLICATIONS",
      number: 4,
      options: {
        bordered: true,
      },
      content: [
        {
          type: "list",
          data: {
            items: [
              {
                title: "Name of Book",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              },
              {
                title: "Nature Aging paper (Pre-print)",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              },
              {
                title: "Federation of American Scientists Policy Memo ",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              },
              {
                title: "National Bureau of Economic Research (Working Paper)",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              },
              {
                title: "Mortality, productivity, and fertility in the U.S.",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              },
            ],
          },
        },
        {
          type: "spacer",
          data: {
            border: false,
          },
        },
      ],
    },
    {
      slug: "4-5",
      header: "Call to Action",
      number: 5,
      options: {
        bordered: true,
      },
      content: [
        {
          type: "text",
          data: {
            callout:
              "These futures won’t build themselves. If you want to help enable one or several of these counterfactual futures — where thousands or millions of lives can be saved and improved — we’re here to help.",
            paragraphs: [
              "<h4>POLICYMAKERS</h4>See our FAS policy memo, play with our interactive simulation tool, or reach out to Raiany Romanni with any questions and she’ll respond within 24 hours.",
              "<h4>Researchers</h4>Economists/social scientists: See each parameter in our open-source macroeconomic model here; in our NBER paper, and in the book.\n" +
                "\n" +
                "Scientists: See our Nature Aging paper or the book for a more detailed discussion of each R&D area, including a detailed mapping of the TAME trial and other plausible scientific breakthroughs.",
              "<h4>Philanthropists/investors</h4>We have a network of scientists, economists, writers, and policymakers. If you’d like to donate to accelerate one of these specific futures, please write to us/click below and indicate whether you’d like for your donation to go towards a specific R&D area.",
            ],
          },
        },
      ],
    },
  ],
};

export default Chapter4;
