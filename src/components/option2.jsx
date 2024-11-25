import { IoIosArrowDropdown } from "react-icons/io";
import { useState } from "react";

export default function Option2(proos) {
  const [show, setShow] = useState(false);

  return (
   <>

          <div>
            <p className="label1">{proos.label}</p>
          
            <div onClick={() => setShow(!show)}>
              <p className="option" >{proos.option}  <IoIosArrowDropdown className={`arrowIcon ${show ? "rotateUp" : "rotateDown"}`} /></p>
            </div>
            {show && (
              <div className="showOption">
                <div className="options">
                  <label style={{ color: "#3a8ae0" }} htmlFor="option11">{proos.option1} </label>
                  <input  checked  type="radio" name="option11" id="option11" />
                </div>
                
                <div className="options">
                  <label htmlFor="option22"> {proos.option2} </label>
                  <input  type="radio" name="option11" id="option22" />
                </div>
                <div className="options">
                  <label htmlFor="option33"> {proos.option3} </label>
                  <input  type="radio" name="option11" id="option33" />
                </div>
              </div>
            )}
          </div>
   </>
  )
}

