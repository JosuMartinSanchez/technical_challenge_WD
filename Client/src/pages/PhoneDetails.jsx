import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function PhoneDetails() {
  const [details, setDetails] = useState(null);
  const { _id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getDetails();
  }, [_id]);

  const getDetails = async () => {
    setDetails(null);
    try {
      const response = await axios.get(
        `http://localhost:5005/api/phones/${_id}`
      );
      setDetails(response.data);
      console.log(response.data);
    } catch (error) {
      navigate("/error");
    }
  };

  if (details === null) {
    return <h3>Loading</h3>;
  }
  return (
    <div>
      <h2>Phone Details</h2>
      <p>{details.description}</p>
      <p>{details.manufacturer}</p>
      <p>{details.color}</p>
      <p>{details.price}</p>
      <p>{details.screen}</p>
      <p>{details.processor}</p>
      <p>{details.ram}</p>
    </div>
  );
}

export default PhoneDetails;
