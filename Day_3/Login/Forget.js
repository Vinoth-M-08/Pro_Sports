import React from "react";
import * as Components from "../Login/Component";
import "../Login/log.css"

import { Application } from '@splinetool/runtime';

function Forget() {
  const [signIn, toggle] = React.useState(true);

  const canvas = document.getElementById('canvas3d');
  const app = new Application(canvas);
  app.load('https://prod.spline.design/qO14KoCZCvvu8RVm/scene.splinecode');
  
  return (
    <>
    {/* <div className="imagetrans">
    <Components.Container>
      <Components.SignUpContainer>
      </Components.SignUpContainer>
      <Components.SignInContainer>
        <Components.Form>
          <Components.Title></Components.Title>
          <div className="f-pass">
          <Components.Input type="email" placeholder="Enter Mail Id to request Password" />
          </div>
          <div className="f-passBut">
          <Components.Button>Request Password</Components.Button>
          </div>
        </Components.Form>
      </Components.SignInContainer>

    </Components.Container>
    </div> */}
    
    </>
  );
}




export default Forget;