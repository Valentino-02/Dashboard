import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useMediaQuery } from "@mui/material";
import { useSession } from "next-auth/react";
import { ColorModeContext } from "@/app/providers";
import ThemeToggleBtn from "./ThemeToggleBtn";
import Logo from "./Logo";
import ProfileSettingsBtn from "./ProfileSettingsBtn";

const Header = () => {
  const { data: session } = useSession();
  const tabletCheck = useMediaQuery("(min-width: 768px)");

  return (
    <AppBar position="sticky" sx={{ marginBottom: "40px" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo name={"Dashboard"} />
          {tabletCheck && (
            <Box sx={{ paddingRight: 5, marginLeft: "auto" }}>
              <Typography>
                {session && "Signed in as"} {session?.user?.email}
              </Typography>
            </Box>
          )}
          <ThemeToggleBtn ColorModeContext={ColorModeContext} />
          <ProfileSettingsBtn sessionData={session} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
