import {ReactComponent as GithubIcon} from '../assets/img/gitsvg.svg'

function Navbar(){
    return(

    <header>
        <nav>
            <div>

                <h1>Movie</h1>
                <div>
                     <GithubIcon/>
                    <a href="https://www.linkedin.com/in/rafael-reinaldo-marcolinoproj/">
                    /Github
                    </a>
                </div>
            </div>  
        </nav>
    </header>
    )

}

export default Navbar