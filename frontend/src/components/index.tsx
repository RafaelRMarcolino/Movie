import {ReactComponent as GithubIcon} from '../assets/img/gitsvg.svg'
import './style.css'

function Navbar(){
    return(
    <header>
        <nav>
            <div className='container'>
                <div className='dsmovie-nav-content'>
                        <h1>Movie</h1>
                    <a href="https://www.linkedin.com/in/rafael-reinaldo-marcolinoproj/">
                        <div className='dsmovie-contact-container'>
                            <GithubIcon/>
                            <p className='dsmovie-contact-link'>/Github</p> 
                        </div>
                    </a>
                </div>
            </div>
        </nav>
    </header>
    )

}

export default Navbar