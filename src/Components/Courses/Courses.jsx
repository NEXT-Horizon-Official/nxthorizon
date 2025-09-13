import React from "react";
import "./Courses.css";

function Courses() {
  const courses = [
    {
      title: "Mathematics Competition Prep",
      level: "All Levels",
      description:
        "Comprehensive preparation for AMC, AIME, and USAJMO competitions with focus on problem-solving strategies and advanced techniques.",
      highlights: [
        "AMC 8/10/12 Preparation",
        "AIME Problem Solving",
        "USAJMO Techniques",
        "Weekly Practice Sessions",
      ],
      link: "#",
    },
    {
      title: "Programming & USACO",
      level: "Beginner to Advanced",
      description:
        "Master competitive programming concepts and algorithms to excel in USACO competitions from Bronze to Platinum divisions.",
      highlights: [
        "Algorithm Design",
        "Data Structures",
        "USACO Bronze-Platinum",
        "C++, Java, Python",
      ],
      link: "#",
    },
    {
      title: "Mentorship Program",
      level: "Personalized",
      description:
        "One-on-one guidance from accomplished students who have excelled in mathematics and programming competitions.",
      highlights: [
        "Personal Mentoring",
        "Goal Setting",
        "Progress Tracking",
        "College Prep Guidance",
      ],
      link: "#",
    },
  ];

  return (
    <section className="courses">
      <div className="courses-container">
        <h2 className="courses-title">Our Courses</h2>
        <p className="courses-subtitle">
          Comprehensive programs designed to build confidence, develop skills,
          and prepare students for success in STEM competitions and beyond.
        </p>

        <div className="courses-grid">
          {courses.map((course, idx) => (
            <div key={idx} className="course-card">
              <h3 className="course-name">{course.title}</h3>
              <p className="course-level">{course.level}</p>
              <p className="course-desc">{course.description}</p>
              <ul className="course-list">
                {course.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <a href={course.link} className="course-btn">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;