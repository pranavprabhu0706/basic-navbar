import "primereact/resources/themes/lara-light-cyan/theme.css";
import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Badge } from 'primereact/badge';
import './App.css';


export default function TemplateDemo() {
    const itemRenderer = (item) => (
        <a className="flex align-items-center p-menuitem-link">
            <span className={item.icon} />
            <span className="mx-2">{item.label}</span>
            {item.badge && <Badge className="ml-auto" value={item.badge} />}
            {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
        </a>
    );
      const items = [
        {
            label: 'About Us',
            icon: 'pi pi-home',
            template: itemRenderer
        },
        {
          label: 'Leadership',
          icon: 'pi pi-home',
          template: itemRenderer
        },
        {
          label: 'Solutions',
          icon: 'pi pi-file',
          items: [
              {
                  label: 'Autotech',
                  icon: 'pi pi-plus',
                  items: [
                      {
                          label: 'ADAMS',
                          icon: 'pi pi-file',
                          template: itemRenderer
                      },
                      {
                          label: 'ALPS',
                          icon: 'pi pi-image',
                          template: itemRenderer
                      },
                      {
                          label: 'DENALI',
                          icon: 'pi pi-video',
                          template: itemRenderer
                      }
                  ]
              },
              {
                  label: 'Fintech',
                  icon: 'pi pi-history',
                  items: [
                      {
                          label: 'AI Driven Collections',
                          icon: 'pi pi-file',
                          template: itemRenderer
                      },
                      {
                          label: 'AI Driven Lending',
                          icon: 'pi pi-image',
                          template: itemRenderer
                      }
                  ]
              }
          ]
      }
      ,
        {
            label: 'Services',
            icon: 'pi pi-envelope',
            template: itemRenderer
        },
        {
          label: 'Strategic Investments',
          icon: 'pi pi-envelope',
          template: itemRenderer
      },
      {
        label: 'Media',
        icon: 'pi pi-envelope',
        template: itemRenderer
      },
      {
      label: 'Careers',
      icon: 'pi pi-envelope',
      template: itemRenderer
      },
      {
        label: 'Contact Us',
        icon: 'pi pi-envelope',
        template: itemRenderer
      }
    ];

    const start = (
      <img className="img-class" alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeCujROmPnAvOo0tkGQwFhWYzwz02a5VeQLQ&s" />
    );
    
    return (
      <div className="menu-wrapper">
        <Menubar model={items} start={start} />
      </div>
    );
    
}
        