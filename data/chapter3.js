const Chapter3 = {
  title: "Simulation Tool",
  slug: "simulation-tool",
  number: 3,
  subchapters: [
    {
      slug: "3-1",
      header: "We can slow brain aging",
      number: 1,
      content: [
        {
          type: "simulation",
          data: {
            title: "We can <i>slow</i> brain aging",
            explanation:
              "These returns would be primarily driven by a larger working population from increases in fertility, with smaller contributions from lower mortality and higher productivity. The effects of reproductive aging on labor supply and mortality are impossible to quantify precisely with existing data. We consulted with several reproductive aging scientists, and arrived at the assumption that for every year reproductive aging is delayed, productivity rates would increase slightly, accompanied by smaller shifts in mortality rates. There was nearly unanimous agreement on how productivity would be affected more strongly than mortality, though not by how much. We used 0.01 and 0.02 for mortality and productivity respectively, as symbolic assumptions on an existing but unknown relationship between the reproductive healthspan and overall health/lifespan.",
            sections: [
              {
                title: "Testing",
                image: "brainsimulation.png",
                inputs: {
                  adoption: {
                    min: 0,
                    max: 100,
                    defaultValue: 50,
                    step: 1,
                    label: "Percentage of the population who will benefit",
                    tooltip: "",
                  },
                  age: {
                    min: 40,
                    max: 65,
                    defaultValue: 40,
                    step: 1,
                    label: "Age of population who will benefit",
                    tooltip: "",
                  },
                  startYear: {
                    min: 0,
                    max: 20,
                    defaultValue: 10,
                    step: 1,
                    label: "Years until aging treatment enters market",
                    tooltip: "",
                  },

                  r: {
                    min: 0.01,
                    max: 0.07,
                    defaultValue: 0.04,
                    step: 0.005,
                    label: "Discount rate",
                    tooltip: "",
                  },
                  mortality: {
                    min: 0,
                    max: 5,
                    defaultValue: 0,
                    step: 1,
                    label: "Mortality rates by age (year shift)",
                    tooltip: "",
                  },
                  productivity: {
                    min: 0,
                    max: 5,
                    defaultValue: 0,
                    step: 0.01,
                    label: "Productivity rates by age (year shift)",
                    tooltip: "",
                  },
                  fertility: {
                    min: 0,
                    max: 5,
                    defaultValue: 0,
                    step: 0.01,
                    label: "Fertility rates by age (year shift)",
                    tooltip: "",
                  },
                  numYears: {
                    min: 0,
                    max: 20,
                    defaultValue: 10,
                    step: 1,
                    label:
                      "Years from market entry until max adoption of treatment",
                    tooltip: "",
                  },
                },
              },
            ],
          },
        },
      ],
    },
    {
      slug: "3-2",
      header: "We can slow brain aging",
      number: 2,
      content: [
        {
          type: "simulation",
          data: {
            title: "We can <i>slow</i> brain aging",
            explanation:
              "These returns would be primarily driven by a larger working population from increases in fertility, with smaller contributions from lower mortality and higher productivity. The effects of reproductive aging on labor supply and mortality are impossible to quantify precisely with existing data. We consulted with several reproductive aging scientists, and arrived at the assumption that for every year reproductive aging is delayed, productivity rates would increase slightly, accompanied by smaller shifts in mortality rates. There was nearly unanimous agreement on how productivity would be affected more strongly than mortality, though not by how much. We used 0.01 and 0.02 for mortality and productivity respectively, as symbolic assumptions on an existing but unknown relationship between the reproductive healthspan and overall health/lifespan.",
            sections: [
              {
                title: "Testing",
                image: "brainsimulation.png",
                inputs: {
                  adoption: {
                    min: 0,
                    max: 200,
                    defaultValue: 50,
                    step: 1,
                    label: "Percentage of the population who will benefit",
                    tooltip: "",
                  },
                  age: {
                    min: 40,
                    max: 65,
                    defaultValue: 40,
                    step: 1,
                    label: "Age of population who will benefit",
                    tooltip: "",
                  },
                  startYear: {
                    min: 0,
                    max: 20,
                    defaultValue: 10,
                    step: 1,
                    label: "Years until aging treatment enters market",
                    tooltip: "",
                  },

                  r: {
                    min: 0.01,
                    max: 0.07,
                    defaultValue: 0.04,
                    step: 0.005,
                    label: "Discount rate",
                    tooltip: "",
                  },
                  mortality: {
                    min: 0,
                    max: 5,
                    defaultValue: 0,
                    step: 1,
                    label: "Mortality rates by age (year shift)",
                    tooltip: "",
                  },
                  productivity: {
                    min: 0,
                    max: 5,
                    defaultValue: 0,
                    step: 0.01,
                    label: "Productivity rates by age (year shift)",
                    tooltip: "",
                  },
                  fertility: {
                    min: 0,
                    max: 5,
                    defaultValue: 0,
                    step: 0.01,
                    label: "Fertility rates by age (year shift)",
                    tooltip: "",
                  },
                  numYears: {
                    min: 0,
                    max: 20,
                    defaultValue: 10,
                    step: 1,
                    label:
                      "Years from market entry until max adoption of treatment",
                    tooltip: "",
                  },
                },
              },
              {
                title: "Testing",
                image: "brainsimulation.png",
                inputs: {
                  adoption: {
                    min: 0,
                    max: 100,
                    defaultValue: 50,
                    step: 1,
                    label: "Percentage of the population who will benefit",
                    tooltip: "",
                  },
                  age: {
                    min: 40,
                    max: 65,
                    defaultValue: 40,
                    step: 1,
                    label: "Age of population who will benefit",
                    tooltip: "",
                  },
                  startYear: {
                    min: 0,
                    max: 20,
                    defaultValue: 10,
                    step: 1,
                    label: "Years until aging treatment enters market",
                    tooltip: "",
                  },

                  r: {
                    min: 0.01,
                    max: 0.07,
                    defaultValue: 0.04,
                    step: 0.005,
                    label: "Discount rate",
                    tooltip: "",
                  },
                  mortality: {
                    min: 0,
                    max: 5,
                    defaultValue: 0,
                    step: 1,
                    label: "Mortality rates by age (year shift)",
                    tooltip: "",
                  },
                  productivity: {
                    min: 0,
                    max: 5,
                    defaultValue: 0,
                    step: 0.01,
                    label: "Productivity rates by age (year shift)",
                    tooltip: "",
                  },
                  fertility: {
                    min: 0,
                    max: 5,
                    defaultValue: 0,
                    step: 0.01,
                    label: "Fertility rates by age (year shift)",
                    tooltip: "",
                  },
                  numYears: {
                    min: 0,
                    max: 20,
                    defaultValue: 10,
                    step: 1,
                    label:
                      "Years from market entry until max adoption of treatment",
                    tooltip: "",
                  },
                },
              },
            ],
          },
        },
      ],
    },
  ],
};

export default Chapter3;
