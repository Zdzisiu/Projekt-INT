import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

let NumU = [1,5,2,9,10,13,5,2,11,4];
let SymU = [1,3,2,2,1,1,1,5,4,6];
let CardsU = [NumU,SymU];
//let gameStarted = false;

function drawCardUser(a){
    let howManyCards = NumU.length;
    for (let i = 0; i < a; i++,howManyCards++) {
      let cardNum = Math.floor((Math.random() * 13) + 1);
      let cardSym = Math.floor((Math.random() * 4) + 1);
      NumU[howManyCards] = cardNum;
      SymU[howManyCards] = cardSym;
    }
}

class Field extends React.Component {
  render() {
    ReportCards();
    return (
      <div className="Field">{
        function() { 
          let howManyCards = NumU.length;
          for (let i = 0; i < howManyCards; i++) {
            cardField(i);
      }}}
      </div>
    );
  }
}

function ReportCards(){
  let howManyCards = NumU.length;
  for (let i = 0; i < howManyCards; i++) {
    console.log(CardsU[0][i]+"|"+CardsU[1][i]);
  }
}

function cardField(num) {
  //drawCardUser(10);
  return(
    <div className="cardR"><span className="cardTop">{CardsU[0][num]}</span><br/><br/><span className="cardMiddle">Symbol</span><br/><br/><span className="cardBottom">A</span></div>
  );
}

ReactDOM.render(
  <Field />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
