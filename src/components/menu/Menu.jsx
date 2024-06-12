import { Logo } from "../logo/Logo";
import "./menuStyle.scss";
import FadeMenu from "../mobile-menu/FadeMenu";
import { useState } from "react";
import { handleScroll } from "../../services/handleScroll";

export const Menu = () => {
  const [activeLink, setActive] = useState(null);

  // scroll animation
  const scrollToTarget = (event, targetId) => {
    handleScroll(event, targetId);
    setActive(targetId);
  }
  
  const sections = [
    { id: 'banner-container', name: 'Inicio'},
    { id: 'history-section', name: 'Historia'},
    { id: 'interest-container', name: 'Interés'},
    { id: 'gallery-photos', name: 'Galería'},
    { id: 'fam-section', name: 'Familia'},
  ];

  return (
    <nav className="menu-container">
        <Logo />
        <ul>
            {sections.map((items, index) => (
              <li key={index}><a className={activeLink === items.id ? "active-link" : "link"} href={`#${items.id}`} onClick={(e) => scrollToTarget(e, items.id)}>{items.name}</a></li>
            ))}
        </ul>
        <FadeMenu className='burger-menu'/>
    </nav>
  )
}
