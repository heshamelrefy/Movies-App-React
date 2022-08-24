import React, { useContext } from 'react'
import MediaContext from '../ProviderContext/MoviesMediaProvider';

export default function Contact(props) {

    let {trendingPerson,loading}=useContext(MediaContext)

    if (loading ) {
        return <div style={{display:"flex",justifyContent:"center",marginTop:"200px",fontSize:"80px"}}><i className="fa fa-spinner fa-spin py-5" aria-hidden="true"></i></div>
    }


    function getDetails(type,id) {
        props.history.push(`/Details/${type}/${id}`)
        
    }
    let imgPrefix='https://image.tmdb.org/t/p/w500'
    return (
        <div className="row py-4">
                   
                   <div className="col-lg-4 col-md-6 col-sm-12 py-5">
               <div className="line"></div>
               <h1 className="py-3">Trending Person 
               To Watch Right Now
               </h1>
               <p className="text-muted">Trending Person To Watch</p>
               <div className="line w-75"></div>
           </div>
        {trendingPerson.map( (person,index) =>
            <div key={index} className="col-lg-2 col-md-3 col-sm-12">
               <div onClick={()=>{getDetails(person.media_type,person.id)}} className="over-layer person">
               <img src={imgPrefix+person.profile_path} alt={person.title} className="w-100" />

               <div className="layer">
                   
                   </div>
                   <div className="desc">
                   <h3 className="  "><i class="fa fa-hand-pointer" aria-hidden="true"></i></h3>
                   </div>
                   
               </div>
                <h3 className="h6 py-2">{person.title}</h3>
            </div>
        )}
        </div>
    )
}
