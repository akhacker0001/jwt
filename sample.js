import React, { useState } from 'react'

export default function Sample() {
    const[user,setUser]=useState({name:''})
    React.useEffect(()=>{

    },[])

    const handleToken= async ()=>{
      let flag=await localStorage.getItem('tokenKey')
      if(!!flag)
      {


        fetch("http://localhost:8080/api",{
          method:'GET',
        }).then((obj)=>{
          return obj.json()
        }).then((obj)=>{
          console.log(obj)
          console.log('other api triggered')
        })


      }
    }

    const getData=(val)=>{
      console.log(val)

         fetch("http://localhost:8080/api/post",{
            method:"POST",
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(val)
        }).then((res)=>{
          
        return res.json()
        // console.log(finalresponse)
        }).then((res)=>{
          console.log(res)
          localStorage.setItem('tokenKey',res.tokenkey)
        })
        handleToken()
        // let finalresponse= result.json()
        // console.log(finalresponse)
        // localStorage.setItem('token_key',token_key)
        // console.log(finalresponse)
    } 
    
  return (
    <div>
      <div>Testing</div>
      <input value={user.name} onChange={(e)=>setUser({...user,name:e.target.value})}/>
      <button onClick={()=>getData(user)}>Click</button>
    </div>
  )
}
