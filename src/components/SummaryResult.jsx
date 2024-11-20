import React from "react";

const SummaryResult = ({ summary }) => {
  return (
    <div id="summaryResult">
      <h2>Summary:</h2>
      {summary ? (
        <div className="summary-section">
          <h3>Summary:</h3>
          <p>{summary}</p>
        </div>
      ) : (
        <p>No summary available.</p>
      )}
    </div>
  );
};

export default SummaryResult;
