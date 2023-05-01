import React, { useEffect, useState } from 'react'
import './App.css'
import { createClothing, getClothing } from './api'

interface Clothing {
  id: string;
  photoUrl: string;
  type: 'SHIRT' | 'TOP' | 'BOTTOM';
}

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [dummyClothing, setDummyClothing] = useState<Clothing | null>(null);
  const [clickedClothing, setClickedClothing] = useState<Clothing | null>(null);

  useEffect(() => {
    getClothing()
      .then((result) => {
        setDummyClothing(result.data.clothing);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleCreateClothing = () => {
    setLoading(true);
    setError(null);
    setClickedClothing(null);
    createClothing()
      .then((result) => {
        setClickedClothing(result.data.createClothing);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div>
        <h2>Create Clothing</h2>
        <button onClick={handleCreateClothing}>Create Clothing</button>
        {clickedClothing && (
          <div>
            <p>Clothing Type: {clickedClothing.type}</p>
            <img src={clickedClothing.photoUrl} alt="Clothing" />
          </div>
        )}
      </div>
      <div>
        <h2>Get Clothing</h2>
        {dummyClothing && (
          <div>
            <p>Clothing Type: {dummyClothing.type}</p>
            <img src={dummyClothing.photoUrl} alt="Clothing" />
          </div>
        )}
      </div>
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default App
