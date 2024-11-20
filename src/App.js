import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import SummaryResult from "./components/SummaryResult";
import "./styles/style.css";

const App = () => {
  const [summary, setSummary] = useState("");

  return (
    <div className="container">
      <Header />
      <Form setSummary={setSummary} />
      <SummaryResult summary={summary} />
    </div>
  );
};

export default App;
