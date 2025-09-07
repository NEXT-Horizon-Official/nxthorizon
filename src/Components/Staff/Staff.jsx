import './Staff.css';
import wenhaoLuPicture from '../../assets/staff photos/wenhaolu.png';
import jonathanLiuPicture from '../../assets/staff photos/jonathanliu.png';
import davidZhangPicture from '../../assets/staff photos/davidzhang.png'
import StaffCards from '../Staff-Cards/StaffCards';


function Staff(){
    const bios = ["Jonathan is a freshman from New Jersey. He is a USACO Silver and an AMC 8 Honorable Mention. His favorite math subject is geometry. In his free time, he enjoys playing basketball, drawing, and learning how to cook his favorite foods. This year, he aims to tackle more challenging math and programming problems and complete personal coding projects.", "Wenhao is a junior from New Jersey. He is a USAJMO qualifier, earning an Honorable Mention, and scored 11 on the AIME. He is also in the USACO Silver division. His favorite math subjects are combinatorics and algebra. Outside of math, he enjoys listening to Clairo, drinking iced strawberry matcha, and playing club baseball, and his club team reached a peak Perfect Game ranking of #75 nationally. You can find him on AoPS as lu1376091 or on Discord as welu28_.", "David is a freshman from New Jersey. He is an AIME qualifier who scored an 8, competes in the USACO Silver Division, earned a perfect score on the AMC 8, and placed on the Distinguished Honor Roll (top 1%) for the AMC 10. He is also a competitive chess player with a USCF rating of 2000, with a peak ranking of top 50 in his age group nationwide. In his free time, David enjoys competing in track and field, playing basketball, and reading books. His favorite book is All About Love: New Visions by bell hooks."];
    return(
        <>
        <div className="staff-container">
            <h1>Meet our staff!</h1>
            <div className="staff-card-container">
                <StaffCards image={jonathanLiuPicture} name="Jonathan Liu" position="Founder" classOf="29" bio={bios[0]} />
                <StaffCards image={wenhaoLuPicture} name="Wenhao Lu" position="Founder" classOf="27" bio={bios[1]} />
                <StaffCards image={davidZhangPicture} name="David Zhang" position="Founder" classOf="29" bio={bios[2]} />
        </div>
    </div>
        </>
    )
}
export default Staff;
