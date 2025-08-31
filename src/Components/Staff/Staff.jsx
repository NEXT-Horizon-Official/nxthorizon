import './Staff.css';
import wenhaoLuPicture from '../../assets/staff photos/wenhaolu.png';
import StaffCards from '../StaffCards/StaffCards';


function Staff(){
    const wenhaoLuBio = "Wenhao is a junior from New Jersey. He is a USAJMO Honorable Mention and scored 11 on the AIME. He is also in the USACO Silver division. His favorite math subjects are combinatorics and algebra. Outside of math, he enjoys listening to Clairo, drinking iced strawberry matcha, and playing club baseball, and his club team reached a peak Perfect Game ranking of #75 nationally. You can find him on AoPS as lu1376091 or on Discord as welu28_.";
    return(
        <>
        <div className="staff-container">
            <h1>Meet our staff!</h1>
            <div className="staff-card-container">
                <StaffCards image={wenhaoLuPicture} nameOf="Wenhao Lu" position="Founder" classOf="27" bio={wenhaoLuBio} />
        </div>
    </div>
        </>
    )
}
export default Staff;