import React, { useContext } from 'react';
import { TireContext } from "../context/TireContext";

// components
import TireCard from "./TireCard";
import TireFilter from "./TireFilter"

export default function TireList() {
  const { tires } = useContext(TireContext);

  return (
    <div>
      {tires.map(tire => (
        <TireCard key={tire.tire_id} tire={tire} />
      ))}
    </div>
  );
}