import "./App.css";
import AllCharacters from "./components/AllCharacters";
import axios from "axios";
import React, { Component } from "react";
import DetailedSingleCharacter from "./components/DetailedSingleCharacter";

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      selectedCharacter: {},
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get(
        "https://www.giantbomb.com/api/characters/?api_key=ea98adc584efb356fcd14b949f8a9f2aa2b270b8&format=json&limit=50&sort=name:asc"
      );
      this.setState({ characters: response.data.results });
    } catch (error) {
      console.log("Error from componentDidMount");
    }
  }

  selectCharacter = async (characterId) => {
    const response = await axios.get(
      `https://www.giantbomb.com/api/character/${characterId}/?api_key=ea98adc584efb356fcd14b949f8a9f2aa2b270b8&format=json`
    );
    const selectedCharacter = response.data.results;
    this.setState({ selectedCharacter });
  };

  clickHandler = (evt) => {
    if (evt.target.id === "th-name") {
      this.setState({ characters: this.state.characters.reverse() });
    }
  };

  render() {
    return (
      <div>
        <header>
          <h1>
            <a href="/">Character List</a>
          </h1>
        </header>
        <div className="App">
          {this.state.selectedCharacter.id ? (
            <DetailedSingleCharacter
              selectedCharacter={this.state.selectedCharacter}
            />
          ) : (
            <AllCharacters
              characters={this.state.characters}
              selectCharacter={this.selectCharacter}
              clickHandler={this.clickHandler}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
