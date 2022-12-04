import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Part = (props) => {
  return (
    <>
      <p>
        {props.parts} {props.exercises}
      </p>
    </>
  );
};
const Content = () => {
  return (
    <>
      <Part parts="Fundamentals of React EXERCISES: " exercises="10" />
      <Part parts="Using props to pass data EXERCISES:" exercises="7" />
      <Part parts="State of a component EXERCISES: " exercises="14" />
    </>
  );
};
const Total = () => {
  return (
    <>
      <h3>La cantidad de ejercios es : {10 + 7 + 14} </h3>
    </>
  );
};
const App = () => {
  const Curso = "Half Stack application development";

  return (
    <div>
      <Header course={Curso} />
      <Content />
      <Total />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
