import { useState } from "react";
import "./App.css";
import BMICalculatorForm from "./components/BMICalculatorForm";
import BMIResultDisplay from "./components/BMIResultDisplay";

function App() {
  // States

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(" ");
  const [message, setMessage] = useState(" ");
  const [gaugeValue, setGaugeValue] = useState(0);

  // Logic

  let calcBmi = (e) => {
    e.preventDefault();
    if (weight <= 0 || height <= 0) {
      setMessage("Please enter valid positive weight and height.");
      setBmi("");
      setGaugeValue(0);
    } else {
      let heightMeters = height * 0.3048;
      let calculatedBmi = weight / (heightMeters * heightMeters);
      setBmi(calculatedBmi.toFixed(1));

      if (calculatedBmi < 18.5) {
        setGaugeValue(0.2);
        setMessage("You are underweight");
      } else if (calculatedBmi >= 18.5 && calculatedBmi < 24.9) {
        setGaugeValue(0.5);
        setMessage("You are a healthy weight");
      } else if (calculatedBmi >= 25 && calculatedBmi < 29.9) {
        setGaugeValue(0.75);
        setMessage("You are overweight");
      } else {
        setGaugeValue(1);
        setMessage("You are obese");
      }
    }
  };

  let reload = () => {
    setWeight(0);
    setHeight(0);
    setBmi(" ");
    setMessage(" ");
    setGaugeValue(0);
  };

  return (
    <div className="container">
      <h2>BMI Calculator</h2>
      <BMICalculatorForm
        weight={weight}
        setWeight={setWeight}
        height={height}
        setHeight={setHeight}
        calcBmi={calcBmi}
        reload={reload}
      />
      <BMIResultDisplay bmi={bmi} message={message} gaugeValue={gaugeValue} />
    </div>
  );
}

export default App;
