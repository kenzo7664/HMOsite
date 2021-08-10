import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
  {
    title: "Dashboard",
    
    icon: <FaIcons.FaTachometerAlt />,
    cName: "nav-text",
  },
  {
    title: "Client",
    path: "/Clients",
    icon: <FaIcons.FaRegBell />,
    cName: "nav-text",
  },
  {
    title: "Provider",
    path: "/Providers",
    icon: <FaIcons.FaRegBell />,
    cName: "nav-text",
  },
  {
    title: "Plans",
    path: "/Plans",
    icon: <FaIcons.FaRegBell />,
    cName: "nav-text",
  },
  {
    title: "Levels",
    path: "/Levels",
    icon: <FaIcons.FaRegBell />,
    cName: "nav-text",
  },
  {
    title: "ID card",
    path: "/ID cards",
    icon: <AiIcons.AiOutlineIdcard />,
    cName: "nav-text",
  },
  {
    title: "Claims",
    path: "/Claims",
    icon: <FaIcons.FaRegBell />,
    cName: "nav-text",
  },
  {
    title: "Principals",
    path: "/Principals",
    icon: <FaIcons.FaRegBell />,
    cName: "nav-text",
  },
  {
    title: "Authorization",
    path: "/Authorizations",
    icon: <FaIcons.FaRegBell />,
    cName: "nav-text",
  },
  {
    title: "Capitations",
    path: "/Capitations",
    icon: <FaIcons.FaRegBell />,
    cName: "nav-text",
  },
];
