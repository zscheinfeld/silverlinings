const Chapter3 = {
  title: "The Fine Print",
  slug: "the-fine-print",
  number: 3,
  intro: [
    {
      type: "text",
      data: {
        paragraphs: [
          "This is the beginning of an open and evolving project. Our goal has not been to predict when a combination of safe, effective, and affordable therapeutics designed to slow   aging will be available. Neither has it been to forecast what types of scientific breakthroughs are likely to occur first. Instead, we  highlight the value of advancements in science which, if successful, would offer extraordinary returns on investment from a societal standpoint — but for which commercial or institutional incentives have been lacking.  Our  hope is for you to scrutinize each of our simulation assumptions, and to input your own timelines and views on scientific feasibility,  then see  returns on investment for relatively small R&D advancements in terms of lives saved and GDP gains. <br><br> If you feel the parameters in our simulation tool do not allow you to input an important assumption, we would love to hear from you. But we hope you will trust that we have spent much time considering the best way to make our simulations as interactive as possible, while not overwhelming you with too much optionality. We have also spent much time considering how to best translate scientific advancements into economic and demographic outcomes. For instance, we are aware that the mapping of improvements in biological aging through the lens of shifts in mortality, productivity, and fertility rates by age is imperfect.  We discuss the limits, rationale, and strengths of our modeling approach in more detail in our technical paper and forthcoming book.",
        ],
      },
    },
  ],
  options: {
    hideSubchapterNav: true,
  },
  subchapters: [
    {
      slug: "3-1",
      header: "How much funding will each future require?",
      number: 1,
      options: {
        type: "toggle",
      },
      content: [
        {
          type: "text",
          data: {
            paragraphs: [
              "Because science is unpredictable, and because large R&D investments do not always result in large returns, we built an interactive  tool where you simulate what you believe is feasible in the near and far future. As a rule, we have focused on ​the returns to successful investments resulting in small improvements to the biology of aging. Most scientists we consulted believe these R&D “breakthroughs” (e.g. reversing brain aging by 1 year) are already possible — even with low-tech solutions like exercise or existing therapeutics — but they haven’t yet been rigorously tested in clinical trials. (More on this in Future 4.)",
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
              "Slight improvements in reproductive aging alone would have extraordinary socioeconomic value. Yet we cannot predict that if the U.S. invests, say, $25 billion — half the entire annual budget of the National Institutes of Health — into research on delaying menopause by 10 years, this future would surely exist.  Some futures may be millions of dollars and a handful of scientists away, while others may demand billions of dollars and hundreds of tiny technological convergences. This is why we chose not to peg specific investment amounts to each advancement. ",
              "We note that the direction of R&D investments is perhaps more important than the funding amount.  For instance, heavily funding research on late-stage neurodegenerative diseases (now at roughly $3 billion per year) has so far produced discouraging results. This is why we advocate for new R&D funding mechanisms like philanthropic foundations, bold federal agencies, and individual donors willing to bet on historically overlooked approaches in science. Some readers may wish to assume a doubling in the existing NIH funding for each R&D area. Others may be interested in forcing this exercise into an apples-to-apples comparison by assuming an equal investment amount to unlock each alternative future. Without exception, the simulated returns dwarf any plausible investment amount.  ",
            ],
          },
        },
        {
          type: "svgchart",
          data: {
            source: ["/fineprint/Fineprint_1.svg"],
            textoverlay: false,
            imageoverlay: ["/fineprint/Fineprint_1_overlay.svg"],
          },
        },
      ],
    },
    {
      slug: "3-2",
      header: "Comparison to other investments",
      number: 2,
      options: {
        type: "toggle",
      },
      content: [
        {
          type: "text",
          data: {
            bold: [
              "In a world with competing resources, why invest in aging research?",
            ],

            paragraphs: [
              "Say all cancers could be eradicated starting tomorrow. What would this be worth to the U.S. economy? None of our simulations have focused on a scenario as optimistic for aging science. Our most ambitious simulation so far models a 5-year improvement in biological aging — it does not assume we may forever delay all age-related health decline. We have also assumed only 50% of the population would benefit from any given therapeutic. Still, there may not be a ceiling to how many times aging can be therapeutically targeted. This is an important factor when comparing it to returns from alternative R&D areas. To consider what is possible in the near future, we compare the returns from alternative breakthroughs to a 5-year improvement in biological aging.",

              "Murphy and Topel estimate the value of curing all cancers adds up to about 80$ trillion over several decades (adjusted to 2025 dollars) using Value of Statistical Life.*  Using our macroeconomic model and the same discount rate as Murphy and Topel (3.5%), we find slowing aging by 5 years would add $87 trillion to U.S. GDP.",

              "If all cancers could be wiped off planet Earth tomorrow, this would add between 2 and 3 years to the average life expectancy. Since the median age for a cancer diagnosis is 66, most would-be cancer patients would anyway soon die from other age-related conditions like heart disease, dementia, or a broken rib.  Today, only about 1% of all cancer patients are children or adolescents, and the primary risk factor for most cancers remains age. Biological aging is even a neglected factor in select rare diseases (like progeria) and in most severe cases of infectious diseases.",

              "The White House recently announced its Cancer Moonshot to “reduce the death rate from cancer by at least 50% over the next 25 years, and improve the experience of people living with cancer.” Research on the biology of aging might just be the most practical way to achieve this goal. ",
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
              "Slight improvements in reproductive aging alone would have extraordinary socioeconomic value. Yet we cannot predict that if the U.S. invests, say, $25 billion — half the entire annual budget of the National Institutes of Health — into research on delaying menopause by 10 years, this future would surely exist.  Some futures may be millions of dollars and a handful of scientists away, while others may demand billions of dollars and hundreds of tiny technological convergences. This is why we chose not to peg specific investment amounts to each advancement. ",

              "<b> We note that the direction of R&D investments is perhaps more important than the funding <i>amount.</i></b>  For instance, heavily funding research on late-stage neurodegenerative diseases (now at roughly $3 billion per year) has so far produced discouraging results. This is why we advocate for new R&D funding mechanisms like philanthropic foundations, bold federal agencies, and individual donors willing to bet on historically overlooked approaches in science. Some readers may wish to assume a doubling in the existing NIH funding for each R&D area. Others may be interested in forcing this exercise into an apples-to-apples comparison by assuming an equal investment amount to unlock each alternative future. Without exception, the simulated returns dwarf any plausible investment amount.",
            ],
          },
        },
      ],
    },
    {
      slug: "3-3",
      header: "Policy consideration",
      number: 3,
      options: {
        type: "toggle",
      },
      content: [],
    },
    {
      slug: "3-4",
      header: "Why focus on GDP?",
      number: 4,
      options: {
        type: "toggle",
      },
      content: [],
    },
    {
      slug: "3-5",
      header: "Unintended consequences",
      number: 5,
      options: {
        type: "toggle",
      },
      content: [
        {
          type: "accordion",
          data: {
            numbered: true,
            questions: [
              "What about Social Security and Medicare?",
              "Who will benefit from these therapeutics?",
              "Will automation replace working-age adults?",
              "Will more humans impact the climate?",
              "What if aging cannot be improved?",
              "Will innovation slow down?",
            ],
            answers: [
              [
                {
                  type: "text",
                  data: {
                    callout: "Testing",
                    paragraphs: ["Hello!"],
                  },
                },
                {
                  type: "svgchart",
                  data: {
                    source: ["/charts/1_1_1.svg"],
                    imageoverlay: false,
                    textoverlay: false,
                  },
                },
              ],
              "Lorem",
              "Lorem",
              "Lorem",
              "Lorem",
              "Lorem",
            ],
          },
        },
      ],
    },
  ],
};

export default Chapter3;
