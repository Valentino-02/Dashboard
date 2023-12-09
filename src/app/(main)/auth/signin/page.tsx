'use client'

import { useSession } from "next-auth/react";
import Box from "@mui/material/Box";
import LoginBtn from "@/components/Login/LoginBtn";
import { getFirstName } from "@/util/getNames";

const SignIn = () => {
  const { data: session } = useSession();

  const firstName = getFirstName(session)

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>
        {session ? 
          "Welcome " + firstName : 
          "Please log in"
        }
      </h2>
      <LoginBtn sessionData={session} />
    </Box>
  );
};

export default SignIn;