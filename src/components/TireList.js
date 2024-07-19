import React, { useContext } from 'react';
import { TireContext } from "../context/TireContext";
import TireCard from "./TireCard";

export default function TireList() {
  const { tires } = useContext(TireContext);

  return (
    <div>
      {tires.map(tire => (
        <TireCard key={tire.id} tire={tire} />
      ))}
    </div>
  );
}