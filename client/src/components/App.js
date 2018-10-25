import React, { Component } from 'react';
import './App.css';
import Add from './Add.js';
import {Button} from 'react-bootstrap';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
 	     quotes: [] 
    };

    this.getQuotes = this.getQuotes.bind(this);
    this.refreshPage = this.refreshPage.bind(this);
  }

  refreshPage(){ 
    window.location.reload(); 
   }

   getQuotes(){
    fetch('/api/quotes')
     .then(res => res.json())
     .then(quotes => this.setState({ quotes }));
 }

 componentDidMount() {
  this.getQuotes();
 }

 render() {
  return (
    <div>
       <Add />
       <Button bsStyle="warning" bsSize="small" type="button" onClick={ this.refreshPage }> <span className="glyphicon glyphicon-refresh">refresh</span></Button> 

       <h1>Quotes</h1>
          {this.state.quotes.map(quote =>
             <div key={quote._id}> "{quote.quote}" - {quote.name} </div>
          )}
      </div>
    )}
}

export default App;