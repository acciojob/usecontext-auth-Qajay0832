import React ,{useContext} from 'react';
import {AuthContext} from './App'

const Auth = () => {
    const data=useContext(AuthContext);
    console.log(data);
    const handleCheck=(e)=>{
        console.log(e.target.checked,data.setIsAuthenticated);
        data.setIsAuthenticated(e.target.checked)
    }
    
  return (
    <div>
        <input name='check' type='checkbox' onChange={handleCheck}/>
        <label htmlFor='check'>I'm not a robot</label>
    </div>
  )
}

export default Auth