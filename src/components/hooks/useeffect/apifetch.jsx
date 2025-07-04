import { useEffect, useState } from "react";

export const ApiFetch = () => {
  const [apidata, setApidata] = useState(null);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(null);




  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";

  //const fetchPokemon = () => {
   // fetch(API)
    //  .then((res) => res.json())
    //  .then((data) => {
    //   setApidata(data);
    //    setLoading(false);
    //  })
     // .catch((error) => {
     //   console.log(error);
      //  setError(error);
      //  setLoading(false);
 // });
 // };



 const fetchPokemon = async ()=>{
  try{
   const res = await fetch(API);
   const data = await res.json();
   setApidata(data);
   setLoading(false);

  }catch(error){
    console.log(error);
      setError(error);
      setLoading(false);


  }
 }

  useEffect(() => {
    fetchPokemon();
  }, []);
  console.log(apidata);

  if(error)
    return(
  <div>
    <h1>error:{error.message}</h1>
  </div>);






  return (
    <section>
       <h1>Let's Catch Pokemon</h1>
      <header>
       
      </header>
      <ul>
        {apidata ? (
          <li style={{textDecoration:"none"}}>
            <figure>
              <img
               src={apidata.sprites.front_default}
               alt={apidata.name} />
            </figure>
            <h1>{apidata.name}</h1>
            <h1>{apidata.height}</h1>
          </li>
        ) : (
          <li>Loading...</li>
        )}
      </ul>
    </section>
  );
};










