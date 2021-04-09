import React, { Component } from 'react';
import Menu from './Menu';
import Board from './Board';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startGame: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(ev) {
    let start = this.state.startGame;
    start = true;
    this.setState({
      startGame: start
    });
  }

  render() {
    const gameStart = this.state.startGame;
    let displayScreen;

    if(gameStart) {
      displayScreen = <Board gameEnd={this.showResults}/>;
    } else {
      displayScreen = <Menu onClick={this.handleClick}/>;
    }
    return (
      <div>
        {
          displayScreen
        }
      </div>
    );
  }
}

export default Game;