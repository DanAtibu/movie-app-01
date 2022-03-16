import React from 'react';
import "../CSS/Movie.css";

export default class Movie extends React.Component {
    constructor (prop) {
        super(prop);
        // console.log( prop )
        const { data } = prop;
        this.state = {
            title : data.title,
            vote : data.vote_average ,
            duration : `${Math.floor( Math.random() * 3 ) + 1 }h : ${Math.floor( Math.random()*60 )}` ,
            overview : data.overview ,
            published : data.release_date ,
            popularity : data.popularity ,
            adult : data.adult ,
            Orinal_L : data.original_language ,
            img : "https://image.tmdb.org/t/p/w500" + data.poster_path
        }
    }

    componentDidMount() {

    }
    voteDec ( vote ) {
        let classD = vote > 7 ? "vote1" : "vote2";
        return classD;
    }
    render () {
        return (
            <div className="item">
                <div className="item-movie" >
                    <img src={this.state.img} ></img>
                    <h4> {this.state.title} </h4>
                    <div className="item-movie-info">
                        <span className={this.voteDec(this.state.vote)} >{this.state.vote}</span>
                        <span>{this.state.duration} </span>
                    </div>
                </div>
                <div className="overview">
                    <h3>Published On {this.state.published}</h3>
                    <p>{this.state.overview}</p>
                    <h4>Title : {this.state.title}</h4>
                    <h4>Popularity : {this.state.popularity}</h4>
                    <h4>Original Language : {this.state.Orinal_L}</h4>
                </div>
            </div>
        )
    }
}