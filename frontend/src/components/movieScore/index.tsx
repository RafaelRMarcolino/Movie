import MovieStars from "components/movieStarts"
import 'components/movieScore/style.css'

function MovieScore(){
    
    const score = 3.5;
    const count = 13;

    return(

        <div className="dsmovie-score-container">
            <p className="dsmovie-score-value"> {score > 0 ? score.toFixed(1) : '-' } </p>
            <MovieStars/>
            <p className="dsmovie-score-count"> {count} avaliação </p>
        </div>
    )
}
export default MovieScore
