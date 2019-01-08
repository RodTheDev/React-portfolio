import React, { Component } from 'react';
import {Grid,  Cell} from 'react-mdl';
import Typing from 'react-typing-animation';
class Landing extends Component {
  render() {
  return(


    <section className="landing-page">
      <Grid className="landing-grid">
      <Cell col={12}>
        <img
        src="" alt=""/>
        <Typing>
          <Typing.Speed ms={10} />
          <span ><h1>Hey There!</h1></span>
          <Typing.Speed ms={20} />
          <span><h2>My name is <u>Rodrigo Barocio</u> I love
          <Typing.Speed ms={20} />
          <span className="txt-chng"> coding.<Typing.Delay ms={800} /></span>
          <Typing.Backspace count={7}/>
          <span className="txt-chng"> learning.<Typing.Delay ms={800} /></span>
          <Typing.Backspace count={10}/>
          <span className="txt-chng"> building the web.</span>
          </h2>
          </span>
        </Typing>
        <div className="social">
        
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-free-code-camp"></i>
          <i className="fab fa-github"></i>
        </div>
      </Cell>
      </Grid>

      <Grid className="demo-grid-1">
        <Cell col={4}>Cell1</Cell>
        <Cell col={4}>Cell2</Cell>
        <Cell col={4}>cell3</Cell>
      </Grid>
      </section>




  ) //end return
  }
}

export default Landing;
