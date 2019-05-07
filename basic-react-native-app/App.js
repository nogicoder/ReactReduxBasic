import React, { Component } from "react";
import MovieList from "./app/components/MovieList";
import Header from "./app/components/Header";


// Main App Component
class App extends Component {
  render() {
    return(
      <Header/>
      <MovieList/>
    );
  }
}

export default App;