const Chapter1 = {
  title: "Present",
  slug: "present",
  number: 1,
  subchapters: [
    {
      slug: "1-1",
      header: "More humans, fewer problems",
      number: 1,
      content: [
        {
          type: "text",
          data: {
            callout:
              "It’s a forgotten truth that — more than oil, gold, or data — working-age adults are the most valuable resource of our time.",
            paragraphs: [
              "Scientists, nurses, thinkers, bakers, engineers and builders make up the backbone of our economies. The United States remains the world’s most powerful country, in great part, because it attracts the world’s most talented and productive people. It is also the third most populous country in the world, behind only India and China. And for as long as robots and artificial intelligence fail to take over our jobs and engineer a welcome era of abundance, the ceiling of the world’s economies will remain largely fixed to the health and number of their working-age adults.",

              "The world is aging, and more births would be a partial solution to the emerging shortage of working-age adults worldwide. Yet they would be no silver bullet. In the short term, higher fertility rates worsen dependency ratios (newborns don’t work); in the long term, they leave us with the sky-high social and economic costs of aging. In a rational universe, healthy aging would be a top priority of governments, foundations, families, and investors worldwide. Yet many market failures and misaligned incentives stand in the way of private and public investments into extending healthy life.",
            ],
          },
        },

        {
          type: "svgchart",
          data: {
            // callout:"It’s a forgotten truth that — more than oil, gold, or data — working-age adults are the most valuable resource of our time.",
            imageoverlay: false,
            textoverlay: true,
            source: ["charts/1_1_1.svg"],
            overlay: "text",
            text: "Population growth is not often discussed in the context of increased longevity. Yet as Nobel laureate in economics Gary Becker has shown, healthy longevity is not merely a nice-to-have, but a major determinant in different countries’ ability to reach economic health. And as economist William Nordhaus later demonstrated, “the economic value of increases in longevity in the last hundred years is about as large as the value of measured growth [in every other part of the economy].”",
          },
        },

        {
          type: "multiplecards",
        },

        {
          type: "text",
          data: {
            callout:
              "The diseases of aging still begin to show up at nearly the same age as they did in 300 BC — and they follow a predictable trajectory throughout our lifespan.",

            paragraphs: [
              "Age is the primary risk factor for the diseases of aging. The median age of a cancer diagnosis is 66; the first heart attack, 65; and a dementia diagnosis, 83. Biological aging is also a neglected factor in global pandemics and even rare diseases like progeria or childhood cancers, where patients experience a form of accelerated aging. This explains why the value of investing in research on aging biology is high even compared to other excellent investments, since most severe conditions are downstream of biological aging. Eliminating all cancers, for instance, would add between 2 and 3 years to life expectancy. But since the median age of a cancer diagnosis is 66, the same patients would anyway soon be diagnosed with another manifestation of aging — like Parkinson’s, hypertension, severe illness from an otherwise mild infection, or a broken rib.",

              "Scientific challenges help explain why we lack human-relevant results in aging biology. Yet they do not explain why, for instance, research on Alzheimer’s alone receives roughly 8 times more funding than research on the biology of aging, though we lack human-relevant results for safe Alzheimer’s drugs. Today, the United States spends a mere 0.54% of its National Institutes of Health research budget on the biology of aging. Due to a number of market failures and misaligned incentives, the vast majority of public and private funds go towards the treatment of late-stage conditions. ",
            ],
          },
        },

        {
          type: "svgchart",
          data: {
            // callout:"It’s a forgotten truth that — more than oil, gold, or data — working-age adults are the most valuable resource of our time.",
            textoverlay: false,
            source: ["charts/1_1_2.svg"],
            overlay: "text",
            imageoverlay: ["charts/1_1_2_overlay.svg"],
          },
        },

        {
          type: "accordion",
          data: {
            title: "List of sample underfunded R&D approaches",
            questions: [
              "What if automation replaces the economic value of working-age adults?",
              "Why do we need therapeutics to improve aging? Can’t we just exercise and eat a healthy diet?",
            ],
            answers: [
              "Historically, working-age adults have been largely responsible for increases in GDP, whether through scientific discoveries or essential jobs like city and hospital sanitation. Output per worker has historically increased with technology. We  may live in an unprecedented time in history, when technology ends up not increasing worker output, but making it less valuable. As researcher Maxwell Tabarrok writes, there is a chance that advancements in robotics and AI may “upend the million-year-old relationship between population and technological progress.” Readers can run what is called a sensitivity analysis in economics, assuming that working-age adults will become half as valuable to the U.S. economy in the far future. Conversely, the reader may wish to assume that historical trends will not only continue but be supercharged, leading productivity per worker to increase at an unprecedented pace over the coming decades. This reader may wish to multiply our results by their desired amount. We do not claim to know which future will be built, but instead hope to offer a baseline from which further assumptions can be made \n\necessary We ask the reader to bracket the possibility that working-age adults may be fully replaced by automation in the coming decade, and instead entertain counterfactual scenarios where advancements in robotics and AI — at least in the short term — will accelerate the deployment of biotechnologies which improve productivity, mortality, and fertility rates. Our aim, again, has not been to simulate sure futures, nor have we tried to exclude the possibility of black swans entirely shifting the course of economies. The question we can answer is, “assuming working-age adults maintain their economic value, what happens if these scientific breakthroughs take place?” It’s an imperfect question, since the one future we build is unlikely to assign value to working-age adults at historical trends. In the very far future, it may come to be a luckier truth that working-age adults are no longer commoditized as the most valuable resource around. Still, we trust this will have been a set of fruitful glimpses into possible futures where tractable, important, and historically overlooked problems have been solved. If the reader believes working-age adults will be worth nothing to the U.S. economy decades from now, the idea that age-related medical conditions (like dementia and most severe cases of COVID-19) should be prevented would still hold true, but in ways not quantifiable by GDP as a metric. (More on this in “Why focus on GDP?”)",
              "Imagine the healthiest 90-year-old on planet Earth. Say his name is Dwarkesh, and Dwarkesh has adopted a perfect diet and exercise routine throughout his life. We know, intuitively, that he is still hundreds of times likelier to die from an infection, chronic disease, or broken rib than his son, just 30 years younger. Dwarkesh is frail, slow, unable to do most cognitive and physical work, and if he breaks a rib, chances are he will wind up in the hospital and quite probably die. Now consider that in 2024, Japan’s average life expectancy is already 85 — and it’s projected to go up to 94 by 2100 without any mind-boggling scientific breakthrough. By the same year, life expectancy will have gone up to 85 in India. Today, already, over 70% of all deaths globally owe to the diseases of aging: from cancer to heart disease to Alzheimer’s. How does the end of this century look like if we achieve the momentous feat of getting everyone on the planet to exercise and eat a healthy diet, but make no progress on therapeutics that directly target the biology of aging? The answer is, not very bright. \n\n A clear precedent where advanced biotechnologies have offered superior results to natural solutions is birth control. After centuries of female oppression, the pill offered women near-definitive control over their reproductive system in a way natural solutions could not. Though the pill isn’t yet fully safe or available to women throughout the world,  new R&D advancements continue to improve side effects and to lower the price of drug development. The pill fundamentally redesigned how women live, work, give birth, and die. Advancements in aging biology can do the same, to a greater extent, and for both sexes",
            ],
          },
        },

        {
          type: "spacer",
          data: "",
        },
      ],
    },

    {
      slug: "1-2",
      header: "What is aging?",
      number: 2,
      content: [
        {
          type: "svgchart",
          data: {
            imageoverlay: false,
            textoverlay: false,
            source: ["charts/1_2.png"],
            // overlay: "text",
            // imageoverlay:["charts/1_1_2_overlay.svg"],
          },
        },
        {
          type: "text",
          data: {
            callout: "To start with, aging isn’t time.",
            paragraphs: [
              "Some species, like the Aldabra giant tortoise, are about as likely to die the moment they are born as they are at age 90. Others, like the jellyfish Turritopsis Dohrnii, are biologically immortal, and barring predators or rare diseases, can live for an indefinite amount of time. Mammals like the bowhead whale and fish like Greenland sharks routinely live for centuries without developing chronic illnesses like cancers or Alzheimer’s, while the health of naked-mole rats appears not to decline at all over time. Humans exhibit a similar ability for health maintenance until our twenties. Throughout our lives, our cells constantly undergo mutations and alterations. But as our natural capacity for repair begins to wane, damage begins to irreversibly accumulate. The same type of molecular damage that might have been easily tended to at a young age begins to build up during our thirties and forties. The diseases of aging — like cancers, heart diseases, dementias, and diabetes — most often appear after decades of misrepairs.",

              "It’s well established that some hallmarks of aging can be accelerated by habits like smoking, or by events like pregnancy and infection. Less obvious is the fact that biological aging can be slowed down and reversed. Indeed, some hallmarks of aging are temporarily reversed every day with diet, mental health practices, and exercise. Yet there is a low ceiling to what can be achieved with lifestyle interventions for primates with our DNA. Just as two-hundred-year-old tortoises won’t suddenly start aging poorly after several days of little movement on the beach, or after binge-eating the carcasses of other tortoises (a habit they sometimes indulge in), humans can’t buy cancer-free, two-hundred-year lives by self-starving or walking at giant-tortoise speed. ",
            ],
          },
        },

        {
          type: "svgchart",
          data: {
            textoverlay: false,
            source: ["charts/1_2_2.png"],
            // overlay: "text",
            imageoverlay: ["charts/1_2_2_overlay.svg"],
          },
        },

        {
          type: "text",
          data: {
            callout:
              "Aging isn’t one thing, equally manifested in all species — and this explains why scientists  have such a hard time agreeing on just what it is.",
            paragraphs: [
              "We interviewed 72 aging biologists for this project. Some scientists understand aging as a “software design flaw”— a programmatic process that can be targeted epigenetically, by targeting gene expression rather than the genetic code itself. Others see it as a multifactorial set of processes whose causes demand more invasive solutions, like replacing tissues. Aging is a convenient word to describe the loss of function caused by a buildup in molecular damage over a species’ average lifespan. But different animals experience this loss differently (or not at all); different humans age at different paces (owing in part to different lifestyle choices, and in part to different genes); and different organs warrant different aging clocks. The ovaries, for instance, become geriatric some 40 years before the brain. For a discussion on  why aging evolved in the first place, read the book, or peek here for a brief explanation.",

              "What matters is that attempts at increasing health and lifespan have been successful in nearly every animal model studied so far. In a 1993 study, changing just one gene (daf-2, an insulin pathway humans share) in C. elegans worms doubled their lifespan. Changing one additional gene (rsks-1) resulted in a 500% lifespan increase, or the equivalent of a 400-year-old human in seemingly good health. In mammalian models, approaches like inhibiting mTOR activity or eliminating senescent cells often result in increased median survival rates. A short list of currently used therapeutics like rapamycin, metformin, GLP-1 agonists like Ozempic, and senolytics show signs of delaying multiple age-related diseases at once. Yet the risk-benefit profile of existing drugs remains unproven for most healthy humans, and the discovery",
            ],
          },
        },

        {
          type: "spacer",
          data: "",
        },
      ],
    },

    {
      slug: "1-3",
      header: "Mortality, productivity, and fertility in the U.S.",
      number: 3,
      content: [
        {
          type: "text",
          data: {
            callout:
              "You might think that death, economically speaking, is a net positive, since it mostly occurs to people dependent on costly social and medical care.",
            paragraphs: [
              "Yet even in purely economic terms, the fact that over half of U.S. states recorded more deaths than births in 2022 can only be mourned. Healthy humans, of course, would impose fewer burdens on our medical and social systems. But even half-healthy humans are by far more productive (as well as happier and healthier) than dead ones; and more newborns are generally worth more to the U.S. GDP, in the long run, than fewer.",

              "The holy grail of aging science — and arguably of medicine — is to extend health at the same pace that it extends life. This would have substantial effects on the global economy, lowering the burden on caregivers, care receivers, and young populations who in part subsidize the medical and social care of older adults. Longer-lived and more productive humans would also lead to higher investments in human capital: more education, more spending, and more productive labor.",

              "Economic growth is broadly driven by two factors: growth in the population, and growth in the amount each worker can produce within a given time. Labor productivity is the most direct way in which increases in healthspan impact the economy’s output. And in any century of recorded productivity so far, one pattern is clear: labor productivity rises in the first part of working life as experience and human capital accumulate, then declines later in life, as declines in physical and cognitive function overwhelm the increases in human capital. Improving the biology of aging implies slowing the rates of cognitive and physical decline later in life, which translates into slower decline in labor productivity.",
            ],
          },
        },

        // {
        //   type: "chart",
        //   data: Population,
        // },

        {
          type: "svgchart",
          data: {
            textoverlay: false,
            source: ["charts/1_3_1.svg"],
            // overlay: "text",
            imageoverlay: ["charts/1_3_1_overlay.svg"],
          },
        },

        {
          type: "text",
          data: {
            callout:
              "People typically reach peak income as late as their experience has not been outpaced by cognitive decline.",

            paragraphs: [
              "This is shown by the graph on the right, which outlines how most humans earn their highest income around age 55, followed by a steep decline caused primarily by the effects of biological aging. In the average lifetime, income follows a near-perfect triangle shape, increasing as human capital goes up, then decreasing with age-related health decline. Improvements in the biology of aging are unique relative to other health investments in that they can extend one’s productive time at the apex of this triangle. (Image: Triangle where this apex is lengthened by 5 years. Arrow —> ) This is what we mean when we discuss year shifts in productivity by age.",

              "Higher fertility rates by age, by contrast, add to the number of triangles without meaningfully changing their shape. (Image: Three triangles: parent, newborn, newborn of newborn…) In other words, they create more people without making existing ones more productive. But fertility rates would have little to do with biological aging if they did not also have the ability to at least marginally change the shape of the triangle – i.e., to increase productivity. In Future 3, we discuss how a better reproductive aging profile could lower the odds of disease and increase life expectancy.",

              "Mortality rates can be counterintuitive. Life extension, even without a 1-1 improvement in healthspan, often increases total GDP. The major way in which older adults become economically burdensome is through lower labor supply and increased medical and social costs. In our simulations, the underlying assumption is that older adults would be healthier and therefore more productive. This means that when discussing the biology of aging, shifts in mortality and productivity rates often go hand-in-hand. We assume no shifts in the age of retirement, and take into account only older adults who would voluntarily work past the age of 65, in good health. Interestingly, workers aged 65 and older are the fastest-growing labor group in the U.S. Today, many professionals (teachers, doctors, politicians) refuse to retire despite their short cognitive healthspan.",
            ],
          },
        },

        {
          type: "svgchart",
          data: {
            textoverlay: false,
            source: ["charts/1_3_2.svg"],
            // overlay: "text",
            imageoverlay: ["charts/1_3_2_overlay.svg"],
          },
        },
        {
          type: "spacer",
          data: "",
        },
      ],
    },
  ],
};

export default Chapter1;
