import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  const links = [
    { name: "Home", link: "/" },
    { name: "Tokenomics", link: "/tokenomics" },
    {
      name: "Whitepaper",
      link: "https://drive.google.com/file/d/12wUlejsHPuImzPBrUmNlmody70lU8AcL/view",
    },
  ];
  return (
    <div className="z-[100000000000000000] w-[100px] h-auto">
      <div
        className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none font-text"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        <div className="py-1" role="none">
          {links.map((item, index) => {
            if (
              item.link !==
              "https://drive.google.com/file/d/12wUlejsHPuImzPBrUmNlmody70lU8AcL/view"
            ) {
              return (
                <Link
                  to={item.link}
                  key={index}
                  className="text-gray-700 block px-4 py-2 text-sm cursor-pointer
                 hover:bg-[#c9b7ee]"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-0"
                >
                  {item.name}
                </Link>
              );
            } else {
              return (
                <a
                  href={item.link}
                  key={index}
                  className="text-gray-700 block px-4 py-2 text-sm cursor-pointer
             hover:bg-[#c9b7ee]"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-0"
                >
                  {item.name}
                </a>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Menu;
