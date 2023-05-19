import { useState } from "react";

const PawsRatingInput = ({ rating, disabled, onChange }) => {
  const [activeRating, setActiveRating] = useState(rating);

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

        <div className={rating < 1 ? "empty" : "filled"} >
          <i className="fa fa-paw"></i>
        </div>
        <div className={rating < 2 ? "empty" : "filled"} >
          <i className="fa fa-paw"></i>
        </div>
        <div className={rating < 3 ? "empty" : "filled"} >
          <i className="fa fa-paw"></i>
        </div>
        <div className={rating < 4 ? "empty" : "filled"} >
          <i className="fa fa-paw"></i>
        </div>
        <div className={rating < 5 ? "empty" : "filled"} >
          <i className="fa fa-paw"></i>
        </div>
      </div>
    </>
  );
};

export default PawsRatingInput;