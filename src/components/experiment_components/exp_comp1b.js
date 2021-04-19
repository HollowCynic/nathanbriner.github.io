import React, {Component} from 'react';
import {useSpring, animated} from 'react-spring'


export default function Component1b(){


    const fade = useSpring({
        from:{opacity:0},
        to:{opacity:1},
        delay:1
    })

    const drop = useSpring({
        from:{ marginTop:-500},
        to:{ marginTop:0},
        delay:400
    })
    
    return(
    <animated.div style={fade,drop}>
        <div style={c2Style}>
            <h1>Component 1B</h1>
            <p>This object should drop down from top of the screen and fade in</p>
            <button className="button-class" /*onClick={this.props.toggle}*/>This Button Does Nothing</button>
        </div>
     </animated.div>
    )
}

const c2Style ={
    background:"slateblue",
    color:"white",
    padding:"1.5rem"
}
