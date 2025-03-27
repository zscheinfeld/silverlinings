const Chapter2 = {
  title: "Counterfactual Futures",
  slug: "counterfactual-futures",
  // image: "woman-lightmode.png",
  number: 2,
  subchapters: [
    {
      slug: "2-1",
      header: "We can slow brain aging",
      number: 1,
      content: [
        {
          type:"bodynav",
        },
        {
          type: "simulation",
          data: {
            title: "We can <i>slow</i> brain aging <br> <div style='font-size:24px; line-height:130%'>by just one year</div>",
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
                    defaultValue: 0.2,
                    step: 0.1,
                    label: "Mortality rates by age (year shift)",
                    tooltip: "",
                  },
                  productivity: {
                    min: 0,
                    max: 1,
                    defaultValue: 0.7,
                    step: 0.1,
                    label: "Productivity rates by age (year shift)",
                    tooltip: "",
                  },
                  fertility: {
                    min: 0,
                    max: 0,
                    defaultValue: 0,
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
        {
          type: "text",
          data: {
            // callout:"It’s a forgotten truth that — more than oil, gold, or data — working-age adults are the most valuable resource of our time.",
            paragraphs: [
              "At its most compelling, aging science would enable full health extension, so that the function of all organs would be rejuvenated somewhat simultaneously (just as the decline of our organs is somewhat simultaneous). This, however, is unlikely to happen in the immediate future. And if one organ among all others should be prioritized for rejuvenation, it’s the brain. How do we rejuvenate the brain? Probably not by waiting until it has noticeably failed.",

              "Alzheimer’s research receives nearly $4 billion dollars annually from the United States government alone. Yet the existing focus on narrow approaches to the individual diseases of brain aging (like Parkinson’s and Alzheimer’s) has so far resulted in treatments whose risk-benefit profile remains discouraging. Research in this important area has traditionally neglected the root cause of most neurodegenerative diseases: namely, normal aging. Today, only 8% of the National Institute of Aging (NIA) budget is devoted to the biology of aging. Neurodegenerative diseases receive nearly 8 times more funding than fundamental research on aging biology. Yet brain function declines steadily with normal aging, with visible declines in cognitive performance at age 50. Therapeutics must be developed which prevent not just abnormal aging, but also this predictable decline. ",

              "Though a distinction is often made between “healthy” brain aging and age-related neurodegenerative diseases, the boundary between normal and abnormal neurodegeneration is blurred. At age 65, “less than 5% of the population has a clinical diagnosis of Alzheimer’s disease, but this number increases to more than 40% beyond age 85.”  ",
            ],
          },
        },

        {
          type: "svgchart",
          data: {
            imageoverlay: false,
            textoverlay: false,
            // callout:"It’s a forgotten truth that — more than oil, gold, or data — working-age adults are the most valuable resource of our time.",
            source: ["/graph1.svg"],
          },
        },

        {
          type: "text",
          data: {
            // callout:"It’s a forgotten truth that — more than oil, gold, or data — working-age adults are the most valuable resource of our time.",
            paragraphs: [
              "Some animals — like songbirds, killifish, axolotls, lampreys, and planaria — naturally regenerate some parts of their brain. Others, like naked-mole rats, appear not to experience any cognitive decline. Animals with superior brain aging profiles remain understudied, and access to non-human primate brain samples, too, remains limited. Catalyzing these efforts isn’t commercially viable in the short term, and this creates a pressing rationale for public and philanthropic funds.",

              "To simulate the effects of slowing brain aging on the U.S. economy, we assume these investments would pay off primarily by increasing the labor productivity of older workers and, to a lesser extent, decreasing mortality rates with age. We arrive at these values by computing two basic assumptions: that roughly 60% of all labor productivity is brain-related, while roughly 10% of all deaths can be attributed directly to the brain. Hover* Readers are encouraged to input their own assumptions on the role of brain aging in mortality, productivity, and even fertility rates.  (There is an unclear, but increasingly studied relationship between reproductive and brain aging, since the brain helps regulate fertility hormones.) ",

              "The attentive reader may notice that beyond a certain point, improvements in physical health or other non-cognitive functions have diminishing returns on productivity. A 1-year shift backwards in brain aging adds nearly as much to GDP as a 1-year shift in general biological aging in the near term, because returns from improving the aging profile of other organs (e.g. kidneys or ovaries) are not immediate, and sometimes even reduce GDP temporarily. Improving the cognitive healthspan translates into significant and immediate productivity gains. (+$1080 in GDP per capita terms.",
            ],
          },
        },

        {
          type: "accordion",
          data: {
            title: "List of sample underfunded R&D approaches",
            questions: [
              "Better biomarkers of brain aging",
              "Understanding neuroinflammation",
              "Measuring global brain activity",
              "Sensory stimulation",
              "Optogenetic neurotherapy",
              "Managing synaptic creation and pruning",
              "Remodeling the extracellular matrix",
              "Improvement of drug delivery pathways into the brain",
              "Stimulation of endogenous neurogenesis via stem-cell activation",
              "Exogenous transplantation of brain cells and tissues",
              "Endogenous neurogenesis via stem-cell activation",
            ],
            answers: [
              "Existing measures of brain aging are archaic. Tests on cognitive function rely on doctors’ acumen and self-reported function. Better biomarkers of brain aging (e.g. knowing which proteins to look for and where) could unlock more preventative treatments for brain aging.  ",
              "Neuroinflammation is a hallmark of brain aging and related neurodegenerative diseases, and is shown in at least some cases to directly contribute to pathological processes. Blocking detrimental inflammation and/or promoting beneficial immune pathways may slow brain aging.",
              "Cell-resolved interrogation of long range connectivity and activity in the brain remains a significant challenge. Optical and electrical techniques to measure these parameters may be critical to sustain and, when necessary, revive brain function.",
              "Animal studies suggest that precisely delivered light and sound may slow cognitive decline due to neurodegenerative disease. Human studies could prove that brain aging can be partly moderated through sensory stimulation.",
              "Gamma brain waves tend to become deregulated as humans age. A technique called optogenetics can activate microglia (the brain's immune cells) to help clear harmful proteins. Studies in mammalian models show promising results, and human trials could prove a reduction in the pace of brain aging.126",
              "Synaptic communication between neurons is the basis of cognitive function, and specialized cells stimulate the creation of new synapses while pruning away excess ones. This process can be disrupted in disease, which raises the potential of interventions to restore healthy synaptic management function.",
              "The extracellular matrix regulates an array of brain cell functions including migration, proliferation, and differentiation. It is also critically involved in brain plasticity, memory, and inflammation. Remodeling the extracellular matrix may serve as a therapeutic modality in itself, or it may play a critical role in ensuring the success of other strategies that slow brain aging.127",
              "The brain is a highly regulated environment with multiple protective mechanisms. This impedes the delivery of therapeutics directly into brain cells or parts. Improved drug delivery mechanisms could maximize efficacy and minimize the off-target effects of drugs.",
              "Stem cell reservoirs within the brain could be used as sources of differentiated brain cells. This may ensure better immune compatibility than exogenously generated cells, with possible rejuvenating effects.",
              "Neurodegenerative diseases like Parkinson’s cause the death of specific cell types. Precursor cells grown in a lab from pluripotent stem cells can be used to help redevelop disrupted neural circuits, restoring function. Some therapeutic value has been proven among patients with neurodegeneration via the transplantation of young cells grown in vitro or from fetal tissue into the aging brain.128 Additional efforts could make these interventions less invasive, more scalable, and possible for a wider range of cell types.",
              "Stem cell reservoirs within the brain could be used as sources of differentiated brain cells. This may ensure better immune compatibility than exogenously generated cells, with possible rejuvenating effects.",
            ],
          },
        },

        {
          type: "spacer",
        },
      ],
      options: {
        type: "default",
        showHeader: false, // This turns off the header
        // bordered: true, // Optional, if you want a border
      },
    },

    {
      slug: "2-2",
      header: "We can slow reproductive aging",
      number: 2,
      content: [
        {
          type: "simulation",
          data: {
            title:
              "We can <i>slow</i> reproductive aging <br> <div style='font-size:24px; line-height:130%'>by just one year</div>",
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
                    max: 0.02,
                    defaultValue: 0.02,
                    step: 0.01,
                    label: "Mortality rates by age (year shift)",
                    tooltip: "",
                  },
                  productivity: {
                    min: 0,
                    max: 0.04,
                    defaultValue: 0.04,
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

        {
          type: "svgchart",
          data: {
            imageoverlay: false,
            textoverlay: false,
            // callout:"It’s a forgotten truth that — more than oil, gold, or data — working-age adults are the most valuable resource of our time.",
            source: ["/graph2.svg"],
          },
        },

        {
          type: "text",
          data: {
            callout: "To start with, aging isn’t time.",
            paragraphs: [
              "Evolution optimizes for reproductive health, when possible. From this, it follows that menopause is a relative rarity in the animal kingdom. Animals that experience no decline in fertility throughout their lives — like the naked-mole rat — are on one extreme end of the spectrum. Homo Sapiens is on the other extreme end. By some measures, humans are one of only five species in the animal kingdom who undergo menopause. American Lobsters, for instance, become stronger and more fertile with age, and not seldom live to be 100 in good overall health. Most non-human primates also continue to reproduce well into advanced age. In humans, however, the ovaries are the first organ to age — and men’s reproductive healthspan, too, declines more quickly than most assume. This short fertility window (pictured on the right for women) is responsible for several physical and mental health issues. In smaller part, it also contributes to the emerging shortage of working-age adults worldwide. ",
            ],
          },
        },

        {
          type: "sidenote",
          data: {
            text: "Increased birth rates are unique in at least one aspect. New humans engender more new humans. In the very long run, newborns are likely to themselves produce more newborns, who then produce more newborns. This means increased fertility rates have compounding effects we do not get by simply extending the cognitive healthspan of a living human. Yet there are diminishing returns to how many more children women would have even if, like the American Lobster, female humans could safely reproduce through age 90.",
          },
        },

        {
          type: "text",
          data: {
            paragraphs: [
              "Not all couples would choose to have children in their 40s if they could healthily do so. Yet at least 11% of females seek fertility treatments at some point in their lives, mostly due to age-related infertility.  In Australia, for instance, assisted reproductive technologies have so far been documented to increase total birth rates by 5% — a small but meaningful amount.",

              "This research area would do more than just increase birth rates. The health and social costs of ovarian aging are impossible to simulate fully in dollars, but even a narrow measure of its effects on GDP produce staggering results. It’s well established that women who undergo menopause later live longer and suffer from fewer age-related diseases like dementia and osteoporosis. It’s no wonder, as reproductive aging scientist Jennifer Garrison notes, that today, when young women — typically under 40 — are diagnosed with menopause, “the medical community treats [it] as incredibly serious.” Yet the predictable decline of ovarian function with age (which coincides with a number of deadly diseases) after age 50 is understood as natural, inevitable, and not in need of treatment.",
            ],
          },
        },

        {
          type: "svgchart",
          data: {
            imageoverlay: false,
            textoverlay: false,
            // callout:"It’s a forgotten truth that — more than oil, gold, or data — working-age adults are the most valuable resource of our time.",
            source: ["/graph3.svg"],
          },
        },

        {
          type: "sidenote",
          data: {
            text: "This simulation shows some of the limits of  GDP as a metric, since the joy of having children is not reflected in it. We discuss this in “The Fine Print.” Our goal has been to show that even in R&D in aging biology areas where GDP is not the ideal measuring stick, direct returns to the economy remain positive.",
          },
        },

        {
          type: "text",
          data: {
            callout: "What if we could slow reproductive aging by just 1 year?",
            paragraphs: [
              "Given the currently short human healthspan, undergoing a geriatric pregnancy — understood as any pregnancy above age 34.3 for women — is both costly and dangerous. We do not yet understand what causes the female fertility window to last roughly 30 years less than the male window; why the reproductive span correlates with lifespan; or how aging ovaries or testes influence overall aging. What is certain — given precedents in animal models like American lobsters — is that a short fertility window is not a prerequisite for late-life health.",

              "Therapies which extend the reproductive healthspan could positively affect the health profile of older adults, and over several decades, increase the number of working-age adults at any given time. Little data exists on the relationship between reproductive aging and productivity. It’s possible that the major gains from improving reproductive aging may come not from increased fertility rates, but from the overall  healthspan gains accompanying delays in menopause and the prevention of age-related miscarriages and maternal mortality rates. This would mean increases in GDP per capita as well. Still, our baseline assumptions show that even modest increases in fertility rates — on the order of about 1% — can produce extraordinary effects in the long run.",

              "The births enabled by a 1-year shift in fertility rates with no improvements in productivity or mortality rates  would detract roughly $3 billion per year from GDP in the near term. This is  because newborns don’t work and because pregnancy and parenthood temporarily translate into lower labor supply. But for our baseline simulation, we consider small improvements in mortality and productivity rates, and arrive at a +$11 billion yearly gain to GDP in the short term. (+0.07 cents in GDP per capita terms.) Compared to investments in brain aging, where the average near-term return is $364 billion per year, investments in reproductive aging are roughly 30 times less valuable in the near term. In the long run, however, the returns from this research area are extraordinary, and can benefit existing humans by increasing the odds of new Einsteins or Karikos.",

              "*Fertility rates are capped to represent realistic increases in birth rates as enabled by reproductive technologies like IVF.",
            ],
          },
        },
        {
          type: "spacer",
        },
      ],
      options: {
        type: "default",
        showHeader: false, // This turns off the header
        // bordered: true, // Optional, if you want a border
      },
    },

    {
      slug: "2-3",
      header: "We can “replace” aging",
      number: 3,
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
                    step: 0.5,
                    label:
                      "Percentage of patients in need of life-saving organ transplants who adhere",
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
                    defaultValue: 0.88,
                    step: 0.01,
                    label: "Mortality rates by age (year shift)",
                    tooltip: "",
                  },
                  productivity: {
                    min: 0,
                    max: 0.02,
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
                    step: 0.5,
                    label:
                      "Percentage of patients in need of life-saving organ transplants who adhere",
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
                    defaultValue: 0.88,
                    step: 0.01,
                    label: "Mortality rates by age (year shift)",
                    tooltip: "",
                  },
                  productivity: {
                    min: 0,
                    max: 0.02,
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

        {
          type: "text",
          data: {
            paragraphs: [
              "If the idea of “replacing aging” sounds messy, it’s because it is. But it may be one we cannot afford to ignore. Moonshot approaches like vaccines for aging or partial reprogramming may result in exciting, but limited gains. To fully map out the biology of aging, we may need several decades of fundamental research. But even if aging cannot be fully understood in the near term, its parts can be replaced — as shown by the replacement of cells, organs, blood, and tissues since the 1950’s.",

              "The decline of organ function is a common symptom of aging, and many people need their organs replaced as they age. In the near future, it’s unlikely that a single therapeutic will slow down the biological age of all organs, cells, and tissues in the human body at once. Instead, a combination of biotechnologies will likely be needed. And the good news is that the commercial incentives for replacement are somewhat aligned to social needs: there is no shortage of companies attempting to engineer organs, cells, or tissues. CAR-T cell therapies, for instance, are a form of immune system replacement; organ transplants are a way of replacing malfunctioning parts; and hormone-replacement therapies (like insulin) are often used to treat late-stage diseases.",

              "In a future where the horrific organ shortages of today can be overcome, seemingly healthy patients, having accumulated non-trivial age-related molecular damage, may begin to have their cells and tissues gradually replaced if the benefits of doing so outweigh the risks. Replacing different body parts — large and small — is not just safely done within the context of today’s medicine; it may be necessary to holistically improve human aging in the coming decade.",
            ],
          },
        },
        {
          type: "svgchart",
          data: {
            imageoverlay: false,
            textoverlay: false,
            // callout:"It’s a forgotten truth that — more than oil, gold, or data — working-age adults are the most valuable resource of our time.",
            source: ["/graph4.svg"],
          },
        },
        {
          type: "text",
          data: {
            paragraphs: [
              "A simulation of organ abundance for still-healthy humans may have been more consistent with this project’s arguments — and this will ideally be the far-future result of investments in this R&D area. Yet given the horrific organ shortages of today, we chose to simulate the effects of first meeting this unmet demand — not least because once it is met, the same biotechnologies can be used to supply seemingly healthy humans, in prevention rather than late-stage treatment of organ or body-part failure.",

              "To see our assumptions for this simulation in detail, see the book. Briefly, we  focused on a decrease in mortality rates only, since many transplant patients will live longer but not necessarily in better health. It is very likely, however, that advancements in this area will also result in increases in productivity in the long run. (Otherwise, they would not be improving biological aging.)",
            ],
          },
        },

        {
          type: "sidenote",
          data: {
            text: "In 2023, roughly 64% of all U.S. patients who received an organ were aged 50 or older. In the coming decades, it is possible that interventions like partial reprogramming will fully replace the messy, piecemeal approach of replacing organs, tissues, cells, and blood. But in the near term, advancements in this area will be needed to extend health and lifespan.",
          },
        },

        {
          type: "text",
          data: {
            paragraphs: [
              "We refer to a Nature paper by Giwa et al. to consider two possibilities: a 2x and a 4x increase in life-saving organ transplants. The first (2x) results in a 0.22-year decrease in mortality rates by age for all U.S. adults aged 40 and older. The second (4x) leads to a 0.44-year decrease in mortality rates by age. These effects would be mostly driven by a greater number of working-age adults alive at any given time, even if these adults would not enjoy 100% perfect health. The reader is also free to assume that organ, cell, and tissue transplant techniques will be refined in the coming decades to also extend healthspan and increase productivity rates by age. ",

              "If the reader considers only what is likely in the near term  — namely, life-saving organ transplants for terminally ill patients — the impact of a 4x increase in organ supply on GDP per capita would be negative, at -$317. This is consistent with the existing sick-care system. If, however, the reader assumes this R&D area could eventually prevent age-related decline in still-healthy adults (for instance through cell engineering), the impact on GDP per capita would be overwhelmingly positive.",
            ],
          },
        },
        {
          type: "spacer",
        },
      ],
      options: {
        type: "default",
        showHeader: false, // This turns off the header
        // bordered: true, // Optional, if you want a border
      },
    },

    {
      slug: "2-4",
      header: "We can measure & marginally slow aging",
      number: 4,
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
                image: "simtool/chip.png",
                inputs: {
                  adoption: {
                    min: 0,
                    max: 20,
                    defaultValue: 11,
                    step: 0.5,
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
                    defaultValue: 0.72,
                    step: 0.01,
                    label: "Mortality rates by age (year shift)",
                    tooltip: "",
                  },
                  productivity: {
                    min: 0,
                    max: 2,
                    defaultValue: 0.82,
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
                image: "simtool/chip.png",
                inputs: {
                  adoption: {
                    min: 0,
                    max: 50,
                    defaultValue: 18.5,
                    step: 0.5,
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
                    defaultValue: 0.72,
                    step: 0.01,
                    label: "Mortality rates by age (year shift)",
                    tooltip: "",
                  },
                  productivity: {
                    min: 0,
                    max: 2,
                    defaultValue: 0.82,
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
                image: "simtool/chip.png",
                inputs: {
                  adoption: {
                    min: 0,
                    max: 100,
                    defaultValue: 50,
                    step: 0.5,
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
                    step: 0.01,
                    label: "Mortality rates by age (year shift)",
                    tooltip: "",
                  },
                  productivity: {
                    min: 0,
                    max: 2,
                    defaultValue: 0.82,
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
                    step: 0.5,
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
                    step: 0.01,
                    label: "Mortality rates by age (year shift)",
                    tooltip: "",
                  },
                  productivity: {
                    min: 0,
                    max: 2,
                    defaultValue: 0.82,
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

        {
          type: "text",
          data: {
            callout:
              "How do we measure aging? In 2024, the depressing answer is nobody knows. ",
            paragraphs: [
              "Or at least not precisely. Apps designed to track one’s biological age, while commercially viable, are often misleading. In the early 1950s, we had no effective therapeutic for heart disease for somewhat the same reason: LDL cholesterol was not yet approved as a surrogate marker of heart health, which meant the effects of statins and other lipid-lowering drugs could not have been precisely measured in clinical trials. The aging field suffers from a similar measuring problem today. Birthday candles measure our chronological age, but there’s no universally accepted way to measure how old we are biologically. ",
              "This means that even if an existing drug compound can improve aging with minimal side effects, proving this remains difficult. Because trials also typically measure gains in single diseases, the aging field suffers from the undervaluing of existing therapeutics which may improve overall biological aging if administered earlier. Here, we consider the value of two drug classes: existing, but imperfect therapeutics that may marginally slow aging — but have not yet been tested — and second-generation therapeutics that could be developed to delay aging in healthy, working-age adults who have no preexisting condition but will still go on to suffer from one of the diseases of aging. Then, we consider the delta in terms of lives saved and GDP increases between the current  (first-generation) way of treating late-stage diseases versus early prevention (second-generation).",
            ],
          },
        },

        {
          type: "sidenote",
          data: {
            text: "In 2022, the FDA Modernization Act 2.0 approved the use of these methodologies to reduce or replace animal studies, especially “where no pharmacologically relevant animal species exists.” This may be the case for human aging, where no single animal model reflects the complex biology of our aging process. ",
          },
        },

        {
          type: "text",
          data: {
            callout:
              "The aging field is particularly vulnerable to the oft-cited problem that chocolate, if tested on dogs, would be deemed toxic. ",
            paragraphs: [
              "No animal model captures the complex biology of human aging — and this means that for aging science to succeed, the advancement of breakthrough tools to test, measure, and model the biology of human aging may be critical. Another way to quantify the value of measuring aging is to consider the economic value of compressing the timeline of drug development. New technologies like organs-on-chips and virtual cells may help deliver on this. Organs-on-chips have the potential to mimic the structure and function of human organs in a microscale format, enabling clinical trials to measure the age of human organs with results perhaps more likely to translate to full-sized human bodies. For in vitro and in silico models to reproduce key aspects of aging biology, a better understanding of how human aging works (and what markers to include to represent it either virtually or in vitro) will be needed.  In 2024, tools like organs-on-chips are only sometimes useful, and especially so in aging science, since it’s challenging to code “human aging” into them. Yet in the coming decade, a convergence of technologies could change this.",
              "Previous studies estimate up to a 20% reduction in development time from using human-relevant methodologies like organs-on-chips or virtual cells in preclinical development. To simulate the economic effects of advancements in human-relevant methodologies, we consider the value of our second-generation therapeutic simulation, boosted by a 20% reduction in development timeline. We narrowly measure these effects  on one counterfactual trial; yet this technology could be applied horizontally to hundreds of trials.  ",
              "This delta alone translates into a $18 billion yearly increase in U.S. GDP the short term, adding up to $1 trillion in the long run. This simulation is especially conservative because in the long run, these methodologies could not only reduce R&D costs and compress trial timelines, but also translate into therapeutics that safely improve human aging and prevent disease, as simulated in Future 5. ",
            ],
          },
        },

        {
          type: "spacer",
          data: "",
        },
      ],
      options: {
        type: "default",
        showHeader: false, // This turns off the header
        // bordered: true, // Optional, if you want a border
      },
    },

    {
      slug: "2-5",
      header: "We can make 41 the new 40  (or 61 the new 60!)",
      number: 5,
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
                image: "simtool/cell.png",
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
                    step: 0.1,
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
        {
          type: "svgchart",
          data: {
            imageoverlay: false,
            textoverlay: false,
            // callout:"It’s a forgotten truth that — more than oil, gold, or data — working-age adults are the most valuable resource of our time.",
            source: ["/charts/1_5_1.svg"],
          },
        },
        {
          type: "text",
          data: {
            paragraphs: [
              "The holy grail of aging science — and arguably of medicine — is to extend health at roughly the same pace that it extends life. At its most compelling, aging science would unlock not just functional gains for discrete organs or tissues, but whole-body benefits. At their best, aging therapies would mean that not only the human reproductive window or the brain’s healthspan would be extended, but the onset of age-related conditions like osteoporosis, frailty, or Parkinson’s would also be delayed or reversed.",
              "Treatments like GLP-1 agonists, for instance — even if they can successfully target multiple age-related conditions at once — have diminishing returns, since they were designed mostly for unhealthy patients. Improvements in biological aging, by contrast, may have less-diminishing returns, since the goal is prevention of age-related decline for still-healthy adults. Research suggests there may not be a limit to how many times the molecular damage that leads to the diseases of aging can be improved — but more research and translation are needed to produce these results in normally aging humans.",
              "Here, we assume that the aging profile of different cells, tissues, and organs in the body could be therapeutically targeted, resulting in a 1-year improvement in biological aging. This is a very marginal improvement in the biology of aging. Yet its effects are large. Think of a world where 41 is the new 40, such that all adults over the age of 40 in the U.S. live, work, give birth, and die at the rates of adults 1 year younger. We call this 1-year shift “41 is the new 40,” but because we consider all adults over the age of 40 in the U.S, this shift would equally affect older adults, so that 61 would be the new 60, 71 the new 70, and so forth. Most scientists we interviewed are confident this marginal shift can be engineered with existing therapeutics that just haven’t yet been tested for biological aging in clinical trials.",
              "This simulation is different from extending life expectancy by 1 year. Increases in life expectancy have been engineered many times before — for instance, by the introduction of refrigeration, with the ability to safely store food. Improvements in the biology of aging are different because they can simultaneously improve how we live, work, give birth, and die. In other words, improving the biology of aging means shifting healthy survival rates.",
              "For more conservative results, the reader is free to assume that this 1-year shift backwards in biological aging would only affect older populations (e.g. 65+) already suffering from age-related diseases — in which case the returns would be smaller, in line with the existing sick-care system.",
            ],
          },
        },

        {
          type: "sidenote",
          data: {
            text: "Our baseline simulation for this 1-year shift in mortality, productivity, and fertility rates increases GDP per capita by +$426. This is less than the GDP per capita results for a 1-year shift in brain aging, in part because the accompanying shift in fertility rates in this section temporarily reduces GDP.",
          },
        },

        {
          type: "text",
          data: {
            paragraphs: [
              "It is technically possible that a therapeutic may target the key causal node linked to aging across the human body. Cellular reprogramming, for instance, shows significant promise. Yet advancements in organ, cell, and tissue transplants may be needed to unlock a holistic improvement in biological aging, as simulated in this section. The human body is made up of complex adaptive systems comprising interacting networks of parts, and interventions like genome engineering for polygenic conditions may be decades away from safety and precision. This means a combination of interventions could be necessary to slow aging  — including small-molecule drugs and refined technologies like tissue engineering.",
              "The social net present value from our baseline simulation for this 1-year shift, adding up to $22.5 trillion over several decades, suggests roughly a 1.1% increase in U.S. GDP.",
            ],
          },
        },

        {
          type: "spacer",
          data: "",
        },
      ],
      options: {
        type: "default",
        showHeader: false, // This turns off the header
        // bordered: true, // Optional, if you want a border
      },
    },
  ],
};

export default Chapter2;
