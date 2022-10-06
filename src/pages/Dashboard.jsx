import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ResponsiveAppBar from "../components/ResponsiveAppBar";

function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();

  

  return <ResponsiveAppBar/>

  }

export default Dashboard;
