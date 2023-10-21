import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const skills = [
  { skill: "Javascript", level: "strong", color: "#A5E6BA" },
  { skill: "HTML+CSS", level: "beginner", color: "#9AC6C5" },
  { skill: "Java", level: "strong", color: "#7785AC" },
  { skill: "PostgreSql", level: "intermediate", color: "#C8B8DB" },
  { skill: "React", level: "beginner", color: "#B48291" },
  { skill: "RESTful APIs", level: "intermediate", color: "#DED9E2" },
  { skill: "Git", level: "intermediate", color: "#A8E0FF" },
  { skill: "IntelliJ", level: "strong", color: "#FFEE93" },
  { skill: "JUnit", level: "intermediate", color: "#99B898" },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <div>
          <Header />
          <Body />
        </div>
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="avatar.jpg" alt="avatar" className="avatar"></img>;
}

function Header() {
  return <h1>Emily Galbraith</h1>;
}

function Body() {
  return (
    <p className="body">
      Full-stack web developer. When not coding I enjoy spending time with my
      family, reading books, playing games, and cooking.
    </p>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      {skills.map((skillObject) => (
        <Skill skillObject={skillObject} key={skillObject.skill} />
      ))}
    </ul>
  );
}

function Skill({ skillObject }) {
  return (
    <li className="skill" style={{ backgroundColor: skillObject.color }}>
      <span>{skillObject.skill}</span>
      <span>
        {skillObject.level === "beginnger" && "👶"}
        {skillObject.level === "intermediate" && "👍"}
        {skillObject.level === "strong" && "💪"}
      </span>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
