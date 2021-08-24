import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";

const Login = () => {
  const [counter, setCounter] = useState(0);
  const [lastIndex, setLastIndex] = useState(0);
  const [name, setName] = useState("");

  const handleChange = (event) => {
    

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2>Connexion </h2>
    

      <CustomInput
        onChange={handleChange}
        type={email}
      />
      <CustomInput
        onChange={handleChange}
        type={passeword}
      />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>{lastIndex}</h1>
    </div>
  );
};

export default Category;
