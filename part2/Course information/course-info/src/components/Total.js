import React from "react";

const Total = ({ course }) => {
  const t = course.parts.reduce(
    (a, c) => a + c.exercises,
    course.parts[0].exercises
  );

  console.log(t);
  //   const total = course.parts.reduce((a, p) => {
  //     console.log("What is happening,", a, p.exercises);
  //     return a, p;
  //   });

  return (
    <div>
      {"Total of "}
      {course.parts.reduce(
        (a, c) => a + c.exercises,
        course.parts[0].exercises
      )}
      {" exercises."}
    </div>
  );
};

export default Total;
