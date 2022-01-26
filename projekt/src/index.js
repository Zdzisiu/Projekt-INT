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

var turn,a=1;
var die = one;
const dice = [one,two,three,four,five,six];

const tab = [0,1,2,3,4,5,7,,9,11,19,18,17,16,15,14,13,28,33,34,35,36,37,38,39,48,50,52,54,56,58,59,60,57,55,53,51,49,41,42,43,44,45,46,47,32,27,26,25,25,24,23,22,21,12,10,8,6,4];
const colors = [red,green,blue,yellow];

var square = [];
var starts = [];
var redUser = [0,0,0,0];
var blueUser = [0,0,0,0];
var greenUser = [0,0,0,0];
var yellowUser = [0,0,0,0];

var id = 0;
var id_start=0;
var id_end=0;

var greenUser1 = {
  track: [8,2,7,12,17,22,25,34,35,36,37,38,39,40,55,70,69,68,67,66,65,64,73,76,81,86,91,96,95,94,89,84,79,74,71,62,61,60,59,58,57,56,41,26,27,28,29,30,31,32,23,20,15,10,5,0,1,6,11,16,21,24,33],
  current: 0
};
var greenUser2 = {
  track: [9,2,7,12,17,22,25,34,35,36,37,38,39,40,55,70,69,68,67,66,65,64,73,76,81,86,91,96,95,94,89,84,79,74,71,62,61,60,59,58,57,56,41,26,27,28,29,30,31,32,23,20,15,10,5,0,1,6,11,16,21,24,33],
  current: 0
};
var greenUser3 = {
  track: [18,2,7,12,17,22,25,34,35,36,37,38,39,40,55,70,69,68,67,66,65,64,73,76,81,86,91,96,95,94,89,84,79,74,71,62,61,60,59,58,57,56,41,26,27,28,29,30,31,32,23,20,15,10,5,0,1,6,11,16,21,24,33],
  current: 0
};
var greenUser4 = {
  track: [19,2,7,12,17,22,25,34,35,36,37,38,39,40,55,70,69,68,67,66,65,64,73,76,81,86,91,96,95,94,89,84,79,74,71,62,61,60,59,58,57,56,41,26,27,28,29,30,31,32,23,20,15,10,5,0,1,6,11,16,21,24,33],
  current: 0
};
var yellowUser1 = {
  track: [82,70,69,68,67,66,65,64,73,76,81,86,91,96,95,94,89,84,79,74,71,62,61,60,59,58,57,56,41,26,27,28,29,30,31,32,23,20,15,10,5,0,1,2,7,12,17,22,25,34,35,36,37,38,39,40,55,54,53,52,51,50,49],
  current: 0
};
var yellowUser2 = {
  track: [83,70,69,68,67,66,65,64,73,76,81,86,91,96,95,94,89,84,79,74,71,62,61,60,59,58,57,56,41,26,27,28,29,30,31,32,23,20,15,10,5,0,1,2,7,12,17,22,25,34,35,36,37,38,39,40,55,54,53,52,51,50,49],
  current: 0
};
var yellowUser3 = {
  track: [92,70,69,68,67,66,65,64,73,76,81,86,91,96,95,94,89,84,79,74,71,62,61,60,59,58,57,56,41,26,27,28,29,30,31,32,23,20,15,10,5,0,1,2,7,12,17,22,25,34,35,36,37,38,39,40,55,54,53,52,51,50,49],
  current: 0
};
var yellowUser4 = {
  track: [93,70,69,68,67,66,65,64,73,76,81,86,91,96,95,94,89,84,79,74,71,62,61,60,59,58,57,56,41,26,27,28,29,30,31,32,23,20,15,10,5,0,1,2,7,12,17,22,25,34,35,36,37,38,39,40,55,54,53,52,51,50,49],
  current: 0
};
var redUser1 = {
  track: [3,26,27,28,29,30,31,32,23,20,15,10,5,0,1,2,7,12,17,22,25,34,35,36,37,38,39,40,55,70,69,68,67,66,65,64,73,76,81,86,91,96,95,94,89,84,79,74,71,62,61,60,59,58,57,56,41,42,43,44,45,46,47],
  current: 0
};
var redUser2 = {
  track: [4,26,27,28,29,30,31,32,23,20,15,10,5,0,1,2,7,12,17,22,25,34,35,36,37,38,39,40,55,70,69,68,67,66,65,64,73,76,81,86,91,96,95,94,89,84,79,74,71,62,61,60,59,58,57,56,41,42,43,44,45,46,47],
  current: 0
};
var redUser3 = {
  track: [13,26,27,28,29,30,31,32,23,20,15,10,5,0,1,2,7,12,17,22,25,34,35,36,37,38,39,40,55,70,69,68,67,66,65,64,73,76,81,86,91,96,95,94,89,84,79,74,71,62,61,60,59,58,57,56,41,42,43,44,45,46,47],
  current: 0
};
var redUser4 = {
  track: [14,26,27,28,29,30,31,32,23,20,15,10,5,0,1,2,7,12,17,22,25,34,35,36,37,38,39,40,55,70,69,68,67,66,65,64,73,76,81,86,91,96,95,94,89,84,79,74,71,62,61,60,59,58,57,56,41,42,43,44,45,46,47],
  current: 0
};
var blueUser1 = {
  track: [77,94,89,84,79,74,71,62,61,60,59,58,57,56,41,26,27,28,29,30,31,32,23,20,15,10,5,0,1,2,7,12,17,22,25,34,35,36,37,38,39,40,55,70,69,68,67,66,65,64,73,76,81,86,91,96,95,90,85,80,75,72,63],
  current: 0
};
var blueUser2 = {
  track: [78,94,89,84,79,74,71,62,61,60,59,58,57,56,41,26,27,28,29,30,31,32,23,20,15,10,5,0,1,2,7,12,17,22,25,34,35,36,37,38,39,40,55,70,69,68,67,66,65,64,73,76,81,86,91,96,95,90,85,80,75,72,63],
  current: 0
};
var blueUser3 = {
  track: [87,94,89,84,79,74,71,62,61,60,59,58,57,56,41,26,27,28,29,30,31,32,23,20,15,10,5,0,1,2,7,12,17,22,25,34,35,36,37,38,39,40,55,70,69,68,67,66,65,64,73,76,81,86,91,96,95,90,85,80,75,72,63],
  current: 0
};
var blueUser4 = {
  track: [88,94,89,84,79,74,71,62,61,60,59,58,57,56,41,26,27,28,29,30,31,32,23,20,15,10,5,0,1,2,7,12,17,22,25,34,35,36,37,38,39,40,55,70,69,68,67,66,65,64,73,76,81,86,91,96,95,90,85,80,75,72,63],
  current: 0
};

square[greenUser1.track[greenUser1.current]]=green;
square[greenUser2.track[greenUser2.current]]=green;
square[greenUser3.track[greenUser3.current]]=green;
square[greenUser4.track[greenUser4.current]]=green;

square[yellowUser1.track[yellowUser1.current]]=yellow;
square[yellowUser2.track[yellowUser2.current]]=yellow;
square[yellowUser3.track[yellowUser3.current]]=yellow;
square[yellowUser4.track[yellowUser4.current]]=yellow;

square[redUser1.track[redUser1.current]]=red;
square[redUser2.track[redUser2.current]]=red;
square[redUser3.track[redUser3.current]]=red;
square[redUser4.track[redUser4.current]]=red;

square[blueUser1.track[blueUser1.current]]=blue;
square[blueUser2.track[blueUser2.current]]=blue;
square[blueUser3.track[blueUser3.current]]=blue;
square[blueUser4.track[blueUser4.current]]=blue;

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
        <td className="red" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="empty"></td>
        <td className="red" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="green" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="green" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="empty"></td>
        <td className="green" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="empty"></td>
      </tr>
      <tr>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" width="100%" height="100%"/></td>
        <td className="green" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
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
        <td className="red" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="empty"></td>
        <td className="red" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="green" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="green" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="empty"></td>
        <td className="green" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
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
        <td className="green" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
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
        <td className="green" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
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
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
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
        <td className="red" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="red" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="red" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="red" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="red" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="yellow" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="yellow" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="yellow" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="yellow" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="yellow" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
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
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
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
        <td className="blue" id={id+=1}></td>
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
        <td className="blue" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
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
        <td className="blue" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="empty"></td>
        <td className="blue" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="blue" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="yellow" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="empty"></td>
        <td className="yellow" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
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
        <td className="blue" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
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
        <td className="blue" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="empty"></td>
        <td className="blue" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="blue" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="empty"></td>
        <td className="empty"></td>
        <td className="yellow" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
        <td className="empty"></td>
        <td className="yellow" id={id+=1}><img src={square[id]} alt="" className="pawn"/></td>
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

//ruch
function steps(){
  greenUser1.current=greenUser1.current+a;
  square[greenUser1.track[greenUser1.current]]=green;
  vanish();start();
  return square[greenUser1.track[greenUser1.current]];
}

class Step extends React.Component {
  constructor(props) {super(props);this.state = {value: null,};}
  render() {return (
      <img onClick={() => this.setState({value: steps()})} src={square[greenUser1.track[greenUser1.current]]} className="pawn"></img>
  );}}

function start(){
ReactDOM.render(
    <Step />,
  document.getElementById(greenUser1.track[greenUser1.current])
  );} start();

function vanish(){
  ReactDOM.render(
    <Vanish />,
    document.getElementById(greenUser1.track[greenUser1.current-a])
  );}

class Vanish extends React.Component {
  render() {
    return (
      <img src=""></img>
  );}}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
