import React from "react";
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
  FaMedium,
} from "react-icons/fa";
export const links = [
  {
    id: 1,
    url: "/",
    text: "Home",
    icon: <FaHome />,
  },
  {
    id: 2,
    url: "/about",
    text: "About",
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: "/mint",
    text: "Mint",
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: "/contact",
    text: "Contact Us",
    icon: <FaCalendarAlt />,
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.facebook.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.medium.com",
    icon: <FaMedium />,
  },
];
