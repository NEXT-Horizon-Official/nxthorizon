import './Hero.css';
import nextHorizonLogo from '../../assets/images/next-horizon-logo.png';

function Hero(){
    return(
        <>
        <div className='hero-container'>
            <div className="hero-logo-container">
                <img src={nextHorizonLogo}/>
            </div>
            <div className="hero-mission-statement-container">
                <h1 className="mission-statement">
                    Our goal is to inspire and equip underrepresented students to excel in mathematics and programming competitions, and to build confidence, skills, and pathways that extend far beyond competitions. By noting and addressing this representation deficit, we aim to open doors for students, giving them greater access and confidence to pursue research, higher education, and careers in STEM.
                </h1>
            </div>
        </div>
        </>
    )
}
export default Hero;