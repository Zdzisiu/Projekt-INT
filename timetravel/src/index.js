import React from "react";
import ReactDOM, { render } from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

function Square(props) {
  return (
    <button
      className="square"
      style={{ background: props.color }}
      onClick={props.onClick}
    />
  );
}

function ColorBtn(props) {
  return (
    <button
      className="colorSq"
      style={{ background: props.value }}
      onClick={props.onClick}
    />
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        color={this.props.squares[i]}
        class={this.props.class}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  renderColorBtn(c) {
    return <ColorBtn value={c} onClick={() => this.props.OnChooseColor(c)} />;
  }

  render() {
    return (
      <div class={this.props.class}>
        <div>
          <div className="row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
            {this.renderSquare(9)}
            {this.renderSquare(10)}
            {this.renderSquare(11)}
            {this.renderSquare(12)}
            {this.renderSquare(13)}
            {this.renderSquare(14)}
            {this.renderSquare(15)}
          </div>
          <div className="row">
            {this.renderSquare(16)}
            {this.renderSquare(17)}
            {this.renderSquare(18)}
            {this.renderSquare(19)}
            {this.renderSquare(20)}
            {this.renderSquare(21)}
            {this.renderSquare(22)}
            {this.renderSquare(23)}
            {this.renderSquare(24)}
            {this.renderSquare(25)}
            {this.renderSquare(26)}
            {this.renderSquare(27)}
            {this.renderSquare(28)}
            {this.renderSquare(29)}
            {this.renderSquare(30)}
            {this.renderSquare(31)}
          </div>
          <div className="row">
            {this.renderSquare(32)}
            {this.renderSquare(33)}
            {this.renderSquare(34)}
            {this.renderSquare(35)}
            {this.renderSquare(36)}
            {this.renderSquare(37)}
            {this.renderSquare(38)}
            {this.renderSquare(39)}
            {this.renderSquare(40)}
            {this.renderSquare(41)}
            {this.renderSquare(42)}
            {this.renderSquare(43)}
            {this.renderSquare(44)}
            {this.renderSquare(45)}
            {this.renderSquare(46)}
            {this.renderSquare(47)}
          </div>
          <div className="row">
            {this.renderSquare(48)}
            {this.renderSquare(49)}
            {this.renderSquare(50)}
            {this.renderSquare(51)}
            {this.renderSquare(52)}
            {this.renderSquare(53)}
            {this.renderSquare(54)}
            {this.renderSquare(55)}
            {this.renderSquare(56)}
            {this.renderSquare(57)}
            {this.renderSquare(58)}
            {this.renderSquare(59)}
            {this.renderSquare(60)}
            {this.renderSquare(61)}
            {this.renderSquare(62)}
            {this.renderSquare(63)}
          </div>
          <div className="row">
            {this.renderSquare(64)}
            {this.renderSquare(65)}
            {this.renderSquare(66)}
            {this.renderSquare(67)}
            {this.renderSquare(68)}
            {this.renderSquare(69)}
            {this.renderSquare(70)}
            {this.renderSquare(71)}
            {this.renderSquare(72)}
            {this.renderSquare(73)}
            {this.renderSquare(74)}
            {this.renderSquare(75)}
            {this.renderSquare(76)}
            {this.renderSquare(77)}
            {this.renderSquare(78)}
            {this.renderSquare(79)}
          </div>
          <div className="row">
            {this.renderSquare(80)}
            {this.renderSquare(81)}
            {this.renderSquare(82)}
            {this.renderSquare(83)}
            {this.renderSquare(84)}
            {this.renderSquare(85)}
            {this.renderSquare(86)}
            {this.renderSquare(87)}
            {this.renderSquare(88)}
            {this.renderSquare(89)}
            {this.renderSquare(90)}
            {this.renderSquare(91)}
            {this.renderSquare(92)}
            {this.renderSquare(93)}
            {this.renderSquare(94)}
            {this.renderSquare(95)}
          </div>
          <div className="row">
            {this.renderSquare(96)}
            {this.renderSquare(97)}
            {this.renderSquare(98)}
            {this.renderSquare(99)}
            {this.renderSquare(100)}
            {this.renderSquare(101)}
            {this.renderSquare(102)}
            {this.renderSquare(103)}
            {this.renderSquare(104)}
            {this.renderSquare(105)}
            {this.renderSquare(106)}
            {this.renderSquare(107)}
            {this.renderSquare(108)}
            {this.renderSquare(109)}
            {this.renderSquare(110)}
            {this.renderSquare(111)}
          </div>
          <div className="row">
            {this.renderSquare(112)}
            {this.renderSquare(113)}
            {this.renderSquare(114)}
            {this.renderSquare(115)}
            {this.renderSquare(116)}
            {this.renderSquare(117)}
            {this.renderSquare(118)}
            {this.renderSquare(119)}
            {this.renderSquare(120)}
            {this.renderSquare(121)}
            {this.renderSquare(122)}
            {this.renderSquare(123)}
            {this.renderSquare(124)}
            {this.renderSquare(125)}
            {this.renderSquare(126)}
            {this.renderSquare(127)}
          </div>
          <div className="row">
            {this.renderSquare(128)}
            {this.renderSquare(129)}
            {this.renderSquare(130)}
            {this.renderSquare(131)}
            {this.renderSquare(132)}
            {this.renderSquare(133)}
            {this.renderSquare(134)}
            {this.renderSquare(135)}
            {this.renderSquare(136)}
            {this.renderSquare(137)}
            {this.renderSquare(138)}
            {this.renderSquare(139)}
            {this.renderSquare(140)}
            {this.renderSquare(141)}
            {this.renderSquare(142)}
            {this.renderSquare(143)}
          </div>
          <div className="row">
            {this.renderSquare(144)}
            {this.renderSquare(145)}
            {this.renderSquare(146)}
            {this.renderSquare(147)}
            {this.renderSquare(148)}
            {this.renderSquare(149)}
            {this.renderSquare(150)}
            {this.renderSquare(151)}
            {this.renderSquare(152)}
            {this.renderSquare(153)}
            {this.renderSquare(154)}
            {this.renderSquare(155)}
            {this.renderSquare(156)}
            {this.renderSquare(157)}
            {this.renderSquare(158)}
            {this.renderSquare(159)}
          </div>
          <div className="row">
            {this.renderSquare(160)}
            {this.renderSquare(161)}
            {this.renderSquare(162)}
            {this.renderSquare(163)}
            {this.renderSquare(164)}
            {this.renderSquare(165)}
            {this.renderSquare(166)}
            {this.renderSquare(167)}
            {this.renderSquare(168)}
            {this.renderSquare(169)}
            {this.renderSquare(170)}
            {this.renderSquare(171)}
            {this.renderSquare(172)}
            {this.renderSquare(173)}
            {this.renderSquare(174)}
            {this.renderSquare(175)}
          </div>
          <div className="row">
            {this.renderSquare(176)}
            {this.renderSquare(177)}
            {this.renderSquare(178)}
            {this.renderSquare(179)}
            {this.renderSquare(180)}
            {this.renderSquare(181)}
            {this.renderSquare(182)}
            {this.renderSquare(183)}
            {this.renderSquare(184)}
            {this.renderSquare(185)}
            {this.renderSquare(186)}
            {this.renderSquare(187)}
            {this.renderSquare(188)}
            {this.renderSquare(189)}
            {this.renderSquare(190)}
            {this.renderSquare(191)}
          </div>
          <div className="row">
            {this.renderSquare(192)}
            {this.renderSquare(193)}
            {this.renderSquare(194)}
            {this.renderSquare(195)}
            {this.renderSquare(196)}
            {this.renderSquare(197)}
            {this.renderSquare(198)}
            {this.renderSquare(199)}
            {this.renderSquare(200)}
            {this.renderSquare(201)}
            {this.renderSquare(202)}
            {this.renderSquare(203)}
            {this.renderSquare(204)}
            {this.renderSquare(205)}
            {this.renderSquare(206)}
            {this.renderSquare(207)}
          </div>
          <div className="row">
            {this.renderSquare(208)}
            {this.renderSquare(209)}
            {this.renderSquare(210)}
            {this.renderSquare(211)}
            {this.renderSquare(212)}
            {this.renderSquare(213)}
            {this.renderSquare(214)}
            {this.renderSquare(215)}
            {this.renderSquare(216)}
            {this.renderSquare(217)}
            {this.renderSquare(218)}
            {this.renderSquare(219)}
            {this.renderSquare(220)}
            {this.renderSquare(221)}
            {this.renderSquare(222)}
            {this.renderSquare(223)}
          </div>
          <div className="row">
            {this.renderSquare(224)}
            {this.renderSquare(225)}
            {this.renderSquare(226)}
            {this.renderSquare(227)}
            {this.renderSquare(228)}
            {this.renderSquare(229)}
            {this.renderSquare(230)}
            {this.renderSquare(231)}
            {this.renderSquare(232)}
            {this.renderSquare(233)}
            {this.renderSquare(234)}
            {this.renderSquare(235)}
            {this.renderSquare(236)}
            {this.renderSquare(237)}
            {this.renderSquare(238)}
            {this.renderSquare(239)}
          </div>
          <div className="row">
            {this.renderSquare(240)}
            {this.renderSquare(241)}
            {this.renderSquare(242)}
            {this.renderSquare(243)}
            {this.renderSquare(244)}
            {this.renderSquare(245)}
            {this.renderSquare(246)}
            {this.renderSquare(247)}
            {this.renderSquare(248)}
            {this.renderSquare(249)}
            {this.renderSquare(250)}
            {this.renderSquare(251)}
            {this.renderSquare(252)}
            {this.renderSquare(253)}
            {this.renderSquare(254)}
            {this.renderSquare(255)}
          </div>
        </div>
        <div>
          {this.renderColorBtn("#dedede")}
          {this.renderColorBtn("#adadad")}
          {this.renderColorBtn("#7f7f7f")}
          {this.renderColorBtn("#535353")}
          {this.renderColorBtn("#2b2b2b")}
          <br />
          {this.renderColorBtn("#fbf8cc")}
          {this.renderColorBtn("#fde4cf")}
          {this.renderColorBtn("#ffcfd2")}
          {this.renderColorBtn("#f1c0e8")}
          {this.renderColorBtn("#cfbaf0")}
          {this.renderColorBtn("#a3c4f3")}
          {this.renderColorBtn("#90dbf4")}
          {this.renderColorBtn("#8eecf5")}
          {this.renderColorBtn("#98f5e1")}
          {this.renderColorBtn("#b9fbc0")}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(255).fill(null),
        },
      ],
      stepNumber: 0,
      color: "black",
    };
  }

  handleClick(i) {
    let history
    if(this.state.stepNumber !== 4){
      history = this.state.history.slice(0, this.state.stepNumber + 1);
    }else{
      history = this.state.history.slice(1 + this.state.stepNumber/5, this.state.stepNumber + 1);
    }
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if(history.length === 5){
    }
    squares[i] = this.state.color;
    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
    });
  }

  OnChooseColor(c) {
    console.log(c);
    this.setState({
      color: c,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
    });
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];

    const moves = history.map((step, move) => {
      const desc = (
        <Board
          squares={history[move].squares}
          onClick={(i) => this.handleClick(i)}
          OnChooseColor={(c) => this.OnChooseColor(c)}
          class="smolSq"
        />
      );
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
            OnChooseColor={(c) => this.OnChooseColor(c)}
            class=""
          />
        </div>
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
