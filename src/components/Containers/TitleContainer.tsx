import Divider from "../Divider";
import "./TitleContainer.scss";

interface TitleContainerProps  {
  title: string;
  

}


export default function TitleContainer({ title } : TitleContainerProps)  {
  return (
    <section className="title-container">
      <h2>{title}</h2>
      <Divider fullScreen={false} />
    </section>
  );
}
