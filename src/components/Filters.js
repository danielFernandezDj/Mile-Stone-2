// useEffect(() => {
//   fetch('http://localhost:4000/tires', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     credentials: 'include' // Include cookies if needed
//   })
//   .then(response => response.json())
//   .then(data => setTires(data))
//   .catch(error => console.error('Error fetching tires:', error));
// }, []);