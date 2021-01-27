import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ name, handleClicks }) => {
  return <button onClick={handleClicks}>{name}</button>;
};

const Heading = ({ name }) => {
  return <h1>{name}</h1>;
};

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(props.anecdotes.length).fill(0));
  console.log(votes);
  const max = votes.indexOf(Math.max(...votes));

  const randomQuote = () => {
    setSelected(Math.floor(Math.random() * props.anecdotes.length));
  };

  const votesSetter = (selected) => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
    console.log(votes);
  };

  return (
    <div>
      <Heading name={"anecdote of the day"} />
      {props.anecdotes[selected]}
      <p>has {votes[selected]} votes </p>
      <Button name={"Random Quote"} handleClicks={randomQuote} />
      <Button name={"Vote"} handleClicks={() => votesSetter(selected)} />
      <Heading name={"Anecdote with most votes"} />
      {props.anecdotes[max]}
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
