import { Logo } from "../logo/Logo";
import MenuIcon from '@mui/icons-material/Menu';
import "./menuStyle.scss";

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
        <MenuIcon className="icon"/>
    </nav>
  )
}
