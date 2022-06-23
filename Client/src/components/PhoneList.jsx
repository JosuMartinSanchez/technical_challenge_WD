import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function PhoneList() {
  const [phoneList, setPhoneList] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const response = await axios.get("http://localhost:5005/api/phones");
      setPhoneList(response.data);
    } catch (error) {
      console.log(error);
      navigate("/error");
    }
  };
  if (phoneList === null) {
    return <h3>loading</h3>;
  }
  return (
    <div>
      <h1>Phone List</h1>
      {phoneList.map((eachPhone) => {
        return (
          <div>
            <Link to={`/phones/${eachPhone._id}`}>
              <h3>{eachPhone.name}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default PhoneList;
