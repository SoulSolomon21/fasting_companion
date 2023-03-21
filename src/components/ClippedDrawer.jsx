import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Outlet, useNavigate } from 'react-router-dom';


const drawerWidth = 240;

export default function ClippedDrawer() {
  const navigate = useNavigate()

  const handleClick = path => e => {
    e.preventDefault()
    navigate(`/${path}`)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Fasting Companion
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          // display: "none",
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={handleClick("")}>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton onClick={handleClick("calendar")}>
                <ListItemText primary="Calendar" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton onClick={handleClick("journal")}>
                <ListItemText primary="Journal" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton onClick={handleClick("mealsRecommendation")}>
                <ListItemText primary="Meals Recommendation" />
              </ListItemButton>
            </ListItem>
            <Divider />
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}


// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//       flexGrow: 1,
//       padding: theme.spacing(3),
//       transition: theme.transitions.create('margin', {
//           easing: theme.transitions.easing.sharp,
//           duration: theme.transitions.duration.leavingScreen,
//       }),
//       marginLeft: `-${drawerWidth}px`,
//       ...(open && {
//           transition: theme.transitions.create('margin', {
//               easing: theme.transitions.easing.easeOut,
//               duration: theme.transitions.duration.enteringScreen,
//           }),
//           marginLeft: 0,
//       }),
//   }),
// );

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//       width: `calc(100% - ${drawerWidth}px)`,
//       marginLeft: `${drawerWidth}px`,
//       transition: theme.transitions.create(['margin', 'width'], {
//           easing: theme.transitions.easing.easeOut,
//           duration: theme.transitions.duration.enteringScreen,
//       }),
//   }),
// }));

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: 'flex-end',
// }));

// export default function NavBar() {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//       setOpen(true);
//   };

//   const handleDrawerClose = () => {
//       setOpen(false);
//   };

//   return (
//       <Box sx={{ display: 'flex' }}>
//           <CssBaseline />
//           <AppBar position="fixed" open={open}>
//               <Toolbar>
//                   <IconButton
//                       color="inherit"
//                       aria-label="open drawer"
//                       onClick={handleDrawerOpen}
//                       edge="start"
//                       sx={{ mr: 2, ...(open && { display: 'none' }) }}
//                   >
//                       <MenuIcon />
//                   </IconButton>
//                   <Typography variant="h6" noWrap component="div">
//                       Persistent drawer
//                   </Typography>
//               </Toolbar>
//           </AppBar>
//           <Drawer
//               sx={{
//                   width: drawerWidth,
//                   flexShrink: 0,
//                   '& .MuiDrawer-paper': {
//                       width: drawerWidth,
//                       boxSizing: 'border-box',
//                   },
//               }}
//               variant="persistent"
//               anchor="left"
//               open={open}
//           >
//               <DrawerHeader>
//                   <IconButton onClick={handleDrawerClose}>
//                       {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//                   </IconButton>
//               </DrawerHeader>
//               <Divider />
//               <List>
//                   <ListItem disablePadding>
//                       <ListItemButton >
//                           <ListItemText primary="Dashboard" />
//                       </ListItemButton>
//                   </ListItem>
//                   <Divider />
//                   <ListItem disablePadding>
//                       <ListItemButton >
//                           <ListItemText primary="Calendar" />
//                       </ListItemButton>
//                   </ListItem>
//                   <Divider />
//                   <ListItem disablePadding>
//                       <ListItemButton >
//                           <ListItemText primary="Journal" />
//                       </ListItemButton>
//                   </ListItem>
//                   <Divider />
//                   <ListItem disablePadding>
//                       <ListItemButton >
//                           <ListItemText primary="Meals Recommendation" />
//                       </ListItemButton>
//                   </ListItem>
//                   <Divider />
//                   <ListItem disablePadding>
//                       <ListItemButton >
//                           <ListItemText primary="Account" />
//                       </ListItemButton>
//                   </ListItem>
//                   <Divider />
//               </List>
//           </Drawer>
//           <Main open={open}>
//               <DrawerHeader />
//               <Notes />
//           </Main>
//       </Box>
//   );
// }