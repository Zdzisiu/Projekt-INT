import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import logo from "./img/logo.svg";
import creator1 from "./img/boardnews.png";
import creator2 from "./img/ontable.png";
import creator3 from "./img/logo.png";
import reportWebVitals from "./reportWebVitals";

var gameImg = [
	"https://planszeo.pl/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdTRRIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--7fa79dd911be60ecd99ed297db85f5d0a3427b73/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oUnlaWE5wZW1WZmRHOWZiR2x0YVhSYkJ6QnBBaXdCIiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--c86252b3002b3e4d5d5c9b4e8c625712f38134fe/star-wars-rebelia-imperium-u-wladzy",
	"https://planszeo.pl/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBajRNIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--9fb1facc1299b48485dfdc6e780bda0da7180a4e/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oUnlaWE5wZW1WZmRHOWZiR2x0YVhSYkJ6QnBBaXdCIiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--c86252b3002b3e4d5d5c9b4e8c625712f38134fe/sword-sorcery-morrigan-hero-pack",
	"https://planszeo.pl/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaTROIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--242827a6580f7c0617ff7f5aba59f92a9a0a7b99/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oUnlaWE5wZW1WZmRHOWZiR2x0YVhSYkJ6QnBBaXdCIiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--c86252b3002b3e4d5d5c9b4e8c625712f38134fe/posiadlosc-szalenstwa-druga-edycja-ulice-arkham",
	"https://planszeo.pl/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcE1PIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--0626dbff66816c08e8ad9af01ad8b901c1b301ec/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oUnlaWE5wZW1WZmRHOWZiR2x0YVhSYkJ6QnBBaXdCIiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--c86252b3002b3e4d5d5c9b4e8c625712f38134fe/sword-sorcery-ryld-hero-pack",
];

const games = [];

let m = [
  "Cały Rok",
  "Styczeń",
  "Luty",
  "Marzec",
  "Kwiecień",
  "Maj",
  "Czerwiec",
  "Lipiec",
  "Sierpień",
  "Wrzesień",
  "Październik",
  "Listopad",
  "Grudzień",
];

function Header() {
	return (
		<div>
			<div id="header">
				<div id="left_hdr">
					<img alt="logo" src={logo} />
					<input
						type="text"
						className="search"
						id="search"
						placeholder="Wpisz tytuł gry"
					/>
				</div>
				<div id="right_hdr">
					<button href="index.htm" className="btn_hdr">
						<i className="fa fa-fw fa-search"></i>
					</button>
					<button href="index.html" className="btn_hdr">
						Nowości
					</button>
					<button href="index.html" className="btn_hdr">
						Rankingi
					</button>
					<button href="index.html" className="btn_hdr">
						O planszeo
					</button>
					<button href="index.html" className="btn_hdr">
						Współpraca
					</button>
					<button href="index.html" className="btn_hdr">
						Blog
					</button>
					<button href="index.html" className="btn_hdr">
						<i className="fa fa-fw fa-user"></i>
					</button>
				</div>
			</div>
			<div id="links_mp">
				<div id="main_app">
					<a href="index.html">APLIKACJA MOBILNA Planszeo</a>
				</div>
				<div id="calendar_link">
					<a href="index.html">KALENDARZ premier i dodruków</a>
				</div>
			</div>
		</div>
	);
}

function MainPage() {
	return (
		<div id="mainPage">
			<div id="calendar">
				<div id="cal_hdr">
					<span>Kalendarz premier i dodruków. Tworzony przez: </span>
					<div id="madeBy">
						<img src={creator1} alt="Board News" />
						<img src={creator2} alt="OnTable" />
						<img src={creator3} alt="Planszeo" />
					</div>
				</div>
				<Game />
			</div>
		</div>
	);
}

function Gen() {
	if (games.length !== 200) {
		console.log("Games gen");
		let gameY = [2022, 2021];

		for (let i = 0; i < 200; i++) {
			let tempM = Math.floor(Math.random() * 12) + 1;
			let tempD = 0;

			if (tempM === 2) {
				tempD = Math.floor(Math.random() * 28) + 1;
			} else if (tempM === 4 || tempM === 6 || tempM === 9 || tempM === 11) {
				tempD = Math.floor(Math.random() * 30) + 1;
			} else {
				tempD = Math.floor(Math.random() * 31) + 1;
			}

			let game = {
				name: "Game " + i,
				img: Math.floor(Math.random() * 3),
				day: tempD,
				month: tempM,
				year: gameY[Math.floor(Math.random() * 2)],
			};

			games.push(game);
		}
	}

	games.map(({ name }) => {
		console.log(`${name}`);
	});
	console.log(games.length);
}

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			year: 2022,
			month: 0,
		};
	}

	getGames() {
		var relGames = [{}];
		const final = [];
		let g = [];

		games.sort((a, b) => {
			return a.month - b.month;
		});

		let prevM = 1;
		games.map((game) => {
			if (game.year === this.state.year) {
				if (this.state.month !== 0 && game.month === this.state.month) {
					final.push(
						<div className="game">
							<img src={gameImg[game.img]} alt="game img" width="100px" />
							<div>{game.name}</div>
						</div>
					);
				} else if (this.state.month === 0) {
					if (prevM !== game.month) {
            if(g.lenght !== 0)
						{
              final.push(<div><div className="month">{m[game.month-1]}</div><div className="games">{g}</div><hr width="100%" color="white"/></div>);
              g = [];
            }
					}
          
					g.push(
						<div className="game">
							<img src={gameImg[game.img]} alt="game img" width="100px" />
							<div>{game.name}</div>
						</div>
					);

					prevM = game.month;
				}
			}
		});
    
    if(this.state.month === 0){
      final.push(<div><div className="month">{m[12]}</div><div className="games">{g}</div></div>);
    }

		console.log(relGames.length);

		if (this.state.month === 0){
      return <div id="MG">{final}</div>;
    } else {
      return <div id="MG"><div className="month">{m[this.state.month]}</div><div className="games">{final}</div></div>;
    }
	}

	filterRen(pos) {
		let final = [];
		let a;
		for (let i = 2021; i < 2023; i++) {
			if (i === this.state.year) {
				a = "fltrBtn-Sel year";
			} else {
				a = "fltrBtn year";
			}
			final.push(
				<button onClick={() => this.setState({ year: i })} className={a}>
					{i}
				</button>
			);
		}

		final.push(<hr width="100%" className="hide" />);

		for (let i = 0; i < 13; i++) {
			if (i === this.state.month) {
				a = "fltrBtn-Sel";
			} else {
				a = "fltrBtn";
			}

			final.push(
				<button onClick={() => this.setState({ month: i })} className={a}>
					{m[i]}
				</button>
			);
		}

		if (pos === "aside") {
			return <div id="filters_aside">{final}</div>;
		} else {
			return <div id="filters">{final}</div>;
		}
	} 

	render() {
		Gen();
		if (this.props.pos !== "aside") {
			return (
				<div>
					<div id="filters">{this.filterRen()}</div>
					{this.getGames()}
				</div>
			);
		} else {
			return (
				<div>
					<div id="filters">{this.filterRen("aside")}</div>
				</div>
			);
		}
	}
}

function Aside() {
	return (
		<div id="aside">
			<div id="aside_content">
				<img src={creator1} alt="Board News" />
				<img src={creator2} alt="OnTable" />
				<img src={creator3} alt="Planszeo" />
				<Game pos="aside" />
			</div>
		</div>
	);
}

function Footer() {
	return <div id="footer"></div>;
}

class Page extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			year: 2022,
			month: 1,
		};
	}

	render() {
		return (
			<div>
				<Header />
				<MainPage />
				<Aside />
				<Footer />
			</div>
		);
	}
}

ReactDOM.render(
	<React.StrictMode>
		<Page />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
