import { ReactComponent as StarFull } from 'assets/img/full-star-3.svg'
import { ReactComponent as StartHalf } from 'assets/img/half-star-4.svg'
import { ReactComponent as StartEmpty } from 'assets/img/emputy-star.svg'
import 'components/movieStarts/style.css'

function MovieStars(){
    return(

        <div className="dsmovie-stars-container">
            <StarFull/>
            <StarFull/>
            <StarFull/>
            <StartHalf/>
            <StartEmpty/>
        </div>
    )
}

export default MovieStars
