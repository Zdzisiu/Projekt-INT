import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import diceRoll from './akiirie';
import reportWebVitals from './reportWebVitals';

//img import
import one from './img/kostka/ver. black and white/1.png'
import two from './img/kostka/ver. black and white/2.png';
import three from './img/kostka/ver. black and white/3.png';
import four from './img/kostka/ver. black and white/4.png';
import five from './img/kostka/ver. black and white/5.png';
import six from './img/kostka/ver. black and white/6.png';

import red from './img/pionki/red.png';
import blue from './img/pionki/blue.png';
import green from './img/pionki/green.png';
import yellow from './img/pionki/yellow.png';

var turn,a;
var die = one;
const dice = [one,two,three,four,five,six];

const tab = [0,1,2,3,4,5,7,,9,11,19,18,17,16,15,14,13,28,33,34,35,36,37,38,39,48,50,52,54,56,58,59,60,57,55,53,51,49,41,42,43,44,45,46,47,32,27,26,25,25,24,23,22,21,12,10,8,6,4];
const colors = [red,green,blue,yellow];

var square = [];
var start = [];
var redUser = [0,0,0,0];
var blueUser = [0,0,0,0];
var greenUser = [0,0,0,0];
var yellowUser = [0,0,0,0];

var id = 0;
var id_start=0;
var id_end=0;

function GameRoll(){
  a = diceRoll();
  die = dice[a-1];
  console.log("kostka"+a);

  /*let b;
  redUser[0]+=a;
  b=redUser[0];
  square[b]=red;
  console.log("red user:"+b);*/
  return die;
}

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
  <div id="info">
      <p>Tura: {turn}</p>
      <button onClick={() => this.setState({value: GameRoll()})} width="100px" height="100px"><img src={die} width="100px" height="100px" alt = {a}/></button>
    </div>
  );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
  return (
    <div id="game">
    <table>
      <tr>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="walk" id={id}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="green" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
      </tr>
      <tr>
        <td className="empty"></td>
        <td className="red-start" id={id_start}><img src={start[id_start]} alt="" className="pawn"/></td>
        <td className="empty"></td>
        <td className="red-start" id={id_start+=1}><img src={start[id_start]} alt="" className="pawn"/></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="green-end" id={id_end}></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="green-start" id={id_start+=1}><img src={start[id_start]} alt="" className="pawn"/></td>
        <td className="empty"></td>
        <td className="green-start" id={id_start+=1}><img src={start[id_start]} alt="" className="pawn"/></td>
        <td className="empty"></td>
      </tr>
      <tr>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="green-end" id={id_end+=1}></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
      </tr>
      <tr>
        <td className="empty"></td>
        <td className="red-start" id={id_start+=1}><img src={start[id_start]} alt="" className="pawn"/></td>
        <td className="empty"></td>
        <td className="red-start" id={id_start+=1}><img src={start[id_start]} alt="" className="pawn"/></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="green-end" id={id_end+=1}></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="green-start" id={id_start+=1}><img src={start[id_start]} alt="" className="pawn"/></td>
        <td className="empty"></td>
        <td className="green-start" id={id_start+=1}><img src={start[id_start]} alt="" className="pawn"/></td>
        <td className="empty"></td>
      </tr>
      <tr>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="green-end" id={id_end+=1}></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
      </tr>
      <tr>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="green-end" id={id_end+=1}></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
      </tr>
      <tr>
        <td className="red" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="empty" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
      </tr>
      <tr>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="red-end" id={id_end+=1}></td>
        <td className="red-end" id={id_end+=1}></td>
        <td className="red-end" id={id_end+=1}></td>
        <td className="red-end" id={id_end+=1}></td>
        <td className="red-end" id={id_end+=1}></td>
        <td className="empty" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="empty" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="empty" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="yellow-end" id={id_end+=1}></td>
        <td className="yellow-end" id={id_end+=1}></td>
        <td className="yellow-end" id={id_end+=1}></td>
        <td className="yellow-end" id={id_end+=1}></td>
        <td className="yellow-end" id={id_end+=1}></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
      </tr>
      <tr>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="empty" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="yellow" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
      </tr>
      <tr>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="blue-end" id={id_end+=1}></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
      </tr>
      <tr>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="blue-end" id={id_end+=1}></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
      </tr>
      <tr>
        <td className="empty"></td>
        <td className="blue-start" id={id_start+=1}><img src={start[id_start]} alt="" className="pawn"/></td>
        <td className="empty"></td>
        <td className="blue-start" id={id_start+=1}><img src={start[id_start]} alt="" className="pawn"/></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="blue-end" id={id_end+=1}></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="yellow-start" id={id_start+=1}><img src={start[id_start]} alt="" className="pawn"/></td>
        <td className="empty"></td>
        <td className="yellow-start" id={id_start+=1}><img src={start[id_start]} alt="" className="pawn"/></td>
        <td className="empty"></td>
      </tr>
      <tr>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="blue-end" id={id_end+=1}></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
      </tr>
      <tr>
        <td className="empty"></td>
        <td className="blue-start" id={id_start+=1}><img src={start[id_start]} alt="" className="pawn"/></td>
        <td className="empty"></td>
        <td className="blue-start" id={id_start+=1}><img src={start[id_start]} alt="" className="pawn"/></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="blue-end" id={id_end+=1}></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="yellow-start" id={id_start+=1}><img src={start[id_start]} alt="" className="pawn"/></td>
        <td className="empty"></td>
        <td className="yellow-start" id={id_start+=1}><img src={start[id_start]} alt="" className="pawn"/></td>
        <td className="empty"></td>
      </tr>
      <tr>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="blue" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
    </tr>
    </table>
    </div>
  );
}
}


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Info/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
