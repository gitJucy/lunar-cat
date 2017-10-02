import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import './App.css';
import Sidebar from './components/sidebar.js'
import { getEntityTypes,getIndividuals,getPredicates } from './stardog1.js';
import DropBottom from './components/drop_box_bottom.js';
import DropLeft from './components/drop_box_left.js';
import DropRight from './components/drop_box_right.js';
import Qbox from './components/querybox.js';
import ArrowBoxLeft from './components/relate_box_left.js';

class App extends Component {
  constructor(props){
    super(props);
    
    this.state = { 
      ent: [],
      people:[],
      preds:[]
    };

    getEntityTypes().then(ent => {
      this.setState({ent})
    });
    getIndividuals().then(people => {
      this.setState({people})
    });
    getPredicates().then(preds => {
      this.setState({preds});
    });



  }
  render() {
    return (
      <div className='App' style={{backgroundColor:'rgb(238,238,238)'}}>
        <Sidebar ent = {this.state.ent}/>
        <DropBottom people = {this.state.people}/>
        <DropLeft people = {this.state.people} />
        <DropRight people={this.state.people} />
        <Qbox />
        <ArrowBoxLeft />
      </div>
    );
  }

}


export default App;

