import React from "react";
import "../CSS/Body.css";
import Movie from "./Movie.js"

class Body extends React.Component {
    render () {
        return (
                
                <div id="movies">
                    {
                        this.props.Movies.MoviesList.map( (data) => { return <Movie key={data.id} data={data} /> } )
                    }
                </div>
        )
    }

}



export default Body;