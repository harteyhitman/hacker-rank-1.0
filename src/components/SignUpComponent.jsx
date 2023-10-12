import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  
  const [formValues, setFormValues] = useState({
    teamName: "",
    Phone: "",
    email: "",
    projectTopics: "",
    category: "",
    groupSize: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Register/Login");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="row">
          <div className="label">
            <label htmlFor="Team’s Name">Team’s Name</label>
          </div>
          <input
            type="text"
            id="Team’s Name"
            placeholder="Enter your Team’s Name"
            name="teamName"
            value={formValues.teamName}
            onChange={handleChange}
            required
          />
          <div className="label">
            <label htmlFor="Email">Email</label>
          </div>
          <input
            type="Email"
            id="Email"
            placeholder="Enter your Email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            required
          />
          <div className="label">
            <label htmlFor="Category">Category</label>
          </div>
          <select
            className="select"
            type="text"
            id="Category"
            placeholder="Category"
            name="category"
            value={formValues.category}
            onChange={handleChange}
            required
          >
            <option value="category">Select Your Category</option>
            <option value="category">Frontend</option>
            <option value="category">Backend</option>
            <option value="category">Designer</option>
            <option value="category">Tester</option>
          </select>
        </div>
        <div className="row">
          <div className="label">
            <label htmlFor="Phone">Phone</label>
          </div>
          <input
            type="number"
            id="Phone"
            placeholder="Enter your phone number"
            name="Phone"
            value={formValues.Phone}
            onChange={handleChange}
            required
          />
          <div className="label">
            <label htmlFor="Project Topic">Project Topic</label>
          </div>
          <input
            type="text"
            id="Project Topic"
            placeholder="Enter your Project Topic"
            name="projectTopics"
            value={formValues.projectTopics}
            onChange={handleChange}
            required
          />
          <div className="label">
            <label htmlFor="Group Size">Group Size</label>
          </div>
          <select
            className="select"
            type=""
            id="Group Size"
            placeholder="Enter your Group Size"
            name="groupSize"
            value={formValues.groupSize}
            onChange={handleChange}
            required
          >
            <option value="group">Select</option>
            <option value="group">10</option>
            <option value="group">15</option>
            <option value="group">20</option>
            <option value="group">30</option>
          </select>
        </div>
      </div>
      <div className="below-sign-up">
        <div className="review-before-submit">
          Please review your registration details before submitting
        </div>
        <div className="check-box">
          <input
            type="checkbox"
            id="vehicle1"
            name="policy"
            value="policy"
            required
          />
          <label for="vehicle1">
            I agreed with the event terms and conditions and privacy policy
          </label>
        </div>
        <div className="register-btn-cover">
          {" "}
          <button type="submit" className="register-up-btn">
            Register Now
          </button>
        </div>
      </div>
    </form>
  );
}

export default SignIn;
