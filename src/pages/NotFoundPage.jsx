import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 1000);
  return <div style={{ color: "red" }}>NotFoundPage</div>;
};

export default NotFoundPage;
