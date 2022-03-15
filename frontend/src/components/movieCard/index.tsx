import MovieScore from "components/movieScore"
import { Link } from "react-router-dom"

function MovieCard(){

    const movie = {
        id: 1,
        image: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/08/82/20128877.JPG",
        title: "",
        count: 2,
        score:4.5
    }

    return(
            <div>
                    <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
                    <div className="dsmovie-card-bottom-container">
                        <h3>{movie.title}</h3>
                        <MovieScore/>
                        <Link to={`/form/${movie.id}`}>
                            <div className="btn btn-primary dsmovie-btn"> Salvar </div>
                        </Link>
                    </div>
                </div> 

    )
}

export default MovieCard
