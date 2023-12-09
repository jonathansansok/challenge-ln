import "./articulos4Ej1.scss";
import "./FocalIzquierdo.scss";
import "./NoteS3.scss";
import "./MainContainer.scss";
import { ReactNode } from "react";

interface GridProps {
  children: ReactNode ;
  styleGrid: string;
} 


export default function Grid({ children, styleGrid } : GridProps) {
  return <div className={styleGrid}>{children}</div>;
}
