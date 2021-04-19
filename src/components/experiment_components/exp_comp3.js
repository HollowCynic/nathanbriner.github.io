import React, {useState} from 'react'
import {useSpring, animated} from 'react-spring'

export default function Component3(){
    const[isToggled,setToggle] = useState(false);

    const fade = useSpring({
        opacity:isToggled ? 0:1 
    })


    return(
        <animated.div style={fade}>
            <div style={c3Style} onClick={()=>setToggle(!isToggled)}>
                <h1>Component 3</h1>
                <p style={{color:"grey", fontSize:"18px"}}>This is the third component. <b>Click</b> the component to fade out</p>
            </div>
        </animated.div>
    )
}

const c3Style ={
    background:"skyblue",
    color:"white",
    padding:"1.5rem",
    marginBottom:0
}
