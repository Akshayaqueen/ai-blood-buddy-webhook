import { useState } from "react";

function Onboarding() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [lastDonation, setLastDonation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", { age, gender, lastDonation });
    // Here you can redirect to dashboard after saving data
  };

  return (
    <div>
      <h2>Onboarding</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <br />
        <label>
          Gender:
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />
        <label>
          Last Donation Date:
          <input
            type="date"
            value={lastDonation}
            onChange={(e) => setLastDonation(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Continue</button>
      </form>
    </div>
  );
}

export default Onboarding;
