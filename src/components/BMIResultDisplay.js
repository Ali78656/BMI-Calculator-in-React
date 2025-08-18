import React from "react";
import GaugeChart from "react-gauge-chart";

function BMIResultDisplay({ bmi, message, gaugeValue }) {
  return (
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
  );
}

export default BMIResultDisplay;

