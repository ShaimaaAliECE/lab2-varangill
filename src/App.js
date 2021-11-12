import './App.css';
import React from 'react';

function Tile(props) {
  return (
    <button className={`btn ${props.val}`} disabled={props.val} onClick={props.handleClick}> {props.val} </button>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: "X",
      tiles: Array(42).fill(null),
      winner: null,
      selected: 0
    }
  }

  tileClicked = (i) => {
    if (this.state.tiles[i] === null && !this.state.winner) {
      let newTiles = this.state.tiles;
      if (this.state.turn === "X") {
        newTiles[i] = "X";
        this.setState({
          turn: "O",
          tiles: newTiles,
          winner: null,
          selected: this.state.selected + 1
        })
        this.checkWin();
      } else if (this.state.turn === "O") {
        newTiles[i] = "O"
        this.setState({
          turn: "X",
          tiles: newTiles,
          winner: null,
          selected: this.state.selected + 1
        })
        this.checkWin();
      }
    } 
  }

  checkWin = () => {
    //check horizontal
    const tiles = this.state.tiles
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 4; j++) {
        let a = i*7 + j
        let b = a + 1
        let c = a + 2
        let d = a + 3
        if (tiles[a] && tiles[b] && tiles[c] && tiles[d]) {
          if (tiles[a] == tiles[b] && tiles[a] == tiles[c] && tiles[a] == tiles[d]) {
            this.setState({
              turn: this.state.turn,
              tiles: this.state.tiles,
              winner: tiles[a],
              selected: this.state.selected
            })
          }
        }
      }
    }

    //check vertical
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 3; j++) {
        let a = i + j*7;
        let b = a + 7
        let c = a + 14
        let d = a + 21
        if (tiles[a] && tiles[b] && tiles[c] && tiles[d]) {
          if (tiles[a] == tiles[b] && tiles[a] == tiles[c] && tiles[a] == tiles[d]) {
            this.setState({
              turn: this.state.turn,
              tiles: this.state.tiles,
              winner: tiles[a]
            })
          }
        }
      }
    }
  }

  render() { 
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Play Connect Four!
          </p>
          <div>
            <Tile handleClick={() => this.tileClicked(0)} val={this.state.tiles[0]}/>
            <Tile handleClick={() => this.tileClicked(1)} val={this.state.tiles[1]}/>
            <Tile handleClick={() => this.tileClicked(2)} val={this.state.tiles[2]}/>
            <Tile handleClick={() => this.tileClicked(3)} val={this.state.tiles[3]}/>
            <Tile handleClick={() => this.tileClicked(4)} val={this.state.tiles[4]}/>
            <Tile handleClick={() => this.tileClicked(5)} val={this.state.tiles[5]}/>
            <Tile handleClick={() => this.tileClicked(6)} val={this.state.tiles[6]}/>
          </div>
          <div>
            <Tile handleClick={() => this.tileClicked(7)} val={this.state.tiles[7]}/>
            <Tile handleClick={() => this.tileClicked(8)} val={this.state.tiles[8]}/>
            <Tile handleClick={() => this.tileClicked(9)} val={this.state.tiles[9]}/>
            <Tile handleClick={() => this.tileClicked(10)} val={this.state.tiles[10]}/>
            <Tile handleClick={() => this.tileClicked(11)} val={this.state.tiles[11]}/>
            <Tile handleClick={() => this.tileClicked(12)} val={this.state.tiles[12]}/>
            <Tile handleClick={() => this.tileClicked(13)} val={this.state.tiles[13]}/>
          </div>
          <div>
            <Tile handleClick={() => this.tileClicked(14)} val={this.state.tiles[14]}/>
            <Tile handleClick={() => this.tileClicked(15)} val={this.state.tiles[15]}/>
            <Tile handleClick={() => this.tileClicked(16)} val={this.state.tiles[16]}/>
            <Tile handleClick={() => this.tileClicked(17)} val={this.state.tiles[17]}/>
            <Tile handleClick={() => this.tileClicked(18)} val={this.state.tiles[18]}/>
            <Tile handleClick={() => this.tileClicked(19)} val={this.state.tiles[19]}/>
            <Tile handleClick={() => this.tileClicked(20)} val={this.state.tiles[20]}/>
          </div>
          <div>
            <Tile handleClick={() => this.tileClicked(21)} val={this.state.tiles[21]}/>
            <Tile handleClick={() => this.tileClicked(22)} val={this.state.tiles[22]}/>
            <Tile handleClick={() => this.tileClicked(23)} val={this.state.tiles[23]}/>
            <Tile handleClick={() => this.tileClicked(24)} val={this.state.tiles[24]}/>
            <Tile handleClick={() => this.tileClicked(25)} val={this.state.tiles[25]}/>
            <Tile handleClick={() => this.tileClicked(26)} val={this.state.tiles[26]}/>
            <Tile handleClick={() => this.tileClicked(27)} val={this.state.tiles[27]}/>
          </div>
          <div>
            <Tile handleClick={() => this.tileClicked(28)} val={this.state.tiles[28]}/>
            <Tile handleClick={() => this.tileClicked(29)} val={this.state.tiles[29]}/>
            <Tile handleClick={() => this.tileClicked(30)} val={this.state.tiles[30]}/>
            <Tile handleClick={() => this.tileClicked(31)} val={this.state.tiles[31]}/>
            <Tile handleClick={() => this.tileClicked(32)} val={this.state.tiles[32]}/>
            <Tile handleClick={() => this.tileClicked(33)} val={this.state.tiles[33]}/>
            <Tile handleClick={() => this.tileClicked(34)} val={this.state.tiles[34]}/>
          </div>
          <div>
            <Tile handleClick={() => this.tileClicked(35)} val={this.state.tiles[35]}/>
            <Tile handleClick={() => this.tileClicked(36)} val={this.state.tiles[36]}/>
            <Tile handleClick={() => this.tileClicked(37)} val={this.state.tiles[37]}/>
            <Tile handleClick={() => this.tileClicked(38)} val={this.state.tiles[38]}/>
            <Tile handleClick={() => this.tileClicked(39)} val={this.state.tiles[39]}/>
            <Tile handleClick={() => this.tileClicked(40)} val={this.state.tiles[40]}/>
            <Tile handleClick={() => this.tileClicked(41)} val={this.state.tiles[41]}/>
          </div>

          {this.state.winner && <p>Player {this.state.winner} has won.</p>}
          {!this.state.winner && 
            <div>{this.state.selected == 42 && <p>Draw: No remaining tiles</p>}</div>
          }
        </header>
      </div>
    );
  }
}

export default App;
