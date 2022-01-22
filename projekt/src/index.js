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
var redUser = [0,0,0,0];
var blueUser = [0,0,0,0];
var greenUser = [0,0,0,0];
var yellowUser = [0,0,0,0];
var id = 0;
square[5] = red;

function GameRoll(){
  a = diceRoll();
  die = dice[a-1];
  console.log(a);
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
  <div id="game">
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
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="walk" id={id}><img src={square[id]} alt=""/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="zielony" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
      </tr>
      <tr>
        <td className="heh"></td>
        <td className="czerwony"></td>
        <td className="heh"></td>
        <td className="czerwony"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="zielony"></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="zielony"></td>
        <td className="heh"></td>
        <td className="zielony"></td>
        <td className="heh"></td>
      </tr>
      <tr>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt="" width="100%" height="100%"/></td>
        <td className="zielony"></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
      </tr>
      <tr>
        <td className="heh"></td>
        <td className="czerwony"></td>
        <td className="heh"></td>
        <td className="czerwony"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="zielony"></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="zielony"></td>
        <td className="heh"></td>
        <td className="zielony"></td>
        <td className="heh"></td>
      </tr>
      <tr>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="zielony"></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
      </tr>
      <tr>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="zielony"></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
      </tr>
      <tr>
        <td className="czerwony" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
      </tr>
      <tr>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="czerwony"></td>
        <td className="czerwony"></td>
        <td className="czerwony"></td>
        <td className="czerwony"></td>
        <td className="czerwony"></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="zolty"></td>
        <td className="zolty"></td>
        <td className="zolty"></td>
        <td className="zolty"></td>
        <td className="zolty"></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
      </tr>
      <tr>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="zolty" id={id+=1}><img src={square[id]} alt=""/></td>
      </tr>
      <tr>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="niebieski"></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
      </tr>
      <tr>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="niebieski"></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
      </tr>
      <tr>
        <td className="heh"></td>
        <td className="niebieski"></td>
        <td className="heh"></td>
        <td className="niebieski"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="niebieski"></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="zolty"></td>
        <td className="heh"></td>
        <td className="zolty"></td>
        <td className="heh"></td>
      </tr>
      <tr>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="niebieski"></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
      </tr>
      <tr>
        <td className="heh"></td>
        <td className="niebieski"></td>
        <td className="heh"></td>
        <td className="niebieski"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="niebieski"></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="zolty"></td>
        <td className="heh"></td>
        <td className="zolty"></td>
        <td className="heh"></td>
      </tr>
      <tr>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="niebieski" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="walk" id={id+=1}><img src={square[id]} alt=""/></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
        <td className="heh"></td>
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
