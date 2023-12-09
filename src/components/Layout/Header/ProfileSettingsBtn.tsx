import * as React from "react";
import NextLink from "next/link";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import {useTheme} from "@mui/system";
import { signIn, signOut } from "next-auth/react";
import { profilePath } from "@/util/appPaths";


const ProfileSettingsBtn = ({ sessionData }: {sessionData: any }) => {
  const theme = useTheme();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const userProfileImg = sessionData?.user?.image as string;

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open profile settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar
            alt={sessionData?.user?.name as string}
            src={userProfileImg}
          />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem>
          <NextLink
            href={profilePath}
            style={{
              color: theme.palette.text.primary,
              textDecoration: "none",
            }}
          >
            <Typography textAlign="center">Profile</Typography>
          </NextLink>
        </MenuItem>
        <MenuItem onClick={() => (sessionData ? signOut() : signIn())}>
          <Typography textAlign="center">
            {sessionData ? "Logout" : "Login"}
          </Typography>
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default ProfileSettingsBtn