//react router
import { Link } from 'react-router-dom';
// MUI components
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';

import Container from '@mui/material/Container';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
// icons
import MenuIcon from '@material-ui/icons/Menu';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import { Divider } from '@mui/material';




const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="fixed" sx={{backgroundColor:'var(--main-blue)'}}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex', fontSize:'2rem'} }}
          >
            HALA
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon fontSize="large" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'flex', md: 'none' },
                
              }}
            >
            <MenuList  sx={{display:'flex', flexDirection:'column', padding:'0 20px',width:'200px'}} >
              <Link to='/'  className='react-link'>
                <MenuItem onClick={handleCloseNavMenu} >
                    <ListItemIcon>
                        <LocalAtmIcon fontSize="large" />
                    </ListItemIcon>
   
                    <ListItemText >Budget & Expense Tracker</ListItemText>
                </MenuItem>

              </Link>
                <Link to='/stock'  className='react-link'>
                <MenuItem onClick={handleCloseNavMenu} >
                    <ListItemIcon>
                        < ShowChartIcon fontSize="large" />
                    </ListItemIcon>

                    <ListItemText>Stock Tracker</ListItemText>
                </MenuItem>
              </Link>

            </MenuList>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', fontSize:'2rem' } }}
          >
            HALA
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'}}}>

                <>
              <div
                onClick={handleCloseNavMenu}
                style={{ my: 2, color: 'white', display: 'block',  fontSize:'1.5rem'}}
                >
                < Link to='/'  className='react-link'>Budget & Expense Tracker</Link>
                 
              </div>
              <Divider orientation="vertical" sx={{ height:"15px", borderColor:'white', margin:'0 10px'}}/>
              <div
                onClick={handleCloseNavMenu}
                style={{ my: 2, color: 'white', display: 'block', fontSize:'1.5rem' }}
                >
                < Link to='/stock'  className='react-link'> Stock Tracker</Link>
              </div>
              </>

             
                   
          </Box>

       
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar