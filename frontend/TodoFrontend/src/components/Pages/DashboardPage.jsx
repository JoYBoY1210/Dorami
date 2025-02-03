import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import Navigation from "../Navigation";
import DashboardMain from "../DashboardMain";
import SignInPage from "../Pages/SignInPage";
import { Navigate } from "react-router-dom";

const DashboardPage = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/sign-in" />;
  }

  return (
    <div className="bg-gray-200 flex">
      <div className="navigation">
        <Navigation />
      </div>
      <div className="dashboard w-full p-3">
        <DashboardMain />
      </div>
    </div>
  );
};

export default DashboardPage;
