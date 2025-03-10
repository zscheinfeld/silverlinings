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
import Virtruvianwomannavigation from "./Virtruvianwomannavigation";


const Content = ({ type, data }) => {
  if (type === "text") {
    return <Textblock callouts={[data.callout]} paragraphs={data.paragraphs} />;
  }

  if (type === "chart") {
    return <Chart data={data}></Chart>;
  }

  if (type === "sidenote") {
    return <Sidenote sidenotetext={data.text}></Sidenote>;
  }

  if (type === "multiplecards") {
    return <MultipleCards />;
  }

  if (type === "svgchart") {
    return (
      <SvgChart
        source={data.source}
        imageoverlay={data.imageoverlay}
        overlaycontent={data.imageoverlay}
        textoverlay={data.textoverlay}
        textcontent={data.text}
      />
    );
  }

  if (type === "accordion") {
    return (
      <Accordion
        title={data.title}
        numbered={data.numbered}
        questions={data.questions}
        answers={data.answers}
      />
    );
  }

  if (type === "simulation") {
    return <Simulation data={data} />;
  }

  if (type === "imagegrid") {
    return <ImageGrid {...data} />;
  }

  if (type === "namegrid") {
    return <NameGrid {...data} />;
  }

  if (type === "list") {
    return <List {...data} />;
  }

  if (type === "spacer") {
    return <Spacer {...data} />;
  }

  if (type === "virtruvianwomannavigation") {
    return <Virtruvianwomannavigation>
      
    </Virtruvianwomannavigation>;
  }
};

export default Content;
