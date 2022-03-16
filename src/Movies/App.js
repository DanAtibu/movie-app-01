import React from 'react';
import BarMenu from "./Compenents/BarMenu.js"
import Body from "./Compenents/Body.js"
import './App.css';
import Footer from './Compenents/Footer.jsx';

class Movies extends React.Component {
  constructor () {
    super();
    this.baseUrl = "https://api.themoviedb.org/3/";
    this.key = "3a88221ee951f02987bd9401d0e2c9f1";
    this.state = { MoviesList : [] , current_page: 0, TotalPages : 0, isLoad: false };
  }


  requests = async ( Url ) => {
    this.setState({ isLoad: true });
    return await fetch(Url).then( async res => await res.json() ).catch( error => {
    }).finally( () => {
      this.setState({ isLoad: false });
    });
  }


  SearchMv = async ( data = "" ) => {
    const Movies = this.requests(`${this.baseUrl}search/movie?api_key=${this.key}&language=en-US&query=${data}&page=${window.page}&include_adult=false`);
    Movies.then( this.showMovies );
  }

  showMovies = ( data ) => {
    this.setState( state => {
      return {
        current_page: data.page, TotalPages: data.total_pages, MoviesList: [ ...data.results ],
      }
    });
  }
  componentDidMount() {
    window.page = 1;
    window.search_query = "war";


    this.requests(`${this.baseUrl}movie/popular?api_key=${this.key}&language=en-USS&page=${window.page}`).then( this.showMovies );
  }


  render() {
    if ( this.state.isLoad ) {
      return <div className="loading"><div></div></div>
    }
    return (
      <div id="MovieApp">
          <BarMenu TotalMovies={this.state.MoviesList.length } Search={this.SearchMv} />
          <Body Movies={this.state}/>
          <Footer page={this.state.current_page} total_pages={this.state.TotalPages} Search={this.SearchMv}  />
      </div>
    );
  }
}

export default Movies;
