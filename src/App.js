import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
// import CharacterCard from './components/ImgCard';
import Scores from './components/Score';
import Header from './components/Header';
import characters from './characters.json';
import Unity from './components/Unity';
import './App.css';

class App extends Component {
  state = {
    characters,
    score: 0,
    highScore: 0,
    wins: 0,
    losses: 0,
  }
  
  
shuffle = array => {
    var i = 0;
    var j = 0;
    var temp = null;
    for (i = array.length - 1; i > 0; i-= 1) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array

}; 
  
  reset = characters => {
    const reset = characters.map(item => ({ ...item, clicked: 0 }));
    return this.shuffle(reset);
  }
  
  componentDidMount() {
    this.setState({ characters: this.shuffle(this.state.characters) });
  }  
  
  correctClick = (newData) => {
    const newScore = this.state.score + 1;
    const highScore = this.state.highScore;
    const newHighScore = Math.max(highScore, newScore);
    
    if (newScore !== 24) {
    this.setState({
      characters: this.shuffle(newData),
      score: newScore,
      highScore: newHighScore
    })}
    else {
      this.setState({
        characters: this.reset(newData),
        score: 0,
        highScore: newHighScore,
        wins: this.state.wins + 1
      })}
    
  };
  
  wrongClick = (data) => {
    this.setState({
      characters: this.reset(data),
      score: 0,
      losses: this.state.losses +1
    });
  };
  
  handleClick = (id) => {
    let correct = false;
    const newData = this.state.characters.map(item => {
      const newCharacter = {...item};
      if (newCharacter.id === id) {
        if (!newCharacter.clicked) {
          newCharacter.clicked = 1;
          correct = true;
        }
      }
      return newCharacter
    });
    correct ? this.correctClick(newData) : this.wrongClick(newData);
  };
  

  render() {
    return (
      <div className='App'>

        <Header />
        <Scores highScore={this.state.highScore} yScore={this.state.score} wins={this.state.wins} losses={this.state.losses} gameover={this.state.gameOver}/>
        
        <Wrapper>
          <Unity />
          {/* {this.state.characters.map(character => (

            <CharacterCard
            // className='image'
            image={character.image}
            name={character.name}
            id={character.id}
            key={character.id}
            clicked={character.clicked}
            handleClick={this.handleClick}
            />
            ))} */}
        </Wrapper>
      </div>
    )
  }
}
export default App;
