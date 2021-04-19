import React, {Component} from 'react'
import { findRenderedComponentWithType } from 'react-dom/test-utils';
import button_functions from './button-test';
import {Grid, Cell} from 'react-mdl'
import buffme from './images/weirdmearnold.png'
import Education from './education'
import Experience from './experience'


class Aboutme extends Component{
    render(){
        return(
            <div className="div-100">
                <Grid className="resume-grid">
                    <Cell col={4}>
                        <div style={{textAlign:"center"}}>
                            <img src={buffme} style={{padding:"8px",paddingTop:"8px",float:"center", margin:"auto", textAlign:"center", border:"dashed"}}/>
                        </div>
                        <h2 style={{paddingTop:"1em", fontSize:"40px", fontWeigth:"bold", color:"white"}}>Nate "THE TERMINATOR" Briner</h2>
                        <h4 style={{color:"grey"}}>Programmer</h4>
                        <hr style={{borderTop:"3px solid #162557",width:"100%"}}/>
                        <p className="schedule-paragraph">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                         when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but als
                        </p>
                        <hr style={{borderTop:"3px solid #162557",width:"100%"}}/>
                        <h5>Address</h5>
                        <p className="schedule-paragraph">519 Dove Ct. Grand Junction, CO</p>
                        <h5>phone</h5>
                        <p className="schedule-paragraph">(970)-261-7766</p>
                        <h5>Email</h5>
                        <p className="schedule-paragraph">nabriner@mavs.coloradomesa.edu</p>
                        <h5>website</h5>
                        <p className="schedule-paragraph">Work In Progress</p>
                        <hr style={{borderTop:"3px solid #162557",width:"100%"}}/>
                    </Cell>
                    <Cell className="resume-right-col" col ={8}>
                        <h1>Education</h1>
                        <Education
                        className="education"
                        startYear={2019}
                        endYear="present"
                        school="Colorado Mesa University"
                        schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                          type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                           remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem 
                           Ipsum passages, and more recently with desktop p"/>
                        
                        <h1>Experience</h1>
                        <Experience
                            startYear={2020}
                            endYear="present"
                            jobName="Learnup"
                            jobDescription="Learnup is a nonprofit with aims to teach reading to dyslexic children. I worked on a small team making a learning board software
                            that allows kids to form and sound out words."
                            />
                        <Experience
                            startYear={2021}
                            endYear="present"
                            jobName="Cybercenter"
                            jobDescription="Wrote research papers related to cyber security with applications of machine learning and data science."
                        />
                        <Experience
                            startYear="(Mesozoic Era) 250"
                            endYear="66 million years ago"
                            jobName="Professional Dinosaur Hunter"
                            jobDescription="Used my superior robot body to eliminate all the dinsoaurs."
                            />
                    </Cell>
                </Grid>
            </div>
        )
    }
}











/*

import data from "./data/schedule2.json"



const Schedule_data = data.map(component =>{
    return(<div>
        {component.Class}
    </div>
    )
})


class aboutme extends Component {
    render(){
        return(
            <div>  
                <Grid className="landing-grid">*
                    <h1>About</h1>
                    <h2>{Schedule_data}</h2>
                    <h3>{Schedule_data[0]}</h3>
                    <button onClick={button_functions.borp3}>BORP</button>
                    <p id="header 1"></p>
                </Grid>
            </div>
        );
    }
}
*/
export default Aboutme;