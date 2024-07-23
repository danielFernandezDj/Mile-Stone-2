import React, { useContext } from 'react';
import { TireContext } from "../context/TireContext";
import TireCard from "./TireCard";

export default function TireList() {
  const { tires, sizeFilter, treadPatternFilter } = useContext(TireContext);

  const filteredTires = tires.filter(tire => {
    return (
      (!sizeFilter || tire.size === sizeFilter) &&
      (!treadPatternFilter || tire.treadPattern === treadPatternFilter)
    );
  });

  return (
    <div>
      {filteredTires.map(tire => (
        <TireCard key={tire.tire_id} tire={tire} />
      ))}
    </div>
  );
}
