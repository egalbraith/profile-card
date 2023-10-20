import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

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
    <div className="skill-list">
      <Skill name="JavaScript" emoji="🫣" backgroundColor="#A5E6BA" />
      <Skill name="HTML+CSS" emoji="🤩" backgroundColor="#9AC6C5" />
      <Skill name="Java" emoji="☕" backgroundColor="#7785AC" />
      <Skill name="PostgreSql" emoji="🗃️" backgroundColor="#C8B8DB" />
      <Skill name="React" emoji="😝" backgroundColor="#B48291" />
      <Skill name="RESTful APIs" emoji="😴" backgroundColor="#DED9E2" />
      <Skill name="Git" emoji="🤖" backgroundColor="#A8E0FF" />
      <Skill name="IntelliJ" emoji="🤓" backgroundColor="#FFEE93" />
      <Skill name="JUnit" emoji="🧐" backgroundColor="#99B898" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.backgroundColor }}>
      <span>{props.name}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
