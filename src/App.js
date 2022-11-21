import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [rand, setRand] = useState(null);
  const [advice, setAdvice] = useState("");

  const createRandomNumber = () => {
    setRand(Math.random());
  };

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then(
        (result) => {
          const { advice } = result.slip;
          setIsLoaded(true);
          setAdvice(advice);
        },
        (error) => {
          console.log(error);
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [rand]);

  return (
    <>
      <div className="advice-box">
        <h2>{advice}</h2>
        <button className="btn" type="button" onClick={createRandomNumber}>
          New Advice!
        </button>
      </div>
    </>
  );
}

export default App;
