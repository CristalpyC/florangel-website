import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types';

import { useState } from 'react';
import { Link } from '../../styles/Style';
import { specialScroll } from '../../services/specialScroll';

export default function FadeMenu({ className }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const scrollAnimation = (e, targetId, offsetTarget) => {
    setAnchorEl(null);
    specialScroll(e, targetId, offsetTarget);
  }

  const sections = [
    { id: 'banner-container', name: 'Inicio', top: 100},
    { id: 'history-section', name: 'Historia', top: 120},
    { id: 'interest-container', name: 'Interés', top: 100},
    { id: 'gallery-photos', name: 'Galería', top: 150},
    { id: 'fam-section', name: 'Familia', top: 60},
  ];
  
  return (
    <div className={className}>
      <MenuIcon
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      />
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
          sx: {
            bgcolor: '#edd9ed',
          },
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >

        {sections.map((items, index) => (
          <Link 
          key={index}
          href={`#${items.id}`}
          onClick={(e) => scrollAnimation(e, items.id, items.top)}>
            <MenuItem onClick={handleClose}>
              {items.name}
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </div>
  );
}

FadeMenu.propTypes = {
  className: PropTypes.string.isRequired,
}