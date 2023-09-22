import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";

const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch("http://localhost:8080/quiz");
    const responseData = await response.json();
    console.log(responseData.results);
    setData(responseData.results);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Take the Quiz</h1>

      <Card />
    </>
  );
};

export default App;
