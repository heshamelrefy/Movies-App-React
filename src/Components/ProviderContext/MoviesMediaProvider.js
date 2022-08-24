import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'


let MediaContext=createContext([]);

export  function MoviesMediaProvider(props) {
    
    
    
 
    let [loading,setLoading]=useState(false)
    const [trendingMovies,setTrendingMovies]=useState([])
    const [trendingTv,setTrendingTv]=useState([])
    const [trendingPerson,setTrendingPerson]=useState([])



  
     async function getTrendingMedia(mediaType,callback) {
         setLoading(true)
      let {data}=await   axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=654f6984f7d7b12ad6fb63f9c42e947c&language=en-US&page=1`)
      callback(data.results);
      setLoading(false)
  
  }
  
  useEffect(() =>{
      getTrendingMedia('movie',setTrendingMovies);
      getTrendingMedia('tv',setTrendingTv);
      getTrendingMedia('person',setTrendingPerson);
  },[])






    return (
       
            <MediaContext.Provider value={{trendingMovies,trendingPerson,trendingTv,loading}}>
            {props.children}
         
        </MediaContext.Provider>
       
        
    )
}

export default  MediaContext;
