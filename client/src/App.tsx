import { useState, useEffect } from "react";

class messageResponse {
  "Heading": string;
  "Content": string;
}

function App() {
  const [message, setMessage] = useState<null | messageResponse>();

  useEffect(() => {
    fetch("/api/hello")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data);
      });
  }, []);

  return (
    <>
      <p className="text-5xl text-center">{message?.Heading}</p>
      <p className="text-xl text-center">{message?.Content}</p>
    </>
  );
}

export default App;
