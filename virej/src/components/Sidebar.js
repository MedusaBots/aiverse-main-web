import { links } from "./Data";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <h2>Sidebar</h2>
      <ul className="sideber-links">
        {links.map((link) => {
          const { id, url, text } = link;
          return (
            <li key={id}>
              <a href={url}>{text}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
