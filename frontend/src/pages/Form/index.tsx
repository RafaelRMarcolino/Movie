import "./style.css"
function Form(){

    const movie = {
        id: 1,
        image: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/08/82/20128877.JPG",
        title: "",
        count: 2,
        score:4.5
    }

    return(
        <div className="dsmovie-form-container">
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                <h3> {movie.title}</h3>
                <form className="dsmovie-form">
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="email"> Informe seu email </label>
                        <input type="email" className="form-control" id="email" />

                    </div>  
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="score">Informe sua avalicao</label>
                        <select className="form-control" id="score">
                            <option>1</option>    
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="dsmovie-from-btn-container">
                       
                        <button type="submit" className="btn btn-primary dsmovie-btn"> Salver </button> 
   
                    </div>


                </form>   
                <button className="btn btn-primary dsmovie-btn dsmovie-btn2  mt-3"> Cancelar </button>    


            </div>

        </div>

    )
}
export default Form
