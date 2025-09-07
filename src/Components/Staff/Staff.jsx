import './Staff.css';
import wenhaoLuPicture from '../../assets/staff photos/wenhaolu.png';
import jonathanLiuPicture from '../../assets/staff photos/jonathanliu.png';
import davidZhangPicture from '../../assets/staff photos/davidzhang.png';
import adithyaBalaukumarPicture from '../../assets/staff photos/adithyabalaukumar.png';
import StaffCards from '../Staff-Cards/StaffCards';


function Staff(){
    const bios = [
    "Jonathan is a freshman from New Jersey. He is a USACO Silver and an AMC 8 Honorable Mention. His favorite math subject is geometry. In his free time, he enjoys playing basketball, drawing, and learning how to cook his favorite foods. This year, he aims to tackle more challenging math and programming problems and complete personal coding projects.", 
    "Wenhao is a junior from New Jersey. He is a USAJMO qualifier, earning an Honorable Mention, and scored 11 on the AIME. He is also in the USACO Silver division. His favorite math subjects are combinatorics and algebra. Outside of math, he enjoys listening to Clairo, drinking iced strawberry matcha, and playing club baseball, and his club team reached a peak Perfect Game ranking of #75 nationally. You can find him on AoPS as lu1376091 or on Discord as welu28_.", 
    "David is a freshman from New Jersey. He is an AIME qualifier who scored an 8, competes in the USACO Silver Division, earned a perfect score on the AMC 8, and placed on the Distinguished Honor Roll (top 1%) for the AMC 10. He is also a competitive chess player with a USCF rating of 2000, with a peak ranking of top 50 in his age group nationwide. In his free time, David enjoys competing in track and field, playing basketball, and reading books. His favorite book is All About Love: New Visions by bell hooks.",
    "Adithya is a Freshman from New Jersey. He got a Bronze Medal in the Math League International Competition, Honor Roll on AMC 8, and an award in New Jersey Youth Symphony. Adithya also made it to the state level in robotics by winning the innovation award. In his free time, Adithya frequently visits local parks to enjoy scenic views and loves drinking matcha",
    "Pietro is a freshman from New Jersey.  He has acheived achieved high distinction in the AMC 8, placing among the top scorers nationally for mathematical reasoning and problem-solving. In addition, I am a two-time top placer in the World Scholar’s Cup, earning recognition at the global level for excellence in debate, collaborative writing, and interdisciplinary knowledge. He also enjoys playing and performing guitar."
];
    return(
        <>
        
        <div className="staff-container-wrapper">
            <h1>Meet our staff!</h1>
        <div className="staff-container">
            <h1>Founders</h1>
            <div className="staff-card-container">
                <StaffCards image={jonathanLiuPicture} name="Jonathan Liu" position="Founder, Treasurer" classOf="29" bio={bios[0]} />
                <StaffCards image={wenhaoLuPicture} name="Wenhao Lu" position="Founder, C.E.O." classOf="27" bio={bios[1]} />
                <StaffCards image={davidZhangPicture} name="David Zhang" position="Founder, President" classOf="29" bio={bios[2]} />
        </div>
         <h1>Mentors</h1>
        <div className="staff-card-container">
            <StaffCards image={adithyaBalaukumarPicture} name="Adithya Balaukumar" position="Mentor" classOf="29" bio={bios[3]} />
        </div>
        </div>
</div>
        </>
    )
}
export default Staff;
