import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetcher = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/get");
        setData(response.data); 
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchData();

    return () => {
    };
  }, []); 
  return (
    <div>
      {data.map(item => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default DataFetcher;
