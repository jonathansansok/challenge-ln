import "./Divider.scss";

interface DividerProps {
  fullScreen: boolean;
} 


export default function Divider({ fullScreen } : DividerProps) {
  return <div className={fullScreen ? "divider fullDivider" : "divider"}></div>;
}
