
import React, { useContext } from 'react'


import MediaContext from '../ProviderContext/MoviesMediaProvider';


const Home = (props) => {
    console.log(props);
    let {trendingMovies,trendingPerson,trendingTv,loading}=useContext(MediaContext)

    if (loading ) {
        return <div style={{display:"flex",justifyContent:"center",marginTop:"200px",fontSize:"40px"}}><i className="fa fa-spinner fa-spin py-5" aria-hidden="true"></i></div>
    }
    

 
    function getDetails(type,id) {
        props.history.push(`/Details/${type}/${id}`)
        
    }

let imgPrefix='https://image.tmdb.org/t/p/w500'
    return (
        <div className="row py-5">
           <div className="col-lg-4 col-md-6 col-sm-12 py-3">
               <div className="line"></div>
               <h1 className="py-3">Trending Movies 
               To Watch Right Now 
               </h1>
               <p className="text-muted">Trending Movies To Watch</p>
               <div className="line w-75"></div>
           </div>
           
             
           
        {trendingMovies.map( (movie,index) => 
            
            <div key={index}  className="col-lg-2 col-md-3 col-sm-12">
               
               <div onClick={()=>{getDetails(movie.media_type,movie.id)}} className="over-layer movie">

               <img   src={imgPrefix+movie.poster_path} alt={movie.title} className="w-100" />
               <div className="layer">
                   
                   </div>
                   <div className="desc">
                   <h3 className="  "><i class="fa fa-hand-pointer" aria-hidden="true"></i></h3>
                   </div>
               </div>
                <h3 className="h6 py-2">{movie.title}</h3>
               
            </div>
            
        )}

    </div>
        
    )


  
}
 
export default Home;
