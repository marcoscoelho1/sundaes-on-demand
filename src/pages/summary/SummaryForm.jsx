import { useState } from "react";

const SummaryForm = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  return (
    <div>
      <input
        type="checkbox"
        id="terms_and_conditions"
        onClick={() => setIsButtonDisabled(!isButtonDisabled)}
      />
      <label htmlFor="terms_and_conditions">
        I agree with terms and conditions
      </label>
      <button disabled={isButtonDisabled}>Confirm Order</button>
    </div>
  );
};

export default SummaryForm;
