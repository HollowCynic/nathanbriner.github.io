import React, {Component} from 'react'
import { findRenderedComponentWithType } from 'react-dom/test-utils';
import borp from './button-test';
import {Grid, Cell, Button} from 'react-mdl'
import button_functions from './button-test'
import {Table} from 'react-bootstrap'

import schedule_button_functions from './schedule-button-test'

import Schedule from './schedule-functions'

import data from "./data/schedule-sem2.json"

import data2 from './data/schedule.json'

import data3 from './data/fall2019-schedule.json'

import data4 from './data/schedule-sem3.json'



const Schedule_data = data.map(component =>{
    return(<div>
        {component.Class}
    </div>
    )
})

const Schedule_data2 = data.map(component =>{
    return(<td style={{background:"red"}}>
        {component.Class}
    </td>
    )
})




class schedule extends Component {
    constructor(props){
        super(props)

        this.state={
            dtable: <Schedule semester="Random Semester 1" classes={data2}/>
        }
    }

    changedtable(numb){
        if(numb == 1){
            this.setState({dtable:<Schedule key={1} semester="Random Semester 1" classes={data2}/>})
        }
        else if(numb == 2)
            this.setState({dtable: <Schedule key={2} semester="Random Semester 2" classes={data}/>})
        else if(numb == 3)
            this.setState({dtable: <Schedule key={3} semester="Random Semester 3" classes={data3}/>})
        else if(numb == 4)
            this.setState({dtable: <Schedule key={4} semester="Random Semester 4" classes={data4}/>})
    }


    render(){
        return(
            <Grid className="landing-grid">
                <Cell col={12}>
                    <div>
                        <h1 className="schedule-header">Schedule</h1>
                        <Button raised colored ripple hover style={{background:"#45148f"}} onClick={() => this.changedtable(1)}>Semester 1</Button>
                        <Button raised colored ripple hover style={{background:"#531ba8"}} onClick={() => this.changedtable(2)}>Semester 2</Button>
                        <Button raised colored ripple hover style={{background:"#6122bf"}} onClick={() => this.changedtable(3)}>Semester 3</Button>
                        <Button raised colored ripple hover style={{background:"#722cdb"}} onClick={() => this.changedtable(4)}>Semester 4</Button>
                        
                        {/*<div id ="header-spot"></div>*/}
                        <div id="schedule-spot">

                            <div style={{border:"solid", marginBottom:'0px', paddingBottom:'0px'}}>
                                {/*<Schedule semester="asdfasdf" classes={data2}/>*/}
                                <div key={this.props.dtable}>{this.state.dtable}</div>
                                {/*<div>{this.state.dtable}</div>*/}
                            </div>

                        </div>
                    </div>
                </Cell>
            </Grid>
        );
    }
}

export default schedule;

                            {/*
                           <Table className="schedule-table" striped bordered hover>
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
                                    <td>{Schedule_data[0]}</td>
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
                                    {Schedule_data2[2]}
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
                                    <td style={{background:"red"}}>{Schedule_data[1]}</td>
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
                            */}