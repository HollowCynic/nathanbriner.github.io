import { render } from '@testing-library/react';
import React, { Component, useState } from 'react'
import ReactDOM from 'react-dom'
import { Table } from "react-bootstrap"

import Schedule from "./schedule-functions"

import data from "./data/schedule-sem2.json"

import data2 from "./data/schedule.json"

import data3 from "./data/fall2019-schedule.json"


function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}



const class_descpritions = data.map(component =>{
    return(<td style={{background:random_rgba()}} id={component.Time}>
    </td>
    )
})


const class_names = data.map(component =>{
    return(  
    <td className="class-box" style={{background:random_rgba()}}>
        {component.Class}
    </td>
    )
})


const schedule_button_functions={
display_table1(){
    let element1=<div style={{border:"solid"}}><Schedule semester="A random semester 1" classes={data2}/></div>
    ReactDOM.render(element1, document.getElementById("schedule-spot"))
},

display_table2(){
    let element2=<div><div style={{border:"solid"}}><Schedule semester="A random semester 2" classes={data2}/></div></div>
    ReactDOM.render(element2, document.getElementById("schedule-spot"))
},

display_table3(){
    let element3=<div><div><div style={{border:"solid"}}><Schedule semester="A random semester 3" classes={data3}/></div></div></div>
    ReactDOM.render(element3, document.getElementById("schedule-spot"))
},

display_table4(){
    let element4=<div><div><div><div style={{border:"solid"}}><Schedule semester="A random semester 4" classes={data3}/></div></div></div></div>
    ReactDOM.render(element4 ,document.getElementById("schedule-spot"))
},





/*
display_table(){
    var element = <Table className="schedule-table" striped bordered hover>
    <thead>
        <tr>
        <th>Times</th>
        <th>Sunday</th>
        <th>Monday</th>
        <th>Tuesday</th>
        <th>Wednesday</th>
        <th>Thursday</th>
        <th>Friday</th>
        <th>Saturday</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td>8:00</td>
        <td></td>
        <td></td>
        <td></td>
        {class_names[1]}
        <td></td>
        <td></td>
        <td></td>

        </tr>
        <tr>
        <td>8:30</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>

        </tr>
        <tr>
        <td>9:00</td>
        <td rowSpan="2" style={{background:"red"}}>A class</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        
        </tr>
        <tr>
        <td>9:30</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>
        <tr>
        <td>10:00</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>
        <tr>
        <td>10:30</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>
        <tr>
        <td>11:00</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>

        <tr>
        <td>11:30</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>

        <tr>
        <td>12:00</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>
        <tr>
        <td>12:30</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>
        <tr>
        <td>1:00</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>
        <tr>
        <td>1:30</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>
        <tr>
        <td>2:00</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>
        <tr>
        <td>2:30</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>
 
    </tbody>
</Table>

    var header_element = <h1 style={{margin:"auto",width:"15%", fontSize:"40px", color:"black"}}>Semester Fall</h1> 

ReactDOM.render(element,document.getElementById("schedule-spot"))
ReactDOM.render(header_element,document.getElementById("header-spot"))
}
*/

}

export default schedule_button_functions;