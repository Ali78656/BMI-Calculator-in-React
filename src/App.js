import { useState } from "react";
import GaugeChart from "react-gauge-chart";
import "./App.css";

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
    if (weight === 0 || height === 0) {
      alert("Please entre valid  weight and height");
    } else {
      let heightMeters = height * 0.3048;
      let bmi = weight / (heightMeters * heightMeters);
      setBmi(bmi.toFixed(1));
    }
    if (bmi < 18.5) {
      setGaugeValue(0.2);
      setMessage("You are underweight");
    } else if (bmi >= 18.5 && bmi < 24.9) {
      setGaugeValue(0.5);
      setMessage("You are a healthy weight");
    } else if (bmi >= 25 && bmi < 29.9) {
      setGaugeValue(0.75);
      setMessage("You are overweight");
    } else {
      setGaugeValue(1);
      setMessage("You are obese");
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="container">
      <h2>BMI Calculator</h2>
      <form onSubmit={calcBmi}>
        <div>
          <label>Weight (kg):</label>
          <input
            type="number"
            placeholder="Entre weight here..."
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Height (ft) :</label>
          <input
            type="number"
            placeholder="Entre height here..."
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit" className="btn">
            Calculate{" "}
          </button>
          <button className="btn outline" type="button" onClick={reload}>
            Reload
          </button>
        </div>
        <div className="centre">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>

          {/* Gauge Chart to show BMI visually */}
          <GaugeChart
            id="bmi-gauge-chart"
            nrOfLevels={50} // Number of segments in the gauge
            colors={["#00BFFF", "#7FFF00", "#FFD700", "#FF4500"]} // Colors for the gauge levels
            arcWidth={0.15} // Width of the gauge
            percent={gaugeValue} // Value for the pin
            textColor="#000" // Color of the label
            needleColor="#000"
            cornerRadius={10}
            arcPadding={0.01}
            style={{ height: "180px", width: "350px", marginTop: "40px" }}
          />
        </div>
      </form>
    </div>
  );
}

export default App;
