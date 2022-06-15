import React from 'react';
import { connect } from 'react-redux';

function MovieDetails(props) {
    if(!props.myMovie){
        return(
            <div>
                <h2>no movie to display</h2>
            </div>
        )
    }
    return (
        <div>
            <p>{props.myMovie.title}</p>
            <p>{props.myMovie.year}</p>
            <p>{props.myMovie.lead}</p>
        </div>
    );
}

const mapStateToProps = (state) =>{
    return {myMovie: state.selectedMovie}
}

export default connect(mapStateToProps)(MovieDetails);