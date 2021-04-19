import React, {Component} from 'react';
import {useSpring, animated} from 'react-spring'

//const animated = require('react-spring').animated


export default function Component1(){
    const fade = useSpring({
        from:{opacity:0},
        to:{opacity:1}
    })

    const drop = useSpring({
        from:{ marginTop:-500},
        to:{ marginTop:0}
    })
    
    return(
    <animated.div style={fade,drop}>
        <div style={c1Style}>
            <h1>Component 1</h1>
            <p>This object should drop down from top of the screen and fade in</p>
        </div>
     </animated.div>
    )
}

const c1Style ={
    background:"steelblue",
    color:"white",
    padding:"1.5rem"
}