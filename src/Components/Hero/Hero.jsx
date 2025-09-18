import './Hero.css';
import nextHorizonLogo from '../../assets/images/next-horizon-logo.png';
import { Link } from 'react-router-dom';
function Hero(){
    return(
        <>
        <div className="hero-container">
            <div className="hero-sub-one">
                <h1 className="hero-text-primary">unlock your competitive <span className="emp-text-blue">coding</span> & <span className="emp-text-blue">math</span> potential</h1>
            </div>
            <div className="hero-sub-two">
                <h1 className="hero-text-secondary">Empowering and inspiring the underrepresented to achieve their competitive coding and math goals and developing more opportunities in the field of STEM</h1>
            </div>
            <div className="hero-button-field">
                <Link className="Link" to="/courses">
                    <button className="hero-start-button">Start Learning</button>
                </Link>
                <Link className="Link" to="/mission">
                    <button className="hero-learn-more-button">Learn More</button>
                </Link>
            </div>
        </div>
        </>
    )
}
export default Hero;