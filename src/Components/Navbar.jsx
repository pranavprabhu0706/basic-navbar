import React from "react";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Menubar } from "primereact/menubar";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function TemplateDemo() {
  const itemRenderer = (item) => (
    <a className="flex align-items-center p-menuitem-link">
      <span className="mx-2">{item.label}</span>
    </a>
  );

  const items = [
    {
      label: "About Us",
      template: ()=>(<Link to="/AboutUs" className="p-menuitem-link">About Us</Link>),
    },
    {
      label: "Leadership",
      template: ()=><Link to="/Leadership" className="p-menuitem-link">Leadership</Link>,
    },
    {
      label: "Solutions",
      template: ()=>(
        <div className="pi pi-angle-down ml-2">
          <Link to="/Solutions" className="p-menuitem-link">
            Solutions
          </Link>
        </div>
      ),
      items: [
        {
          label: "Autotech",
          items: [
            {
              label: "ADAMS",
              template: itemRenderer,
            },
            {
              label: "ALPS",
              template: itemRenderer,
            },
            {
              label: "DENALI",
              template: itemRenderer,
            },
          ],
        },
        {
          label: "Fintech",
          icon: "pi pi-history",
          items: [
            {
              label: "AI Driven Collections",
              template: itemRenderer,
            },
            {
              label: "AI Driven Lending",
              template: itemRenderer,
            },
          ],
        },
      ],
    },
    {
      label: "Services",
      template: itemRenderer,
    },
    {
      label: "Strategic Investments",
      template: itemRenderer,
    },
    {
      label: "Media",
      template: itemRenderer,
    },
    {
      label: "Careers",
      template: itemRenderer,
    },
    {
      label: "Contact Us",
      template: itemRenderer,
    },
  ];

  const start = (
    <Link to="/">
    <img
      className="img-class"
      alt="logo"
      src="https://www.tvsd.ai/-/media/TVSD/Logo/tvs-digital-logo.svg?la=en&hash=20689CEB7BFC28822AAFE610275691E4"
    />
    </Link>
  );

  return (
    <div className="menu-wrapper">
      <Menubar model={items} start={start} />
    </div>
  );
}
