import "./StaffCards.css";

function StaffCards({ image, name, position, classOf, bio}){
    return(
            <div className="staff-card" aria-label="Founder Jonathan Liu's bio">
                <div className="staff-headshot-container">
                    <img src={image} />
                </div>
                <div className="staff-intro-container">
                    <h1 className="staff-card-name">{name}</h1>
                    <h1 className="staff-card-role">{position}</h1>
                    <h1 className="staff-card-class">Class of {classOf}'</h1>
                </div>
                <div className="staff-bio-container">
                    <p>{bio}</p>
                </div>
            </div>

    )
}
export default StaffCards;