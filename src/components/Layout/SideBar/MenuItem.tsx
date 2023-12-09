import NextLink from "next/link";
import scss from "@/styles/SideBar.module.scss";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";

interface props {
  text: string, 
  path: string,
  handleClick: (text: string) => void
  open: boolean,
  children: React.ReactNode
}

const MenuItem = ({ text, path, handleClick, open, children } : props) => {
  const theme = useTheme();
  return (
    <ListItem key={text} disablePadding sx={{ display: "block" }}>
      <NextLink
        className={scss.link}
        href={path}
      >
        <ListItemButton
          onClick={() => handleClick(text)}
          title={text}
          aria-label={text}
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : "auto",
              justifyContent: "center",
            }}
          >
            {children}
          </ListItemIcon>
          <ListItemText
            primary={text}
            sx={{
              color: theme.palette.text.primary,
              opacity: open ? 1 : 0,
            }}
          />{" "}
        </ListItemButton>
      </NextLink>
    </ListItem>
  )
}

export default MenuItem