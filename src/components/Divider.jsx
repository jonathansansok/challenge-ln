import "./Divider.scss";
export default function Divider({ fullScreen }) {
  return <div className={fullScreen ? "divider fullDivider" : "divider"}></div>;
}
