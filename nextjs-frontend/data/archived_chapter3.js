const Chapter3 = {
  title: "Simulation Tool",
  slug: "simulation-tool",
  number: 3,
  options: {
    type: "simulation",
  },
  subchapters: [
    {
      slug: "3-1",
      header: "We can slow brain aging",
      number: 1,
      options: {
        type: "simulation",
      },
      content: [
        {
          type: "simulation",
          data: {
            title: "We can <i>slow</i> brain aging <br> by just one year",
            explanation:
              "We arrive at our default inputs by computing two basic assumptions: that roughly 70% of all work/productivity in the U.S. is brain-related (based on the work of Lindqvest et al.), while roughly 20% of all deaths can be attributed to brain aging. Strokes and Alzheimer’s alone add up to 9% of all deaths in the United States, and their primary risk factor is aging. Parkinson’s, Amyotrophic Lateral Sclerosis (ALS) and brain tumors make up another 5% of all deaths. Some of these conditions (e.g. strokes) happen to young patients occasionally, or in older adults as a result of causes unrelated to aging. The exact percentage of deaths attributable to the aging brain is impossible to estimate. What is certain is that brain health is critical to overall health, including the proper regulation of metabolic and hormonal health, as well as the immune and nervous systems.",
            sections: [
              {
                title: "We can slow brain aging",
                image: "brainsimulation.png",
                inputs: {
                  adoption: {
                    min: 0,
                    max: 100,
                    defaultValue: 50,
                    step: 1,
                    label: "Percentage of the population who will benefit",
                    tooltip: "example of tooltip text",
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
                    max: 0.05,
                    defaultValue: 0.02,
                    step: 0.01,
                    label: "Discount rate",
                    tooltip: "",
                  },
                  mortality: {
                    min: 0,
                    max: 1,
                    defaultValue: .2,
                    step: .1,
                    label: "Mortality rates by age (year shift)",
                    tooltip: "",
                  },
                  productivity: {
                    min: 0,
                    max: 1,
                    defaultValue: .7,
                    step: 0.1,
                    label: "Productivity rates by age (year shift)",
                    tooltip: "",
                  },
                  fertility: {
                    min: 0,
                    max: 0,
                    defaultValue: 0,
                    step: .1,
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
                  return: {
                    min: 0,
                    max: 159.1,
                  },
                  yGDP: {
                    min: 0,
                    max: 1023,
                  },
                  lives: {
                    min: 0,
                    max: 5020,
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
      header: "We can slow reproductive aging",
      number: 2,
      options: {
        type: "simulation",
      },
      content: [
        {
          type: "simulation",
          data: {
            title:
              "We can <i>slow</i> reproductive aging <br> by just one year",
            explanation:
              "These returns would be primarily driven by a larger working population from increases in fertility, with smaller contributions from lower mortality and higher productivity. The effects of reproductive aging on labor supply and mortality are impossible to quantify precisely with existing data. We consulted with several reproductive aging scientists, and arrived at the assumption that for every year reproductive aging is delayed, productivity rates would increase slightly, accompanied by smaller shifts in mortality rates. There was nearly unanimous agreement on how productivity would be affected more strongly than mortality, though not by how much. We used 0.01 and 0.02 for mortality and productivity respectively, as symbolic assumptions on an existing but unknown relationship between the reproductive healthspan and overall health/lifespan.",
            sections: [
              {
                title: "Testing",
                image: "simtool/uterus.png",
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
                    max: 0.05,
                    defaultValue: 0.02,
                    step: 0.01,
                    label: "Discount rate",
                    tooltip: "",
                  },
                  mortality: {
                    min: 0,
                    max: .02,
                    defaultValue: .02,
                    step: .01,
                    label: "Mortality rates by age (year shift)",
                    tooltip: "",
                  },
                  productivity: {
                    min: 0,
                    max: .04,
                    defaultValue: .04,
                    step: 0.01,
                    label: "Productivity rates by age (year shift)",
                    tooltip: "",
                  },
                  fertility: {
                    min: 1,
                    max: 1,
                    defaultValue: 1,
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
                  return: {
                    min: 0,
                    max: 80.0,
                  },
                  yGDP: {
                    min: 3,
                    max: 127,
                  },
                  lives: {
                    min: 0,
                    max: 670,
                  },
                },
              },
            ],
          },
        },
      ],
    },
    {
      slug: "3-3",
      header: "We can replace aging",
      number: 3,
      options: {
        type: "simulation",
      },
      content: [
        {
          type: "simulation",
          data: {
            title: "We can <i>replace</i> aging",
            explanation:
              "We refer to a Nature paper by Giwa et al. to consider two possibilities: a 2x and a 4x increase in life-saving organ transplants. The first (2x) results in a 0.44-year decrease in mortality rates by age for all U.S. adults aged 40 and older. The second (4x) leads to a 0.88-year decrease in mortality rates by age. These effects would be mostly driven by a greater number of working-age adults alive at any given time, even if these adults would not enjoy 100% perfect health. For the 4x increase, our assumption is that a quarter (25%) of all patients in need of healthier organs (even patients not currently enrolled in transplant waiting lists) would have access to them. The reader is also free to assume that organ, cell, and tissue transplant techniques will be refined in the coming decades to also extend healthspan and increase productivity rates by age. ",
            sections: [
              {
                title: "2x increase in organ supply",
                image: "simtool/heart.png",
                inputs: {
                  adoption: {
                    min: 0,
                    max: 100,
                    defaultValue: 25,
                    step: .5,
                    label: "Percentage of patients in need of life-saving organ transplants who adhere",
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
                    max: 0.05,
                    defaultValue: 0.02,
                    step: 0.01,
                    label: "Discount rate",
                    tooltip: "",
                  },
                  mortality: {
                    min: 0,
                    max: 2,
                    defaultValue: .88,
                    step: .01,
                    label: "Mortality rates by age (year shift)",
                    tooltip: "",
                  },
                  productivity: {
                    min: 0,
                    max: .02,
                    defaultValue: 0,
                    step: 0.01,
                    label: "Productivity rates by age (year shift)",
                    tooltip: "",
                  },
                  fertility: {
                    min: 0,
                    max: 0,
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
                  return: {
                    min: 0,
                    max: 195,
                  },
                  yGDP: {
                    min: 0,
                    max: 1296,
                  },
                  lives: {
                    min: 0,
                    max: 19140,
                  },
                },
              },
              {
                title: "4x increase in organ supply",
                image: "simtool/heart.png",
                inputs: {
                  adoption: {
                    min: 0,
                    max: 100,
                    defaultValue: 50,
                    step: .5,
                    label: "Percentage of patients in need of life-saving organ transplants who adhere",
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
                    max: 0.05,
                    defaultValue: 0.02,
                    step: 0.01,
                    label: "Discount rate",
                    tooltip: "",
                  },
                  mortality: {
                    min: 0,
                    max: 2,
                    defaultValue: .88,
                    step: .01,
                    label: "Mortality rates by age (year shift)",
                    tooltip: "",
                  },
                  productivity: {
                    min: 0,
                    max: .02,
                    defaultValue: 0,
                    step: 0.01,
                    label: "Productivity rates by age (year shift)",
                    tooltip: "",
                  },
                  fertility: {
                    min: 0,
                    max: 0,
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
                  return: {
                    min: 0,
                    max: 195,
                  },
                  yGDP: {
                    min: 0,
                    max: 1296,
                  },
                  lives: {
                    min: 0,
                    max: 19140,
                  },
                },
              },
            ],
          },
        },
      ],
    },
    {
      slug: "3-4",
      header: "We can measure & marginally slow aging",
      number: 4,
      options: {
        type: "simulation",
      },
      content: [
        {
          type: "simulation",
          data: {
            title: "We can measure <br>& marginally slow aging",
            explanation:
              "First-generation therapeutics are widely used, FDA-approved interventions with potential but untested effects on the biology of aging. These are imperfect, but existing therapeutics — like GLP-1 agonists, rapamycin, or metformin — with effects on multiple age-related diseases. Today, they’re most often prescribed to older, sick, or overweight adults already suffering from at least one of the diseases of aging, in line with the sick-care model. To simulate the economic value of administering an existing drug to slow biological aging, we consider the endpoints of the Targeting Aging with Metformin (TAME) trial — what may be the first-ever trial to measure geroprotective effects in humans with an imperfect, but well-studied drug.   We assume the same endpoints of the TAME trial could be achieved with alternative therapeutics. GLP-1 agonists or rapamycin may have bigger effects, but their safety is less established. We follow the TAME trial design to infer that only 11% of adults ages 65+ would benefit from this drug. This includes the assumptions that to enroll in the trial, patients must have at least 1 pre-existing disease of aging, and that diabetic patients must be excluded in order to test effects on overall aging. See the book or technical paper for our detailed mapping of the TAME trial.",
            sections: [
              {
                title: "1st Gen",
                image: "simtool/cell.png",
                inputs: {
                  adoption: {
                    min: 0,
                    max: 20,
                    defaultValue: 11,
                    step: .5,
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
                    defaultValue: 5,
                    step: 1,
                    label: "Years until aging treatment enters market",
                    tooltip: "",
                  },

                  r: {
                    min: 0.01,
                    max: 0.05,
                    defaultValue: 0.02,
                    step: 0.01,
                    label: "Discount rate",
                    tooltip: "",
                  },
                  mortality: {
                    min: 0,
                    max: 2,
                    defaultValue: .72,
                    step: .01,
                    label: "Mortality rates by age (year shift)",
                    tooltip: "",
                  },
                  productivity: {
                    min: 0,
                    max: 2,
                    defaultValue: .82,
                    step: 0.01,
                    label: "Productivity rates by age (year shift)",
                    tooltip: "",
                  },
                  fertility: {
                    min: 0,
                    max: 0,
                    defaultValue: 0,
                    step: 0.01,
                    label: "Fertility rates by age (year shift)",
                    tooltip: "",
                  },
                  numYears: {
                    min: 0,
                    max: 20,
                    defaultValue: 5,
                    step: 1,
                    label:
                      "Years from market entry until max adoption of treatment",
                    tooltip: "",
                  },
                  return: {
                    min: 0,
                    max: 168,
                  },
                  yGDP: {
                    min: 0,
                    max: 1693,
                  },
                  lives: {
                    min: 0,
                    max: 18860,
                  },
                },
              },
              {
                title: "1st Gen +",
                image: "simtool/cell.png",
                inputs: {
                  adoption: {
                    min: 0,
                    max: 50,
                    defaultValue: 18.5,
                    step: .5,
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
                    defaultValue: 5,
                    step: 1,
                    label: "Years until aging treatment enters market",
                    tooltip: "",
                  },

                  r: {
                    min: 0.01,
                    max: 0.05,
                    defaultValue: 0.02,
                    step: 0.01,
                    label: "Discount rate",
                    tooltip: "",
                  },
                  mortality: {
                    min: 0,
                    max: 2,
                    defaultValue: .72,
                    step: .01,
                    label: "Mortality rates by age (year shift)",
                    tooltip: "",
                  },
                  productivity: {
                    min: 0,
                    max: 2,
                    defaultValue: .82,
                    step: 0.01,
                    label: "Productivity rates by age (year shift)",
                    tooltip: "",
                  },
                  fertility: {
                    min: 0,
                    max: 0,
                    defaultValue: 0,
                    step: 0.01,
                    label: "Fertility rates by age (year shift)",
                    tooltip: "",
                  },
                  numYears: {
                    min: 0,
                    max: 20,
                    defaultValue: 5,
                    step: 1,
                    label:
                      "Years from market entry until max adoption of treatment",
                    tooltip: "",
                  },
                  return: {
                    min: 0,
                    max: 187.1,
                  },
                  yGDP: {
                    min: 0,
                    max: 1714,
                  },
                  lives: {
                    min: 0,
                    max: 18970,
                  },
                },
              },
              {
                title: "2nd Gen",
                image: "simtool/cell.png",
                inputs: {
                  adoption: {
                    min: 0,
                    max: 100,
                    defaultValue: 50,
                    step: .5,
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
                    max: 0.05,
                    defaultValue: 0.02,
                    step: 0.01,
                    label: "Discount rate",
                    tooltip: "",
                  },
                  mortality: {
                    min: 0,
                    max: 2,
                    defaultValue: 1.44,
                    step: .01,
                    label: "Mortality rates by age (year shift)",
                    tooltip: "",
                  },
                  productivity: {
                    min: 0,
                    max: 2,
                    defaultValue: .82,
                    step: 0.01,
                    label: "Productivity rates by age (year shift)",
                    tooltip: "",
                  },
                  fertility: {
                    min: 0,
                    max: 0,
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
                  return: {
                    min: 0,
                    max: 238.1,
                  },
                  yGDP: {
                    min: 0,
                    max: 1780,
                  },
                  lives: {
                    min: 0,
                    max: 19130,
                  },
                },
              },
              {
                title: "2nd Gen+",
                image: "simtool/chip.png",
                inputs: {
                  adoption: {
                    min: 0,
                    max: 100,
                    defaultValue: 50,
                    step: .5,
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
                    defaultValue: 8,
                    step: 1,
                    label: "Years until aging treatment enters market",
                    tooltip: "",
                  },

                  r: {
                    min: 0.01,
                    max: 0.05,
                    defaultValue: 0.02,
                    step: 0.01,
                    label: "Discount rate",
                    tooltip: "",
                  },
                  mortality: {
                    min: 0,
                    max: 2,
                    defaultValue: 1.44,
                    step: .01,
                    label: "Mortality rates by age (year shift)",
                    tooltip: "",
                  },
                  productivity: {
                    min: 0,
                    max: 2,
                    defaultValue: .82,
                    step: 0.01,
                    label: "Productivity rates by age (year shift)",
                    tooltip: "",
                  },
                  fertility: {
                    min: 0,
                    max: 0,
                    defaultValue: 0,
                    step: 0.01,
                    label: "Fertility rates by age (year shift)",
                    tooltip: "",
                  },
                  numYears: {
                    min: 0,
                    max: 20,
                    defaultValue: 8,
                    step: 1,
                    label:
                      "Years from market entry until max adoption of treatment",
                    tooltip: "",
                  },
                  return: {
                    min: 0,
                    max: 238.1,
                  },
                  yGDP: {
                    min: 0,
                    max: 1780,
                  },
                  lives: {
                    min: 0,
                    max: 19130,
                  },
                },
              },
            ],
          },
        },
      ],
    },
    {
      slug: "3-5",
      header: "We can make 41 the new 40 (or 61 the new 60!)",
      number: 5,
      options: {
        type: "simulation",
      },
      content: [
        {
          type: "simulation",
          data: {
            title: "We can make 41 the new 40 <br> (or 60 the new 55!)",
            explanation:
              "Think of a world where 41 is the new 40, such that all adults over the age of 40 in the U.S. live, work, give birth, and die at the rates of adults 1 year younger. We call this 1-year shift “41 is the new 40,” but because we consider all adults over the age of 40 in the U.S, this shift would equally affect older adults, so that 61 would be the new 60, 71 the new 70, and so forth. Most scientists we interviewed are confident this marginal shift can be engineered with existing therapeutics that just haven’t yet been tested for biological aging in clinical trials. Here, the reader is also free to assume up to a 5-year simultaneous shift in all three levers (mortality, fertility, and productivity rates by age) to simulate the demographic and economic effects of year shifts in biological aging.",
            sections: [
              {
                title: "Testing",
                image: "simtool/woman2.png",
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
                    max: 0.05,
                    defaultValue: 0.02,
                    step: 0.01,
                    label: "Discount rate",
                    tooltip: "",
                  },
                  mortality: {
                    min: 0,
                    max: 5,
                    defaultValue: 1,
                    step: .1,
                    label: "Mortality rates by age (year shift)",
                    tooltip: "",
                  },
                  productivity: {
                    min: 0,
                    max: 5,
                    defaultValue: 1,
                    step: 0.1,
                    label: "Productivity rates by age (year shift)",
                    tooltip: "",
                  },
                  fertility: {
                    min: 0,
                    max: 5,
                    defaultValue: 1,
                    step: 0.1,
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
                  return: {
                    min: 0,
                    max: 478.5,
                  },
                  yGDP: {
                    min: 0,
                    max: 4667,
                  },
                  lives: {
                    min: 0,
                    max: 22100,
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
