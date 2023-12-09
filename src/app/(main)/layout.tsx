"use client";

import { CssBaseline } from "@mui/material";
import { NextAuthProvider, ColorThemeProvider } from "../providers";
import Layout from "@/components/Layout/Layout";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ColorThemeProvider>
      <NextAuthProvider>
        <CssBaseline />
        <Layout>{children}</Layout>
      </NextAuthProvider>
    </ColorThemeProvider>
  );
}
