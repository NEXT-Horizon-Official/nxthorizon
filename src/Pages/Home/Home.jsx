import './Home.css';
import Hero from '../../Components/Hero/Hero';
import EventCalendar from "../../Components/Event-Calendar/EventCalendar";
import { useState, useEffect } from 'react';

function Home() {
  return (
    <>
      <Hero />
      <EventCalendar />
    </>
  );
}

export default Home;