import { IoIosArrowDropdown } from "react-icons/io";
import { useState } from "react";

export default function Option(proos) {
  const [show, setShow] = useState(false);
//   const [value, setValue] = useState(false);

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
                  <label style={{ color: "#3a8ae0" }} htmlFor="option1">{proos.option1} </label>
                  <input  checked  type="radio" name="option" id="option1" />
                </div>
                
                <div className="options">
                  <label htmlFor="option2"> {proos.option2} </label>
                  <input  type="radio" name="option" id="option2" />
                </div>
              
              </div>
            )}
          </div>
   </>
  )
}

