import React, {Component} from 'react'
import {Grid, Cell} from 'react-mdl'
import {Spring} from 'react-spring'
import { render } from 'react-dom'

import Component1 from './experiment_components/exp_comp1'
import Component1b from './experiment_components/exp_comp1b'

import Component3 from './experiment_components/exp_comp3'

import Toggle from './experiment_components/exp_comp2'

import Trail from './experiment_components/exp_comp4_spring'

import SpringList from 'react-spring-dnd';


var items = ["This"," Is","A","Cool" ,"Draggable", "List"]

class experiments extends Component{
    render(){
        return(
            <Grid className="resume-grid">

                <Cell style={{background:"#3e5280", height:"45%", width:"49%", border:"dotted"}}>
                    <Component1/>
                    <Component1b/>
                    <Component3/>
                </Cell>

                <Cell style={{background:"#3e5280", height:"45%", width:"49%", border:"dotted"}}>
                    <div style={{margin:'auto', width:'50%', marginTop:'40px', marginBottom:"40px"}}>
                        <Toggle/>
                    </div>

                    <div style={{width:"100%",height:"30%", overflowY:"scroll", background:'red', marginBottom:"0px"}}>
                            <h1>SCROLL COMPONENT Y</h1>
                            <h1>SCROLL COMPONENT Y</h1>
                            <h1>SCROLL COMPONENT Y</h1>
                            <h1>SCROLL COMPONENT Y</h1>
                            <h1>SCROLL COMPONENT Y</h1>
                            <h1>SCROLL COMPONENT Y</h1>
                            <h1>SCROLL COMPONENT Y</h1>
                    </div>

                </Cell>

                <Cell style={{background:"#3e5280", height:"45%", width:"49%", border:"dotted"}}>
                    <Trail/>
                </Cell>

                <Cell style={{background:"#3e5280", height:"45%", width:"49%", border:"dotted", overflowY:"scroll"}}>

                    <div style={{width:"25%", margin:"auto", marginTop:"60px"}}>
                        <SpringList style={{textAlign:"center",display:"flex",alignContent:"center"}}>
                            {items.map((item) => (
                            <div key={item} className="draggable" style={{marginTop:"10px",userSelect:"none"}}>{item}</div>
                            ))}
                        </SpringList>
                    </div>

                </Cell>

            </Grid>
        )
    }
}

export default experiments;
