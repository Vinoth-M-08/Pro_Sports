import React, { Component } from 'react';  
import { CSSTransition } from 'react-transition-group';  
 function Animations() {
  return ( 
    <div>  
    <h1>Animation Example</h1>  
            <CSSTransition  
               transitionName="example"  
           transitionEnterTimeout={800}  
               transitionLeaveTimeout={600}>  
               <h1>hello contents</h1> 
            </CSSTransition>  
      </div>  
   );
 }
 
 export default Animations;