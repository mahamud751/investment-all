"use client";
import { useState } from "react";
import Slider from "react-rangeslider";
const ReturnCalculator = () => {
  const [returnTypeValue, setReturnTypeValue] = useState(0);

  const returnType = ["One Time", "Monthly", "Yearly"];
  const [value, setValue] = useState(50);

  const handleChangeStart = () => {
    console.log("Change event started");
  };

  const handleChange = (value) => {
    setValue(value);
  };

  const handleChangeComplete = () => {
    console.log("Change event completed");
  };

  return (
    <>
      <div className="row ">
        <div className="col-lg-6 left_part p-4">
          <div>
            <div className="d-flex gap-4 invest_selector">
              <div className="d-flex gap-3">
                <div>
                  <input type="radio" name="investor-type" />
                </div>

                <div>
                  <p>Investment</p>
                </div>
              </div>
              <div className="d-flex gap-3">
                <div>
                  <input type="radio" name="investor-type" />
                </div>

                <div>
                  <p>Co-ownership</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <label>Select Property</label>
            <select
              style={{
                width: "100%",
                height: "40px",
                borderRadius: "4px",
              }}
            >
              <option>Villa Balima</option>
              <option>Villa Balima</option>
              <option>Villa Balima</option>
              <option>Villa Balima</option>
              <option>Villa Balima</option>
            </select>
          </div>
          <div className=" d-flex justify-content-center ">
            <div
              className="d-flex mt-3"
              style={{
                backgroundColor: "white",
                borderRadius: "50px",
              }}
            >
              {returnType.map((data, index) => (
                <p
                  className="px-4 py-1 mb-0"
                  key={index}
                  onClick={() => setReturnTypeValue(index)}
                  style={{
                    backgroundColor: returnTypeValue === index ? "#EB6753" : "",
                    color: returnTypeValue === index ? "white" : "black",
                    borderRadius: "50px",
                    cursor: "pointer",
                  }}
                >
                  {data}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-3">
            <label>Initial Purchase Amount</label> <br />
            <input
              type="text"
              style={{
                width: "100%",
                height: "40px",
                borderRadius: "4px",
              }}
              placeholder="Multiple of BDT 10.000"
            />
          </div>
          <div className="mt-3">
            <label>Period (5 year)</label> <br />
            <Slider
              min={0}
              max={100}
              value={value}
              onChangeStart={handleChangeStart}
              onChange={handleChange}
              onChangeComplete={handleChangeComplete}
            />
          </div>
        </div>
        <div className="col-lg-6  right_part">Calculator right</div>
      </div>
    </>
  );
};

export default ReturnCalculator;
