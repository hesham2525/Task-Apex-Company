import { IoIosArrowDropdown } from "react-icons/io";
import { useState } from "react";

export default function Option3(proos) {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState(50);
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  return (
   <>

<div>
        <p className="label1">{proos.label}</p>

        <div onClick={() => setShow(!show)}>
          <p className="option">
            {show ? "50 ر.ع " : proos.option}{" "}
            <IoIosArrowDropdown
              className={`arrowIcon ${show ? "rotateUp" : "rotateDown"}`}
            />
          </p>
        </div>
        {show && (
          <div className="showOption">
            <label>
              <input
                style={{ color: "#3a8ae0" }}
                className="range"
                type="range"
                id="test"
                min="0"
                max="100"
                step="50"
                value={value}
                onChange={handleInputChange}
              />
            </label>
            <div className="range-labels">
              <p
                className="value"
                style={{
                  color: value === "0" ? "#3a8ae0" : "inherit",
                }}
              >
                50 ر.ع
              </p>
              <p
                className="value1"
                style={{
                  color: value === "50" ? "#3a8ae0" : "#3a8ae0",
                }}
              >
                120 ر.ع
              </p>
              <p
                className="value"
                style={{
                  color: value === "100" ? "#3a8ae0" : "inherit",
                }}
              >
                500 ر.ع
              </p>
            </div>
          </div>
        )}
      </div>
   </>
  )
}

