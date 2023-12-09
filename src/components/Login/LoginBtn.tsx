import { signIn, signOut } from "next-auth/react";
import Button from "@mui/material/Button";

const LoginBtn = ({ sessionData } : {sessionData: any}) => {

  if (sessionData) {
    return (
      <>
        <Button variant={"contained"} color={"error"} onClick={() => signOut()}>
          Sign out
        </Button>
      </>
    );
  }
  return (
    <>
      <Button variant={"contained"} color={"success"} onClick={() => signIn()}>
        Sign in
      </Button>
    </>
  );
};

export default LoginBtn;