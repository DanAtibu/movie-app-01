import React from 'react';
import "../CSS/BarMenu.css"

class BarMenu extends React.Component {
    state = { input: "" }
    OnChange_Input = (e) => {
        this.setState({ input : e.target.value })
        window.search_query =  e.target.value;
    }



    render () {
        const  {TotalMovies , Search} = this.props;
        return (
            <div id="baremenu">
                <h3>Movies</h3>
                <form onSubmit={ (e) => {
                    e.preventDefault();
                    Search( this.state.input );
                } }>
                    <input onChange={this.OnChange_Input} value={window.search_query} autoComplete="off" id="inputSearch" placeholder="Search"></input>
                </form>
            </div>
        )
    }
}


export default BarMenu