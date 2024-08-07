// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import './App.css';

// function App() {
//   const [data,setData] = useState([]);
//   useEffect(()=>{
//     axios.get(`api/jokes`)
//     .then((data) => setData(data))
//     .catch((e)=>console.log(e));
//   },[])

//   return (
//     <>
//       <h1>Chai and Jokes</h1>
//       <p>total length: {data.length}</p>
//       <ul>
//         {
//           data.map((item,index)=>(
//             <li key={item.id}>
//               <h3>{item.name}</h3>
//               <p>{item.content}</p>
//             </li>
//           ))
//         }
//       </ul>
//     </>
//   )
// }

// export default App

import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`api/jokes`);
        setData(response.data); // Use response.data
        setLoading(false); // Set loading to false when data is fetched
      } catch (e) {
        setError(e); // Set error state if request fails
        console.log(e);
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchData(); // Call the fetchData function
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Show error message
  }

  return (
    <>
      <h1>Chai and Jokes</h1>
      <p>Total length: {data.length}</p>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
