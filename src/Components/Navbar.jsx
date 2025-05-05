import React, { useState, useEffect } from "react";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Menubar } from "primereact/menubar";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function TemplateDemo() {
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    const storedItem = localStorage.getItem("activeMenuItem");
    if (storedItem) {
      setActiveItem(storedItem);
    }
  }, []);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    localStorage.setItem("activeMenuItem", itemName);
  };

  const items = [
    {
      label: "About Us",
      template: () => (
        <Link
          to="/AboutUs"
          className={`p-menuitem-link ${activeItem === "About Us" ? "clicked" : ""}`}
          onClick={() => handleItemClick("About Us")}
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
          onClick={() => handleItemClick("Leadership")}
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
          onClick={() => handleItemClick("Solutions")}
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
                  onClick={() => handleItemClick("Solutions")}
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
                  onClick={() => handleItemClick("Solutions")}
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
                  onClick={() => handleItemClick("Solutions")}
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
                  onClick={() => handleItemClick("Solutions")}
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
                  onClick={() => handleItemClick("Solutions")}
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
          onClick={() => handleItemClick("Services")}
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
          onClick={() => handleItemClick("Strategic Investments")}
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
          onClick={() => handleItemClick("Media")}
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
          onClick={() => handleItemClick("Careers")}
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
          onClick={() => handleItemClick("Contact Us")}
        >
          Contact Us
        </Link>
      ),
    },
  ];

  const start = (
    <Link to="/Home" onClick={() => {
      setActiveItem(null);
      localStorage.removeItem("activeMenuItem");
    }}>
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
