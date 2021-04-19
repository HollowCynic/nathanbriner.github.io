import React, {Component} from 'react'
import {Grid, Cell} from 'react-mdl'
import testpic from './images/quickmeedit.png'


class Landing extends Component {
    render(){
        return(
            <div style={{width:'100%', margin: 'auto'}}>
                {setTimeout(function(){alert("This site was designed with 90% browser zoom\n\n" +
                "The formatting may break if viewed at higher zoom levels\n(change zoom with ctrl - and ctrl +)");},1100)}

                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src='https://media2.giphy.com/media/yqMtk0TfjRa5W/source.gif'
                            alt="random"
                            className="random-image"
                        />
                        <img src={testpic} className = 'column'></img>
                        <div className="banner-text" >
                            <h1>Nathan Briner<br/> Computer Science Student</h1>
                            <hr />
                            <p>| CSCI Major | Applied Math Minor | Data Science Certificate |</p>

                            <div className="social-links">
                                {/* Linkedin */}
                                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>

                                {/* Github */}
                                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github" aria-hidden="true"/>
                                </a>

                                {/* Youtube */}
                                <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-google" aria-hidden="true"/>
                                </a>
                            </div>

                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;