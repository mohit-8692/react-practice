import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();
    // const [data,setData] = useState([]);
    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/mohit-8692`)
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         setData(data);
    //     })
    // },[])
  return (
    <div>
        profile: <img src={data.avatar_url} alt="Git Picture" width={300} height={300} />
        Github Followers:{data.followers}
    </div>
  )
}

export default Github

export const githubInfo = async ()=>{
    const res = await fetch(`https://api.github.com/users/mohit-8692`)
    return res.json();
}
