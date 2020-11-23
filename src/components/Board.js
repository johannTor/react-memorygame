import React, { Component } from 'react';
import SquareImage from './SquareImage';
import Results from './Results';
import {randImgs, randomizeImgOrder} from '../imgImport';
import blank from '../images/blank.svg'

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Here each image is stored as an object with an id, source and found props
      imageObjects: randImgs,
      twoImgs: [],
      turns: 0,
      matches: 0,
      allowClick: true,
      gameComplete: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  checkIfMatch(twoImgs) {
    // If the two images both have the same ID we know they are the same.
    return (twoImgs[0].id === twoImgs[1].id) ? true : false;
  }

  handleClick(ev) {
    const twoImgs = this.state.twoImgs;
    const imgs = this.state.imageObjects;
    const key = ev.target.getAttribute('data-key');
    // If the same image is being clicked twice then return
    if(twoImgs.length >= 1 && parseInt(key) === twoImgs[0].key) {
      return;
    }

    // If this image has the state found then do nothing
    if(!imgs[key].found && this.state.allowClick) {
      imgs[key].reveal = true;
      this.setState({
        imageObjects: imgs
      });

      // Check if the same picture is being clicked twice
      twoImgs.push(imgs[key]);
      console.log('aftr push: ' + twoImgs);

      // If two images have been added to the comparison array
      if(twoImgs.length >= 2) {
        const turns = this.state.turns;
        let matches = this.state.matches;
        let completed = this.state.gameComplete;
        
        // Disable click while the board checks
        this.setState({
          allowClick: false
        });

        // Wait a bit before changing the state of the board
        setTimeout(() => {
          // If it's a match, increase the score, otherwise hide them again          
          if(this.checkIfMatch(twoImgs)) {
            matches++;
            // Check if the game is completed
            if(matches >= (imgs.length / 2)) {
              completed = true;
            }
            imgs[twoImgs[0].key].found = true;
            imgs[twoImgs[1].key].found = true;
          } else {
            imgs[twoImgs[0].key].reveal = false;
            imgs[twoImgs[1].key].reveal = false;
          }
          // Change the state according to if the images are a match or not
          this.setState({
            imageObjects: imgs,
            twoImgs: [],
            turns: turns + 1,
            matches: matches,
            allowClick: true,
            gameComplete: completed
          })
        }, 1000);
      }     
    }
  }

  // Right now I just reset the values in the state to restart the game, and call the randomizeImgOrder function
  restartGame(ev) {
    const imgList = this.state.imageObjects;
    imgList.forEach(item => {
      item.found = false;
      item.reveal = false;
    });
    const randomized = randomizeImgOrder(imgList);
    this.setState({
      imageObjects: randomized,
      twoImgs: [],
      turns: 0,
      matches: 0,
      allowClick: true,
      gameComplete: false
    })
  }

  render() {
    const allImgObjects = this.state.imageObjects;
    const turns = this.state.turns;
    const matches = this.state.matches;
    const completed = this.state.gameComplete;
    const gridEls = allImgObjects.map((item, index) => {
      // If item is found return a squareImage with source as img
      if(item.found || item.reveal) {
        return <div key={index} className="grid-item"><SquareImage source={item.source} imgID={item.id} imgKey={index} onClick={this.handleClick} found={item.found}/></div>
      } else {
        return <div key={index} className="grid-item"><SquareImage source={blank} imgID={item.id} imgKey={index} onClick={this.handleClick}/></div>
      }
    });

    return (
      <div>
        <div className="board">
          {
            gridEls
          }
        </div>
        <div className="scoreboard">
          <h2>Turns: {turns} Matches: {matches}</h2>
        </div>
        {completed && <Results turns={turns} onClick={this.restartGame}/>}
      </div>
    );
  }
}

export default Board;