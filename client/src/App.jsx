import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";

const App = () => {
  const [data, setData] = useState([]);
  const [questionIndex, setQuestionIndex]= useState(0)
  const [score, setScore] = useState(0)
  const [finish, setFinish] = useState(false)

  const getData = async () => {
    const response = await fetch("http://localhost:8080/quiz");
    const responseData = await response.json();
    console.log(responseData.results);
    setData(responseData.results);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleQuestion = () {
    if (questionIndex === data.length-1){
      setFinish(true)}
      else setQuestionIndex(questionIndex+1)
    
  }

  const handleScore = (result) => {
    console.log(result)
    if (result){
      setScore(score+1)
    }
    handleQuestion()
  }

  return (
    <>
      <h1>Take the Quiz</h1>

      <Card />
    </>
  );
};

export default App;
