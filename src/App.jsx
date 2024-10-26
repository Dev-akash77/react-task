import React from "react";
import "./index.css";
import { AuthProvider } from "./Context/AuthContext";
import AllComponents from "./Common/Components/AllComponents";
const App = () => {
  return (
    <>
      <AuthProvider>
        <AllComponents />
      </AuthProvider>
    </>
  );
};

export default App;
