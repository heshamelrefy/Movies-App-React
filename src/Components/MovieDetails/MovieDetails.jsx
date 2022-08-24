import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react';

export default function MovieDetails(props) {

    const type=props.match.params.type;
    const id=props.match.params.id
    console.log(type,id);
    
    let moviesDetails;
    
   async function getDetails() {
        let {data}=await axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=654f6984f7d7b12ad6fb63f9c42e947c&language=en-US`)
        moviesDetails=data;
        let imgPrefix='https://image.tmdb.org/t/p/w500'
        let insertData=document.getElementById('data')
        
            insertData.innerHTML=`
            <div class="row py-4">
            <div class="col-lg-4 col-md-8 col-sm-12">
                  
                  <img class="w-100" src=${imgPrefix+moviesDetails?.poster_path } alt=${moviesDetails?.title}  />
                  
               </div>
               <div class="col-lg-8 col-md-4 col-sm-12">
                   
                   <h3 class="text-primary">${moviesDetails?.title ||moviesDetails?.name}</h3>
                   <p style={{fontSize:"10px",overflow:"hidden"}} class="lead ">${moviesDetails?.overview ||moviesDetails?.biography}</p>
                   
               </div>
            </div>
               
               
            
            `
        
        console.log(moviesDetails);
    }
    useEffect( ()=>{
        getDetails()
        
    },[])
    

   


    return(
        
        <div id="data" >
            {/* <div className="col-md-4">
                <h1 >hhhhhhhhhhhhh</h1>
            </div>
           <div className="col-md-6">
               <h1>aaaaaaaaaaaaaaaa</h1>
           </div> */}
       
            {/* {moviesDetails? <div>look:{moviesDetails.title}</div> : 'la2'} */}
       
        </div>
    )


    
   
  

    }
