import React from "react";
import ReactDOM from "react-dom";

const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Part = ({ part }) => {
  return <p>{part}</p>;
};

const Content = ({ parts }) => {
  console.log(parts[1].name);
  return (
    <div>
      <Part part={`${parts[0].name} - ${parts[0].exercises}`} />

      <Part part={`${parts[1].name} - ${parts[1].exercises}`} />
      <Part part={`${parts[2].name} - ${parts[2].exercises}`} />
    </div>
  );
};

const Total = ({ parts }) => {
  console.log(parts[0]);
  console.log("wtf");
  return (
    <p>
      Number of exercises{" "}
      {parts[0].exercises + parts[1].exercises + parts[2].exercises}
    </p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  // const part2 = "Using props to pass data";
  // const exercises2 = 7;
  // const part3 = "State of a component";
  // const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
