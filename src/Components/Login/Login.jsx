import React, { useState } from 'react'
import  Joi  from 'joi';
import axios from 'axios';


const Login = ( props) => {
    let [error,setError]=useState('');
    let [user,setUser]=useState({
        email:'',
        password:''
    })
    let [errorList,setErrorList]=useState({})
    let [loading,setLoading]=useState(false)
    
    function changeUser(e){
        let myUser= {...user}
        myUser[e.target.name] = e.target.value
        setUser(myUser)
        // console.log(myUser);
    }

  async  function loginForm(e){
        e.preventDefault();
   
        setLoading(true)
        let validate = validateLoginForm()
        console.log(validate);
        if (validate.error) {
            setErrorList(validate.error._original)
            setLoading(false)
            setError('')
        }
        else
        {
            let {data} = await  axios.post(`https://route-egypt-api.herokuapp.com/signin`,user)
        console.log(data);
        if (data.message === "success") {
            //hro7 lel home
            setError('')
            localStorage.setItem("tokenUser",data.token);
            props.getUserData()
            props.history.push('/movie')
            setLoading(false)
        }
        else
        {
            setError(data.message)
            setLoading(false)
            setErrorList({})
        }
        }
     
    }
    function validateLoginForm(){
        let schema = Joi.object({
            email: Joi.string().email({tlds:{allow:['com','net']}}).required(),
            password:Joi.string()
        })
        return schema.validate(user,{abortEarly:false})
    }
    

    return ( 
        <div>
            <div className="mx-auto w-75 mt-5">
                <h1>Login</h1>
                <form onSubmit={loginForm}>
                    <div className="py-2">
                        <label htmlFor="email">Email:</label>
                        <input onChange={changeUser} type="email" className="form-control " name="email" />
                        {errorList.email === "" ? <div className="alert alert-danger p-2 mt-2 text-center">Email is required</div> :''}
                    </div>
                    <div className="py-2">
                        <label htmlFor="password">Password:</label>
                        <input onChange={changeUser} type="password" className="form-control" name="password" />
                        {errorList.password === "" ? <div className="alert alert-danger p-2 mt-2 text-center">Password is required</div> :''}
                    </div>
                    <button className="btn btn-info w-100">
                    {loading ? <i className="fas fa-spinner fa-spin p-2"></i> :'Login'}  
                            
                            
                    </button>
                    {error && <div className="alert alert-danger p-2 mt-2 text-center"> {error} </div> }
                    
                </form>
            </div>
        </div>
     );
}
 
export default Login;