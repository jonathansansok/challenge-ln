import "./NoteX2.css";
import "./FocalIzquierdo.css";
import "./FocalDerecho.css";
import "./NoteX6.css";
import "./MainContainer.css";
export default function Grid({ children, styleGrid }) {
  return <div className={styleGrid}>{children}</div>;
}
