import React from "react";

const skillsContent = [
  { skillClass: "p30", skillPercent: "30", skillName: "HTML" },
  { skillClass: "p89", skillPercent: "89", skillName: "JAVASCRIPT" },
  { skillClass: "p70", skillPercent: "70", skillName: "CSS" },
  { skillClass: "p50", skillPercent: "50", skillName: "PHP" },
  { skillClass: "p90", skillPercent: "90", skillName: "REACT NATIVE" },
  { skillClass: "p90", skillPercent: "90", skillName: "REACT" },
  { skillClass: "p65", skillPercent: "65", skillName: "Amazon Web Services" },
  { skillClass: "p75", skillPercent: "75", skillName: "Node JS" },
  { skillClass: "p75", skillPercent: "75", skillName: "Express JS" },
  { skillClass: "p80", skillPercent: "80", skillName: "WORDPRESS" },
  { skillClass: "p40", skillPercent: "40", skillName: "JQUERY" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
