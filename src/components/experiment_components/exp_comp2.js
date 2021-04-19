import React, {useState} from 'react'
import { useSpring, animated } from 'react-spring'


const Toggle = () =>{
    const[isToggled,setToggle] = useState(false);

    const fade = useSpring({
        fontSize:isToggled ? '2rem':'17em',
        color:isToggled ? 'white':'#2ded43'
    })
    const drop = useSpring({
        marginTop: isToggled ? 10:100,
        marginLeft: isToggled ? 20:100
    })
    

    return(
        <div>
            <animated.h1 style={fade}>Hello</animated.h1>
            <button onClick={()=>setToggle(!isToggled)} style={{margin:''}}>Toggle</button>
        </div>
    )
}

export default Toggle;