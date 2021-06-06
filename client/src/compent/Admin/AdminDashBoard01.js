import React,{useEffect} from 'react'
import './AdmnCssDashBoard.css'
import {useDispatch} from 'react-redux'
import {ProductUser} from '../js/action/authActions'
import MapProduct from './MapProduct'
import {BrowserRouter ,Link,Route,Switch} from 'react-router-dom'
import AchatCommande from './AchatCommande'
import  MapProduct02 from './MapProduct02'

const AdminDashBoard01 = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(ProductUser())
    },[])
    
    return (
     
        <div className="DisplayFLexBoxAdmin">
              <BrowserRouter>
           <div className="Servidce static	">
         <Link to="/Admin/dashboard"> <p> Product</p></Link> 
       
           </div>
           <div className="NavBarAdmin">
           <Route exact path="/Admin/dashboard" render={()=><MapProduct/>}></Route>
           <Route exact path="/Admin/dashboard/user" render={()=><AchatCommande/>}></Route>
           </div>
             
           </BrowserRouter>
        </div>
    )
}

export default AdminDashBoard01
