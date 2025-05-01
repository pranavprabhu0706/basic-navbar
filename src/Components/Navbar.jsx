import React, { useState } from "react";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Menubar } from "primereact/menubar";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function TemplateDemo() {
  
  const [activeItem, setActiveItem] = useState(null);

  const items = [
    {
      label: "About Us",
      template: () => (
        <Link
          to="/AboutUs"
          className={`p-menuitem-link ${activeItem === "About Us" ? "clicked" : ""}`}
          onClick={() => setActiveItem("About Us")}
        >
          About Us
        </Link>
      ),
    },
    {
      label: "Leadership",
      template: () => (
        <Link
          to="/Leadership"
          className={`p-menuitem-link ${activeItem === "Leadership" ? "clicked" : ""}`}
          onClick={() => setActiveItem("Leadership")}
        >
          Leadership
        </Link>
      ),
    },
    {
      label: "Solutions",
      template: () => (
        <Link
          to="Solutions"
          className={`p-menuitem-link ${activeItem === "Solutions" ? "clicked" : ""}`}
          onClick={() => setActiveItem("Solutions")}
        >
          Solutions
        </Link>
      ),
      items: [
        {
          label: "Autotech",
          items: [
            {
              label: "ADAMS",
              template: () => (
                <Link
                  to="Adams"
                  className={`p-menuitem-link ${activeItem === "ADAMS" ? "clicked" : ""}`}
                  onClick={() => setActiveItem("Solutions")}
                >
                  ADAMS
                </Link>
              ),
            },
            {
              label: "ALPS",
              template: () => (
                <Link
                  to="Alps"
                  className={`p-menuitem-link ${activeItem === "ALPS" ? "clicked" : ""}`}
                  onClick={() => setActiveItem("Solutions")}
                >
                  ALPS
                </Link>
              ),
            },
            {
              label: "DENALI",
              template: () => (
                <Link
                  to="Denali"
                  className={`p-menuitem-link ${activeItem === "DENALI" ? "clicked" : ""}`}
                  onClick={() => setActiveItem("Solutions")}
                >
                  DENALI
                </Link>
              ),
            },
          ],
        },
        {
          label: "Fintech",
          items: [
            {
              label: "AI Driven Collections",
              template: () => (
                <Link
                  to="Collections"
                  className={`p-menuitem-link ${activeItem === "AI Driven Collections" ? "clicked" : ""}`}
                  onClick={() => setActiveItem("Solutions")}
                >
                  AI Driven Collections
                </Link>
              ),
            },
            {
              label: "AI Driven Lending",
              template: () => (
                <Link
                  to="Lending"
                  className={`p-menuitem-link ${activeItem === "AI Driven Lending" ? "clicked" : ""}`}
                  onClick={() => setActiveItem("Solutions")}
                >
                  AI Driven Lending
                </Link>
              ),
            },
          ],
        },
      ],
    },
    {
      label: "Services",
      template: () => (
        <Link
          to="Services"
          className={`p-menuitem-link ${activeItem === "Services" ? "clicked" : ""}`}
          onClick={() => setActiveItem("Services")}
        >
          Services
        </Link>
      ),
    },
    {
      label: "Strategic Investments",
      template: () => (
        <Link
          to="StrategicInvestments"
          className={`p-menuitem-link ${activeItem === "Strategic Investments" ? "clicked" : ""}`}
          onClick={() => setActiveItem("Strategic Investments")}
        >
          Strategic Investments
        </Link>
      ),
    },
    {
      label: "Media",
      template: () => (
        <Link
          to="Media"
          className={`p-menuitem-link ${activeItem === "Media" ? "clicked" : ""}`}
          onClick={() => setActiveItem("Media")}
        >
          Media
        </Link>
      ),
    },
    {
      label: "Careers",
      template: () => (
        <Link
          to="Careers"
          className={`p-menuitem-link ${activeItem === "Careers" ? "clicked" : ""}`}
          onClick={() => setActiveItem("Careers")}
        >
          Careers
        </Link>
      ),
    },
    {
      label: "Contact Us",
      template: () => (
        <Link
          to="ContactUs"
          className={`p-menuitem-link ${activeItem === "Contact Us" ? "clicked" : ""}`}
          onClick={() => setActiveItem("Contact Us")}
        >
          Contact Us
        </Link>
      ),
    },
  ];

  const start = (
    <Link to="/" onClick={() => setActiveItem(null)}>
      <img
        className="img-class"
        alt="logo"
        src="https://www.tvsd.ai/-/media/TVSD/Logo/tvs-digital-logo.svg?la=en&hash=20689CEB7BFC28822AAFE610275691E4"
      />
    </Link>
  );

  return (
      <div className="navbar-container">
        <div className="menu-wrapper">
          <Menubar model={items} start={start} />
        </div>
      </div>
  );
}