import { Logo } from "../logo/Logo";
import "./menuStyle.scss";
import FadeMenu from "../mobile-menu/FadeMenu";

export const Menu = () => {
  return (
    <nav className="menu-container">
        <Logo />
        <ul>
            <li>Inicio</li>
            <li>Historia</li>
            <li>Interés</li>
            <li>Galería</li>
            <li>Familia</li>
        </ul>
        <FadeMenu className='burger-menu'/>
    </nav>
  )
}
