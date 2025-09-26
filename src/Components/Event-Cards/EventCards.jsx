import './EventCards.css';
import { Link } from 'react-router-dom';

function EventCards( {data} ){
   return(
    <>
    <svg width="0" height="0" style={{ position: "absolute", visibility: "hidden" }}>
        <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#37a6f6", stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: "#ff6ec7", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#fff89a", stopOpacity: 1 }} />
            </linearGradient>
        </defs>
    </svg>

    {data.map((item, idx) =>{
        const Icon = item.src;
        return(
        <div key={idx} className="event-card-container">
            <div className="event-card-header">
                <Icon fill="url(#grad1)" size="25" />
                <div className="event-info">
                    <div className="event-info-left">
                    <h1>{item.eventTitle}</h1>
                    <p>Time: {item.eventTime}</p>
                    <p>Location: {item.eventLocation}</p>
                    </div>
                    <div className="event-info-right">
                        <Link>
                            <button>Enroll</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="event-desc">
                <p>{item.eventDescription}</p>
            </div>
        </div>
        )
})}
    </>
   )
}
export default EventCards;