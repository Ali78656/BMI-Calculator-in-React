import React from "react";

function BMICalculatorForm({
  weight,
  setWeight,
  height,
  setHeight,
  calcBmi,
  reload,
}) {
  return (
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
    </form>
  );
}

export default BMICalculatorForm;

