import Textblock from "@/components/content/Textblock";
import Chart from "@/components/content/Chart";
import Sidenote from "@/components/content/Sidenote";
import MultipleCards from "@/components/content/MultipleCards";
import SvgChart from "@/components/content/SvgChart";
import Accordion from "@/components/content/Accordion";
import Simulation from "@/components/simulation/Simulation";
import ImageGrid from "@/components/content/ImageGrid";
import NameGrid from "@/components/content/NameGrid";
import List from "@/components/content/List";
import Spacer from "@/components/content/Spacer";
import Bodynavigation from "./Bodynavigation";

const Content = ({ __typename, ...data }) => {
  if (__typename === "Text") {
    return <Textblock paragraphs={data.text} />;
  }

  // if (__typename === "Chart") {
  //   return <Chart data={data}></Chart>;
  // }

  if (__typename === "Sidenote") {
    if (data.card2) {
      return (
        <MultipleCards
          cards={[data.card1, data.card2, data.card3].filter(Boolean)}
        />
      );
    } else {
      return <Sidenote sidenotetext={data.card1}></Sidenote>;
    }
  }

  // if (type === "multiplecards") {
  //   return <MultipleCards />;
  // }

  if (__typename === "Chart") {
    return (
      <SvgChart
        source={data.source}
        imageoverlay={data.imageOverlay}
        textcontent={data.textOverlay}
      />
    );
  }

  if (__typename === "List") {
    if (data.type === "Accordion") {
      return (
        <Accordion
          title={data.title}
          numbered={data.numbered}
          items={data.items}
          label={data.label}
        />
      );
    }
    if (data.type === "ThreeImageGrid" || data.type === "TwoImageGrid") {
      return <ImageGrid type={data.type} items={data.items} />;
    }
    if (data.type === "NameGrid") {
      return <NameGrid items={data.items} />;
    }
    if (data.type === "List") {
      return <List items={data.items} />;
    }
  }

  // if (type === "bodynav") {
  //   return <Bodynavigation></Bodynavigation>;
  // }

  if (__typename === "Simulation") {
    return <Simulation data={data} />;
  }

  // if (type === "spacer") {
  //   return <Spacer {...data} />;
  // }
};

export default Content;
