import { 
  Box, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemIcon, 
  Toolbar, 
  Typography, 
  Avatar 
} from '@mui/material';
import React from 'react';
import ArchiveOutlined from '@mui/icons-material/ArchiveOutlined';
import HomeOutlined from "@mui/icons-material/HomeOutlined";
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import { NavLink, useMatch } from 'react-router-dom';
import CompanyLogo from '../../assets/Strada.22_Sticker.png';

const NavDrawer = () => {
  const navList = [
    {
      title: "Dashboard",
      path: "/qwewq/dashboard",
      icon: <HomeOutlined />,
    },
    {
      title: "Archive",
      path: "/123/archive",
      icon: <ArchiveOutlined />,
    },
    {
      title: "Collections",
      path: "/123/collection",
      icon: <CollectionsOutlinedIcon />,
    },
  ];

  return (
    <div style={{ padding: '15px' }}>
      <Toolbar style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img 
          src={CompanyLogo} 
          alt="Company Logo" 
          style={{ width: '50px', height: '60px', marginBottom: '8px' }} 
        />
        <Typography variant="subtitle2" sx={{ mt: 1, fontWeight: 'light' }}>
          WELCOME
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: 'light' }}>
          Bryan
        </Typography>
      </Toolbar>

      <List>
        {navList.map((navInfo) => {
          const isActive = useMatch(navInfo.path) != null;

          return (
            <NavLink 
              to={navInfo.path} 
              key={navInfo.title} 
              style={{ textDecoration: 'none' }}
            >
              <ListItem
                button
                sx={
                  isActive
                    ? {
                        backgroundColor: "rgba(0, 0, 0, 0.1)", // Subtle active highlight
                        borderRadius: '8px',
                        mb: 1,
                        px: 2,
                        py: 1.5,
                      }
                    : { mb: 1, px: 2, py: 1.5 }
                }
              >
                {navInfo.icon && (
                  <ListItemIcon
                    sx={ isActive ? { color: 'black' } : { color: 'gray' } }
                  >
                    {navInfo.icon}
                  </ListItemIcon>
                )}
                <ListItemText 
                  primary={navInfo.title} 
                  sx={{ ml: -1, fontWeight: 'light', color: isActive ? 'black' : 'inherit' }} 
                />
              </ListItem>
            </NavLink>
          );
        })}
      </List>
    </div>
  );
};

const Navbar = ({ mobileOpen = false, drawerWidth = 200, handleDrawerToggle }) => {
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="sidebar navigation"
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            backgroundColor: 'rgba(255, 255, 255, 0.8)', // Transparent, borderless background
            border: 'none',
            boxShadow: 'none',
          },
        }}
      >
        <NavDrawer />
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            backgroundColor: 'rgba(255, 255, 255, 0.8)', // Same transparent background for permanent drawer
            border: 'none',
            boxShadow: 'none',
          },
        }}
        open
      >
        <NavDrawer />
      </Drawer>
    </Box>
  );
};

export default Navbar;
