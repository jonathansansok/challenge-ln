import Divider from "../Divider.jsx";
import "./TitleContainer.css";
export default function TitleContainer({ title }) {
  return (
    <section className="title-container">
      <h2>{title}</h2>
      <Divider fullScreen={false} />
    </section>
  );
}
