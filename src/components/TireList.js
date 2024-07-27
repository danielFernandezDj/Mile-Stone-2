import React, { useEffect, useState } from "react";

// Material UI
import { Table, TableBody, TableCell, TableHead, TableRow, IconButton } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { Button } from '@mui/material';

// Component
import TireEdit from "./TireEdit";

const apiUrl = 'http://localhost:4000/api/tires';

export default function TireList() {
  const [tires, setTires] = useState([]);
  
  // delete to do
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/${id}`, { method: "DELETE" });

      if (response.ok) {
        setTires(tires.filter((tire) => tire.tire_id !== id));
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // get all items
  const getTires = async () => {
    try {
      const response = await fetch(apiUrl);
      const jsonData = await response.json();

      setTires(jsonData);
    } catch (error) {
      console.log(error.message);
    }
  };

  // on load run get all items function
  useEffect(() => {
    getTires();
  }, []);

  return (
    <>
      <Table className="table mt-5 text-left">
        <TableHead>
          <TableRow>
            <TableCell>Tire Size</TableCell>
            <TableCell>Edit Tire</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tires.map((tires) => (
            <TableRow key={tires.tire_id}>
              <TableCell>{tires.size}</TableCell>
              <TableCell>
                <TireEdit tires={tires} />
              </TableCell>
              <TableCell>
                <IconButton onClick={() => handleDelete(tires.tire_id)}
                  variant="contained"
                  aria-label="delete"
                  color="primary"
                  size="small"
                >
                  <DeleteForeverIcon fontSize="large"/>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>




  );
}

// return (
//   <>
//     <Table className="table mt-5 text-left">
//       <TableHead>
//         <TableRow>
//           <TableCell>Tire Size</TableCell>
//           <TableCell>Brand</TableCell>
//           <TableCell>Tread Pattern</TableCell>
//           <TableCell>Edit Tire</TableCell>
//           <TableCell>Delete</TableCell>
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {tires.map((tire) => (
//           <TableRow key={tire.tire_id}>
//             <TableCell>{tire.size}</TableCell>
//             <TableCell>{tire.brand}</TableCell>
//             <TableCell>{tire.treadPattern}</TableCell>
//             <TableCell>
//               <TireEdit tire={tire} />
//             </TableCell>
//             <TableCell>
//               <IconButton 
//                 onClick={() => handleDelete(tire.tire_id)}
//                 variant="contained"
//                 aria-label="delete"
//                 color="primary"
//                 size="small"
//               >
//                 <DeleteForeverIcon fontSize="large" />
//               </IconButton>
//             </TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   </>
// );
// }