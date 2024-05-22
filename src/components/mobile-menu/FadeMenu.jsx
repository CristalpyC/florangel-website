import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import MenuIcon from '@mui/icons-material/Menu';

import { useState } from 'react';

export default function FadeMenu({className}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


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
        <MenuItem onClick={handleClose}>Inicio</MenuItem>
        <MenuItem onClick={handleClose}>Historia</MenuItem>
        <MenuItem onClick={handleClose}>Interés</MenuItem>
        <MenuItem onClick={handleClose}>Galería</MenuItem>
        <MenuItem onClick={handleClose}>Familia</MenuItem>
      </Menu>
    </div>
  );
}