import React, { Component } from 'react';
import './App.css';
import SearchArea from './components/SearchArea';
import MovieList from './components/MovieList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchField: ''
    };
  }

  onMovieSearch = () => {
    const apiKey = 'a687d734';
    const { searchField } = this.state;
    const link = `https://www.omdbapi.com/?s=${searchField}&apikey=${apiKey}`;

    fetch(link)
      .then(response => response.json())
      .then(data => {
        if (data.Response === 'True') {
          this.setState({ movies: data.Search });
        } else {
          this.setState({ movies: [] });
        }
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  }

  render() {
    return (
      <div className='tc bg-mid-gray'>
        <SearchArea searchChange={this.onSearchChange} movieSearch={this.onMovieSearch} />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
