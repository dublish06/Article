import React, { useState } from "react";
import fetchSummary from "../api";

const Form = ({ setSummary }) => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const summary = await fetchSummary(url);
      setSummary(summary);
    } catch (err) {
      setError(err.message || "Failed to fetch the summary");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter article URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? "Fetching..." : "Summarize"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default Form;
