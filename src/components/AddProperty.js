import React, { useState } from "react";
import axios from "axios";
import "../styles/add-property.css";
import Alert from "./Alert";

const initialState = {
  fields: {
    title: "2 bed flat",
    city: "Manchester",
    bathrooms: "2",
    bedrooms: "1",
    price: "102000",
    email: "hintsbrookproperties@gmail.com",
    type: "Flat",
  },
  alert: {
    message: "",
    isSuccess: false,
  },
};

const AddProperty = () => {
  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  const handleAddProperty = (event) => {
    event.preventDefault();

    setAlert({ message: "", isSuccess: false });

    axios
      .post("http://localhost:3000/api/v1/PropertyListing", {
        title: fields.title,
        type: fields.type,
        bedrooms: parseInt(fields.bedrooms, 10),
        bathrooms: parseInt(fields.bathrooms, 10),
        price: parseInt(fields.price, 10),
        city: fields.city,
        email: fields.email,
      })
      .then(() => {
        setAlert({
          message: "Property Added",
          isSuccess: true,
        });
      })
      .catch(() => {
        setAlert({
          message: "Server error. Please try again later.",
          isSuccess: false,
        });
      });
  };

  return (
    <div className="add-property">
      <h1>Add Property</h1>
      <form onSubmit={handleAddProperty}>
        <label htmlFor="title">
          Title:
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

        <Alert message={alert.message} success={alert.isSuccess} />
      </form>
    </div>
  );
};

export default AddProperty;
