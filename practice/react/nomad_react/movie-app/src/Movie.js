import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis'


function Movie({title, poster, genres, synopsis}){
    return(
        <div className="Movie">
            <div className="Movie_Columns">
                <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie_Columns">
                <h1>{title}</h1>
                <div className="Movie_Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <p className="Movie_Synopsis">
                    <LinesEllipsis
                        text={synopsis}
                        maxLine='4'
                        ellipsis='  ...'
                        trimRight
                        basedOn='letters'
                    />
                </p>
            </div>
        </div>
    )
}

function MovieGenre({genre}){
    return (
        <span classNmae="Movie_Genre">{genre}</span>
    )
}

function MoviePoster({poster, alt}){
    return (
         <img src={poster} alt="{alt}" title={alt} className="Movie_Poster"/>
    )
}

Movie.propTypes = {
    title : PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres : PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequred
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}

export default Movie;