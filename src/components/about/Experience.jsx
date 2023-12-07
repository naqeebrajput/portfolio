import React from "react";

const experienceContent = [
  {
    year: "   2024 - Present",
    position: " Full Stack Developer",
    compnayName: "Sigma Square",
    details: `As a seasoned Full Stack Developer with 1.5 years at Sigma Square, I've honed my expertise in [Amazon Web Services, Node JS, React, React Native] and successfully contributed to impactful projects.`,
  },
  {
    year: "2019 - 2023",
    position: "Frontend Web And Mobile App Developer",
    compnayName: "Quality Programmers",
    details: `As a dedicated Front-End Web and Mobile App Developer with 2.5 years of hands-on experience at Quality Programmers, I've played a pivotal role in designing and implementing responsive and visually appealing user interfaces. Proficient in React, React Native, MUI, CSS, Bootstrap, `,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
