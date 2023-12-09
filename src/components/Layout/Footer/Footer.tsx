import React from "react";
import scss from "@/styles/Footer.module.scss";
import { signIn, signOut, useSession } from "next-auth/react";
import Button from "@mui/material/Button";
import { Paper, useTheme } from "@mui/material";
import Link from "next/link";
import styled from "@emotion/styled";
import { dataPath, homePath, profilePath, settingsPath } from "@/util/appPaths";

const Footer = () => {
  const { data: session } = useSession();
  const theme = useTheme();

  const FooterLink = styled(Link)`
    color: ${theme.palette.text.primary};
  `;

  return (
    <footer className={scss.footer}>
      <Paper sx={{ width: "100%" }} color={"#262626"}>
        <ul role="menu">
          <li>
            <FooterLink href={homePath}>Home</FooterLink>
          </li>
          <li>
            <FooterLink href={dataPath}>Data</FooterLink>
          </li>
          <li>
            <FooterLink href={profilePath}>Profile</FooterLink>
          </li>
          <li>
            <FooterLink href={settingsPath}>Settings</FooterLink>
          </li>
          <li>
            <FooterLink href={"/#termsandconditions"}>
              Terms & Conditions
            </FooterLink>
          </li>
          <li>
            <FooterLink href={"/#accessibilitystatement"}>
              Accessibility statement
            </FooterLink>
          </li>
          <li>
            <Button
              variant={"text"}
              color={session ? "error" : "success"}
              onClick={() => (session ? signOut() : signIn())}
            >
              {session ? "Sign Out" : "Sign In"}
            </Button>
          </li>
        </ul>
      </Paper>
    </footer>
  );
};

export default Footer;