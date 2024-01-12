import React, { useEffect, useState } from "react";

const LocalitaSalvate = (props) => {
  const [localitaSalvate, setLocalitaSalvate] = useState([]);

  useEffect(() => {
    fetch()
      .then((response) => response.json())
      .then((data) => setLocalitaSalvate(data))
      .catch((error) => console.error("Errore durante la fetch:", error));
  }, []);

  return (
    <>
      <div>Località Salvate:</div>
      <ul>
        {localitaSalvate.map((loc, i) => (
          <li key={i}>{loc.nome}</li>
        ))}
      </ul>
    </>
  );
};

export default LocalitaSalvate;
// qui sono andato in palla...
