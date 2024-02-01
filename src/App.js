import React, { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }, []);
  return (
    <div className="">
      <h1 className="p-3 mb-2 bg-dark text-white w-50 p-3">Список-дел:</h1>
      {loading ? (
        <div>loading...</div>
      ) : (
        data.map((item) => {
          return (
            <div className="">
              <h3 className="w-50 p-3 text-secondary-emphasis p-3 mb-2 bg-body-secondary ">
                {item.id}-{item.title}
              </h3>
              <h3 className="w-50 p-3 p-3 mb-2 bg-dark text-white">
                {item.complete}
              </h3>
            </div>
          );
        })
      )}
    </div>
  );
}
export default App;
