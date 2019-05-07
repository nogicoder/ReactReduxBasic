import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./app/store/store";
import MovieList from "./app/components/MovieList";
import Header from "./app/components/Header";


// Main App Component
class App extends Component {
  render() {
    return(
      // Provider tag to provide the store to nested components
      <Provider store={store} >
        <Header/>
        <MovieList/>
      </Provider>
    );
  }
}

export default App;