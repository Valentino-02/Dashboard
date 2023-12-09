"use client";

import React from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import { SessionProvider } from "next-auth/react";
import darkTheme from "@/theme/darkTheme";
import lightTheme from "@/theme/lightTheme";


type Props = {
  children?: React.ReactNode;
};

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {}
});

export const NextAuthProvider = ({ children }: Props) => {
  return <SessionProvider>
    {children}
  </SessionProvider>;
};

export const ColorThemeProvider = ({ children } : Props) => {
  const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
  const colorMode = React.useMemo(
      () => ({
          toggleColorMode: () => {
              setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
          },
      }),
      [],
  );

  const darkThemeChosen = React.useMemo(
      () =>
          createTheme({
              ...darkTheme
          }),
      [mode],
  )
  const lightThemeChosen = React.useMemo(
      () =>
          createTheme({
              ...lightTheme,
          }),
      [mode],
  )
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={mode === 'dark' ? darkThemeChosen : lightThemeChosen}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}