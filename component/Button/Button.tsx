import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { text } from 'stream/consumers'
type prop=
{
      pass:string,
      pass1:string
      
     
}

const Button=(props:prop)=>
{
    // var[text,update]=useState("i am a boy");

    // const onclickhandler=()=>
    // {
    //     var my=text.toUpperCase();
    //     update(my);
    // }
    // const onChangehandler=(event:any)=>
    // {
    //     update(event.target.value);
    // }
      
    const[text,mytext]=useState('');
    const[update,myupdate]=useState<any>([]);
    
       const onChangehandler=(e:any)=>
       {
        mytext(e.target.value);
       }
       const adddata=()=>
       {
        if(!text)
        {

        }
        else
        {
            myupdate([...update,text]);
            mytext('')
        }
        
      } 
      const deletedata=(id:any)=>
      {

        const updated=update.filter((elem:any,index:any)=>{
        return 
        (
            index=!id
        )
         } )
         myupdate(updated);
      }
     
    return(
         
        <div>
       
<div className="mb-3">
  <label  className="form-label" >enter </label>
  <textarea className="form-control" id="my" value={text} onChange={onChangehandler}></textarea>
</div>
  <div>
    {
        update.map((ele:any,ind:any)=>
        {
  return(
    <h2>{ele}</h2>
  )
        }
        )
    }
    <button onClick={adddata}>{props.pass}</button>
    <button onClick={deletedata}>{props.pass1}</button>
  </div>

        </div>
      
    )
}
export default Button

// import { type } from "os";
// import { useState} from "react";
// import { isPropertySignature } from "typescript";
// import app from "../../styles/app.module.css"

// type prop=
// {
//     pass:string,
//     pass1:string,
// }

// const Button=(prop:prop)=>
// {
//   const[text,mytext]=useState('')
//   const[update,textupdate]=useState<any>([])
//   const onchangehandler=(e:any)=>
//   {
//           mytext(e.target.value)
//   }
//   const adddata=()=>
//   {
//     textupdate([...update,text])
//         mytext('')
//   }
// const deletevalue=(id:any)=>
// {
//  const again=update.filter((ele:any)=>{
//     return(
//  ele=!id
//     ) 
//   }
//  )
//   textupdate(again)
// }
//   return(
//     <div> 
//     <div className={app.app}>
//  <input type="text" className={app.len} value={text} onChange={onchangehandler} />
//  {
//   update.map((el:any)=>
//   {
//     return(
//  <h2>{el}</h2>
//     )
//   }
//   )
//  }
//  <button onClick={adddata}  >{prop.pass}</button>
//  <button onClick={deletevalue}>{prop.pass1}</button>
//  </div> 
//  </div>
//   )
// }
// export default Button