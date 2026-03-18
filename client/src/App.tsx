import { useState, useEffect } from "react";

import type messageResponse from "../../server/src/types/messageResponse";

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
      <main className="h-screen bg-gray-100 py-5 px-5">
        <div className="bg-white py-10 shadow shadow-gray-700 rounded-2xl">
          <p className="text-5xl text-center pb-2 font-bold">
            {message?.Header}
          </p>
          <p className="text-xl text-center">{message?.Message}</p>
        </div>
      </main>
    </>
  );
}

export default App;
