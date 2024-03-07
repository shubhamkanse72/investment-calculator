import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  
  const inputIsValid = userInput.duration>=1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevValue) => {
      return {
        ...prevValue,
        [inputIdentifier]: +newValue,  // (+)forcing string into number for calculations
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {inputIsValid && <Results input={userInput} />}
      {!inputIsValid && <p className="center">Please enter a duration greater than zero</p>}
    </>
  );
}

export default App;
