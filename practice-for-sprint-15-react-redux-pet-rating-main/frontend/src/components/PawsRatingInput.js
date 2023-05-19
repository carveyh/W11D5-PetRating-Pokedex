import { useState } from "react";

const PawsRatingInput = ({ rating, disabled, onChange }) => {
  const [activeRating, setActiveRating] = useState(rating);
  //testing//
  window.activeRating = activeRating
  

  const onMouseEnter = e => {
    e.preventDefault();
    
    setActiveRating(e.target.id)
    console.log(e.target.id)
    
    // debugger;
  }

  return (

    <>
      <input
        type="number"
        disabled={disabled}
        value={rating}
        onChange={onChange}
        />
      <div className="rating-input">
        {/* HOW TO DRY */}
        {/* {for(let i = 1; i <= 5; i++){
          <div className={rating < i ? "empty" : "filled"} >
            <i className="fa fa-paw"></i>
          </div>
        }} */}

        {[1, 2, 3, 4, 5].map(num => {
          return (
            
            <>
              <div className={activeRating < num ? "empty" : "filled"} onMouseEnter = {onMouseEnter}>
                <i id = {num} className="fa fa-paw"></i>
              </div>
            </>
          )
        })}

        {/* <div className={activeRating < 1 ? "empty" : "filled"} onMouseEnter = {onMouseEnter}>
          <i className="fa fa-paw"></i>
        </div>
        <div key = "2" className={activeRating < 2 ? "empty" : "filled"} onMouseEnter = {onMouseEnter}>
          <i className="fa fa-paw"></i>
        </div>
        <div key = "3" className={activeRating < 3 ? "empty" : "filled"} onMouseEnter = {onMouseEnter}>
          <i className="fa fa-paw"></i>
        </div>
        <div key = "4" className={activeRating < 4 ? "empty" : "filled"} onMouseEnter = {onMouseEnter}>
          <i className="fa fa-paw"></i>
        </div>
        <div key = "5" className={activeRating < 5 ? "empty" : "filled"} onMouseEnter = {onMouseEnter}>
          <i className="fa fa-paw"></i>
        </div> */}
      </div>
    </>
  );
};

export default PawsRatingInput;