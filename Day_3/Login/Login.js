import React, { useState } from "react";
import * as Components from "../Login/Component";
import { Link } from "react-router-dom";


function Login() {
  const [signIn, toggle] = React.useState(true);
  const [Email, SetEmail]=useState("");
  const [Password, SetPassword]=useState("");
  return (
    <>
    <div className="imagetrans">
    <Components.Container>
      <Components.SignUpContainer signingIn={signIn}>
        <Components.Form>
          <Components.Title>Register Here!</Components.Title>
          <Components.Input type="text" placeholder="User_Id" />
          <Components.Input type="text" placeholder="User_Name" />
          <Components.Input type="password" placeholder="Password" />
          <Components.Input type="text" placeholder="Email" />
          <Components.Input type="text" placeholder="Phone Number" />
          <Components.Button>Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>
      <Components.SignInContainer signingIn={signIn}>
        <Components.Form>
          <Components.Title>Hey Guys!!</Components.Title>

          <Components.Input type="email" 
          placeholder="User ID" 
          value={Email}
           onChange={(e)=>SetEmail(e.target.value)}/>
          <Components.Input type="password"
           placeholder="Password" 
           value={Password}
            onChange={(e)=>SetPassword(e.target.value)}/>
            
          <Components.Anchor href="#">Forgot your password?</Components.Anchor>
          <Components.Button>Sign In</Components.Button>
        </Components.Form>
      </Components.SignInContainer>
      <Components.OverlayContainer signingIn={signIn}>
        <Components.Overlay signingIn={signIn}>
          <Components.LeftOverlayPanel signingIn={signIn}>
            <Components.Title2>
            <Components.Title>We Promise you 100% data protection</Components.Title>
            </Components.Title2>
            <Components.GhostButtonSignIn onClick={() => toggle(true)}>
              Sign In
            </Components.GhostButtonSignIn>
          </Components.LeftOverlayPanel>
          <Components.RightOverlayPanel signingIn={signIn}>
            <Components.Title1>
            <Components.Title>Get Access to Personalised Shopping Experience</Components.Title>
            </Components.Title1>
            <Components.Paragraph>
            
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Sign Up
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    
   <Link to="/"></Link>
    </Components.Container>
    </div>
    </>
  );
}




export default Login;