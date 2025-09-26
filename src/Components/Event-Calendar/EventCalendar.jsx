import './EventCalendar.css';
import EventCards from '../Event-Cards/EventCards';
import { slides } from '../../Event-Data/event-data.js';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { useState, useEffect } from 'react';

function EventCalendar(){
    return(
        <>
        <div className="event-container">
            <div className="event-container-title">
                <h1>Upcoming Events:</h1>
            </div>
                {slides.length > 0 && (
                    <div className="events">
                        <EventCards data={slides} />
                    </div>
                )}
                {slides.length < 0 && (
                    <>
                    <h1>At the current moment, there are no upcoming events!</h1>
                    <h1>Stay tuned</h1>
                    </>
                )}
        </div>
        </>
    )
}
export default EventCalendar;