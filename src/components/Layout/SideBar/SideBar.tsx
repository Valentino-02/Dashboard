import * as React from 'react'
import scss from "@/styles/SideBar.module.scss";
import { CSSObject } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Person2Icon from "@mui/icons-material/Person2";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import HomeIcon from "@mui/icons-material/Home";
import { Settings } from "@mui/icons-material";
import {
  Divider,
  Drawer,
  List,
  Theme,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { signOut } from "next-auth/react";
import MenuItem from "./MenuItem";
import { dataPath, homePath, profilePath, settingsPath } from "@/util/appPaths";


const drawerWidth = 240;

const menuItemInfo = [
  {
    name: 'Home',
    path: homePath,
    icon: <HomeIcon />
  },
  {
    name: 'Data',
    path: dataPath,
    icon: <EqualizerIcon />
  },
  {
    name: 'Profile',
    path: profilePath,
    icon: <Person2Icon />
  },
  {
    name: 'Settings',
    path: settingsPath,
    icon: <Settings />
  },
  {
    name: 'Sign Out',
    path: '',
    icon: <ExitToAppIcon />
  },
]


const SideBar = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const mobileCheck = useMediaQuery("(min-width: 600px)");

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleListItemButtonClick = (text: string) => {
    text === "Sign Out" ? signOut() : null;
    setOpen(false);
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      open={open}
      className={scss.sideMenu}
      sx={{
        width: drawerWidth,
        [`& .MuiDrawer-paper`]: {
          left: 0,
          top: mobileCheck ? 64 : 57,
          flexShrink: 0,
          whiteSpace: "nowrap",
          boxSizing: "border-box",
          ...(open && {
            ...openedMixin(theme),
            "& .MuiDrawer-paper": openedMixin(theme),
          }),
          ...(!open && {
            ...closedMixin(theme),
            "& .MuiDrawer-paper": closedMixin(theme),
          }),
        },
      }}
    >
      <div className={scss.drawerHeader}>
        <IconButton onClick={handleDrawerToggle}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <Divider />
      <List>
        {menuItemInfo.map((info) => (
          <MenuItem 
            text={info.name} 
            path={info.path}
            handleClick={() => handleListItemButtonClick(info.name)}
            open={open}
          >
            {info.icon}
          </MenuItem>
        ))}
      </List>
    </Drawer>
  );
};


const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});


export default SideBar;