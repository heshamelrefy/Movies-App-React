import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react'



const Register = (props) => {
    let [user,setUser] = useState({
        first_name:'',
        last_name:'',
        age:'',
        email:'',
        password:''
    })

    let [error,setError]=useState('');
    let [success,setSuccess]=useState('');
    let [loading,setLoading]=useState(false)
    let [errorList,setErrorList]=useState({});
    // let [errorAge,setErrorAge]=useState("");

    console.log(props);
    
    function changeUser(e){
        let myUser={...user};
        myUser[e.target.name]= e.target.value;
        setUser(myUser);
        return setUser(myUser);
        
        // console.log(myUser);
    }

   async function formSubmit(e){
        e.preventDefault();
        setLoading(true)
        let validate= validateRegisterForm();
       
        console.log(validate);
        if (validate.error ) {
            setErrorList(validate.error._original)
            setLoading(false)
        }
        else
        {
            let {data}= await axios.post(`https://route-egypt-api.herokuapp.com/signup`,user);
            console.log(data);
            if (data.message === 'success') {
              setLoading(false)
              setError("")
              setSuccess(data.message)
              props.history.push('/login')
            }
            else
            { 
              
                setLoading(false)
                setSuccess("")
                setError(data.message)
            }
        }
    
    }
     
    function validateRegisterForm(){
        let schema= Joi.object({
            first_name: Joi.string().min(3).max(10).required(),
            last_name: Joi.string().min(3).max(10).required(),
            age: Joi.number().min(16).max(80).required(),
            email: Joi.string().email({tlds:{allow:['com','net']}}).required(),
            password:Joi.string()
            //.pattern(new RegExp('^[a-z]{2,8}$'))
        })
        
        
      return  schema.validate(user,{abortEarly:false})
      
    }

    return ( 
        <div>
            <div className="w-75 mx-auto py-4">
                <h1>Register Now</h1>
               
                <form className='register'  onSubmit={formSubmit}>
                
                        <div className="py-2">
                        <label htmlFor="first_name">First Name:</label><br/>
                    <input onChange={changeUser} className="form-control first" type="text" name="first_name" />
                    
                    { errorList.first_name==="" &&<div  className="alert alert-danger p-2 mt-2">First name is required</div> }
                        </div>
                        <div className="py-2">
                        <label htmlFor="last_name">Last Name:</label><br/>
                    <input onChange={changeUser} className="form-control" type="text" name="last_name" />
                    { errorList.last_name==="" &&<div  className="alert alert-danger p-2 mt-2">Last name is required</div> }
                        </div>
                        <div className="py-2">
                        <label htmlFor="age">age:</label><br/>
                    <input onChange={changeUser} className="form-control" type="number" name="age" />
                    { errorList.age==="" &&<div  className="alert alert-danger p-2 mt-2">Age is required and must be number</div> }
                    
                    {/* { errorList.age==="" &&<div  className="alert alert-danger p-2 mt-2">Age is required</div> } */}
                        </div>
                        <div className="py-2">
                        <label htmlFor="email">Email:</label><br/>
                    <input onChange={changeUser} className="form-control" type="email" name="email" />
                    { errorList.email==="" &&<div  className="alert alert-danger p-2 mt-2">Email is required</div> }
                        </div>
                        <div className="py-2">
                        <label htmlFor="password">Password:</label><br/>
                    <input onChange={changeUser} className="form-control" type="password" name="password" />
                    { errorList.password==="" &&<div  className="alert alert-danger p-2 mt-2">Password is required</div> }
                        </div>
                        <button  type="submit" className="btn btn-info mt-2 w-100 ">
                          {loading ? <i className="fas fa-spinner fa-spin p-2"></i> :'Register'}  
                            
                            </button><br />
                        {error ? <div className="alert alert-danger mt-3 text-center p-2 text">{error}</div> : ''}
                        {success ? <div className="alert alert-success mt-3 text-center p-2 text">{success}</div> : ''}

                </form>
            </div>
        </div>
     );
}
 
export default Register;