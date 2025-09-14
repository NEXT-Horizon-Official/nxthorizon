import './Hero.css';
import nextHorizonLogo from '../../assets/images/next-horizon-logo.png';

function Hero(){
    return(
        <>
        <div className="hero-container">
            <div className="hero-sub-one">
                <h1 className="hero-text-primary">unlock your competetive <span className="emp-text-blue">coding</span> & <span className="emp-text-blue">math</span> potential</h1>
            </div>
            <div className="hero-sub-two">
                <h1 className="hero-text-secondary">Empowering and insipring the underrepresented to achieve their competetive coding and math goals, and as well as providing more oppurtunities in the field of STEM</h1>
            </div>
        </div>
        </>
    )
}
export default Hero;