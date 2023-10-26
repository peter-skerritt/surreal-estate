import React, { useState } from "react";
import "../styles/add-property.css";

const initialState = {
  fields: {
    title: "",
    city: "Manchester",
  },
};

const AddProperty = () => {
  const [fields, setFields] = useState(initialState.fields);

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  return (
    <div className="add-property">
      <h1>Add Property</h1>
      <form onSubmit={handleAddProperty}>
        <label htmlFor="title">
          <input
            type="text"
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="city">
          City:
          <select
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
          >
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </label>

        <label htmlFor="type">
          Type:
          <select
            id="type"
            name="type"
            value={fields.type}
            onChange={handleFieldChange}
          >
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>

        <button type="submit">Add</button>
      </form>
    </div>
  );
  
};

export default AddProperty;
