import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Naqeeb" },
  { meta: "last name", metaInfo: "Rajput" },
  { meta: "Age", metaInfo: "23 Years" },
  { meta: "Nationality", metaInfo: "Pakistani" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "E11/3 Islamabad" },
  { meta: "phone", metaInfo: "+923069016763" },
  { meta: "Email", metaInfo: "naqeeb.rajput1114@gmail.com" },
  { meta: "langages", metaInfo: "Urdu, English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
