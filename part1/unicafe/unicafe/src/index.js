import React, { useState } from "react";
import ReactDOM from "react-dom";

const Header = ({ text }) => {
  return <h1>{text}</h1>;
};

const Button = ({ text, handleClick }) => {
  console.log(handleClick);
  return <button onClick={handleClick}>{text}</button>;
};

const Statictic = ({ text, value }) => {
  return (
    <tbody>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </tbody>
  );
};

const Statistics = ({ goodTotal, neutralTotal, badTotal }) => {
  const all = goodTotal + neutralTotal + badTotal;
  const average = (goodTotal * 1 + badTotal * -1) / all;
  const percentPositive = (goodTotal / all) * 100;

  return all > 0 ? (
    <>
      <table>
        <Statictic text="Good" value={goodTotal} />
        <Statictic text="Neutral" value={neutralTotal} />
        <Statictic text="Bad" value={badTotal} />
        <Statictic text="All" value={all} />
        <Statictic
          text="Average"
          value={(goodTotal * 1 + badTotal * -1) / all}
        />
        <Statictic text="Percent Positive" value={(goodTotal / all) * 100} />
      </table>
    </>
  ) : (
    <p>No feedback given.</p>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Header text={"Give Feedback"} />
      <Button handleClick={() => setGood(good + 1)} text={"Good"} />
      <Button handleClick={() => setNeutral(neutral + 1)} text={"Neutral"} />
      <Button handleClick={() => setBad(bad + 1)} text={"Bad"} />

      <Header text={"Statistics"} />
      <Statistics goodTotal={good} neutralTotal={neutral} badTotal={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
