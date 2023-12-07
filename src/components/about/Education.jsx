import React from "react";

const educationContent = [
  {
    year: "2018",
    degree: "Bachelor of Science in Computer Science",
    institute: "University of Agriculture Faisalabad ",
    details: `I am a recent graduate with a Bachelor of Science in Computer Science (BSCS) from the University of Agriculture, Faisalabad (UAF). Throughout my academic journey, I immersed myself in a diverse range of coursework, including advanced topics such as Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems and many more.`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
