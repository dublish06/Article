const fetchSummary = async (url) => {
    const apiKey = "cc6f926591msh876fc5f2a12a32fp122f2bjsn8ba3180ea30d"; // Replace with your RapidAPI key
    const apiUrl = "https://article-extractor-and-summarizer.p.rapidapi.com/summarize-text";
  
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
        "X-RapidAPI-Key": apiKey,
      },
      body: JSON.stringify({ text: url }),
    });
  
    if (!response.ok) {
      throw new Error(`API returned status: ${response.status}`);
    }
  
    const data = await response.json();
    return data.summary;
  };
  
  export default fetchSummary;
  