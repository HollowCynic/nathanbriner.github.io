import { render } from '@testing-library/react';
import React from 'react'
import ReactDOM from 'react-dom'

const button_functions={

    borp(){
        console.log("bye");
    },

    borp2() {
        var x = document.createElement("BUTTON");
        var t = document.createTextNode("Click me");
        x.appendChild(t);
        document.body.appendChild(x);
    },

    borp3(){
        var element = <p>THIS TEST WORKED</p>;  
        ReactDOM.render(element, document.getElementById('header 1'))
    },

    borp4(){
        var element = <p style={{fontSize:"24px"}}>This is where my schedule will be
                         This is where my schedule will be
                     </p>
        ReactDOM.render(element, document.getElementById("schedule-spot"))
    }

}






/*
function borp2(){
    var x = document.createElement("Button")
    x.style.display = "block";
}*/



/*
function borp3(){
    let element = document.createElement("BUTTON")
    const currentdiv = document.getElementById()
    document.body
}*/

/*
  function borp3(){
        const text=()=>{
            return <p>USER</p>
        }
        class testerthing extends React.Component{
            render(){
                return(
                    <div>
                        text();
                    </div>
                )
            }
        }
  }
*/

//export default {borp, borp2};

export default button_functions;

