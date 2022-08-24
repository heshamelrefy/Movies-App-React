import React from 'react'
import { Redirect, Route } from 'react-router'

export default function ProtectedRoute(props) {

    if (localStorage.getItem("tokenUser")) {
        if (props.context) {
            return (
                <props.context>
                    <Route path={props.path} component={props.Component}/>
                </props.context>
            )
        } 
       
        
    }
    else
    {
       return ( <Redirect  to="/login"/>)
    }
   
}
