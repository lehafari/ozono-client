import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import { useContext } from 'react';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import menuLogo from '../../../assets/images/profile-menu.svg';
import menuLogoBlue from '../../../assets/images/profile-menu-blue.svg';
import { AuthContext } from '../../../context/auth/authContext';
import { types } from '../../../context/types/types';
import { useNavigate } from 'react-router-dom';

export default function ProfileMenu() {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch({ type: types.logout });
    localStorage.removeItem('rt');
    localStorage.removeItem('at');
    navigate('/');
    console.log('logout');
    handleClose();
  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="large"
            sx={{ ml: 2, transition: 'all 0.3s ease-in-out' }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <img src={menuLogo} alt="Menu" />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 13px 36px rgba(23, 10, 162, 0.1))',
            borderRadius: '10px',
            mt: 0,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem
          sx={{
            justifyContent: 'end',
            marginBottom: '1.2rem',
            '&:hover': {
              backgroundColor: '#fff',
            },
          }}
        >
          <img src={menuLogoBlue} alt="logo" />
        </MenuItem>
        <MenuItem
          sx={{
            justifyContent: 'end',
            fontSize: '1rem',
            color: '#767676',
            padding: '0.5rem 3rem 0.5rem 3rem ',
            fontWeight: '500',
            fontFamily: 'helvetica',
            '&:hover': {
              color: '#5e82be',
            },
          }}
        >
          Cursos
        </MenuItem>
        <MenuItem
          sx={{
            justifyContent: 'end',
            fontSize: '1rem',
            color: '#767676',
            padding: '0.5rem 3rem 0.5rem 3rem ',
            fontWeight: '500',
            fontFamily: 'helvetica',
            '&:hover': {
              color: '#5e82be',
            },
          }}
        >
          Pagos
        </MenuItem>
        <Divider
          sx={{
            backgroundColor: '#5e82be',
            width: '70%',
            margin: '0.5rem auto',
          }}
        />
        <MenuItem
          sx={{
            paddingLeft: '1rem',
            justifyContent: 'end',
            fontSize: '1rem',
            color: '#767676',
            padding: '0.5rem 3rem 0.5rem 3rem ',
            fontWeight: '500',
            fontFamily: 'helvetica',
            '&:hover': {
              color: '#5e82be',
            },
          }}
        >
          Mis calificaciones
        </MenuItem>
        <MenuItem
          sx={{
            justifyContent: 'end',
            fontSize: '1rem',
            color: '#767676',
            padding: '0.5rem 3rem 0.5rem 3rem ',
            fontWeight: '500',
            fontFamily: 'helvetica',
            '&:hover': {
              color: '#5e82be',
            },
          }}
        >
          Editar perfil
        </MenuItem>
        <MenuItem
          sx={{
            justifyContent: 'end',
            marginBottom: '1.2rem',
            fontSize: '1rem',
            color: '#767676',
            padding: '0.5rem 3rem 0.5rem 3rem ',
            fontWeight: '500',
            fontFamily: 'helvetica',
            '&:hover': {
              color: '#5e82be',
            },
          }}
          onClick={handleLogout}
        >
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
