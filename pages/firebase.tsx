
// import { async } from "@firebase/util";

// const Todos = () => {

//     const [todos, setTodos] = useState<any[]>([])
//     const [description, setDescription] = useState<string>('')
//     const [loader, setLoader] = useState(false)

//     useEffect(() => {
//         console.log("Todos component just render");
//         getTodosHandler()

//     }, [])

//     // useEffect(()=>{
//     //     console.log("Todos component just render");

//     // },[props.data, props.input])


//     const getTodosHandler = async () => {

//         try {
//             setLoader(true)
//             const querySnapshot = await getDocs(collection(db, "todos"));
//             let todosList: any[] = []
//             querySnapshot.forEach((doc) => {
//                 todosList.push({
//                     description: doc.data()?.description,
//                     id: doc.id,
//                     createdAt: doc.data()?.createdAt
//                 });
//             });

//             console.log('todos', todosList);
//             setTodos(todosList)
//         } catch (error) {
        
//             console.log(error);
           
//         }
//         finally{
//             setLoader(false)
//         }
//     }
//     const onTodoSubmitHandler = async () => {
//         const newDoc = {
//             description,
//             createdAt: new Date()
//         }
//   try {
//             const docRef = await addDoc(collection(db, "todos"), newDoc);
            
//             setTodos([...todos, { ...newDoc, id: docRef.id }])
//         } catch (e) {
//             console.error("Error adding document: ", e);
//         }
//     }
//     return (

//         <div>
//             <h1>Add new todo</h1>
//             <label htmlFor="description">Enter description</label>
//             <input type="text" onChange={(e) => setDescription(e.target.value)} />

//             <button onClick={onTodoSubmitHandler}>Submit</button>

//             <h1>
//                 List of Todos from firestore
//             </h1>
//           <button onClick={getTodosHandler}>get todos</button>
//             {loader && <h1>Loading.....</h1>}
//             {todos.map((todo: any, index: number) => {
//                 return (
//                     <div key={index}>{todo.id}  - {todo.description}</div>
//                 )
//             })}
//         </div>
//     )
// }
// export default Todos


import { useEffect,useState } from "react";
import { collection,getDocs,addDoc } from "firebase/firestore";

// import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../New folder/config";


const todos=()=>
{
    
    const [first,todayfirst]=useState('')
    const [todos,settodos]=useState<any[]>([])
    //     const [todos, setTodos] = useState<any[]>([])

   

     const submitHandler=async()=>
     {
       const newDoc=
       {
       
        first,
        createdAt:new Date()
       }
       const reff=await addDoc(collection(db,"todos"),newDoc);
       settodos([...todos,{...newDoc,id:reff.id}])

     }
     const gettodos=async()=>
     {
        //const querySnapshot=await getDoc(collection(db,"todos"))
        const querySnapshot = await getDocs(collection(db, "todos"));
        let todos:any[]=[]
        querySnapshot.forEach((doc:any)=>
        {
            todos.push(
                {
                 first:doc.data()?.first,
                 description: doc.data()?.description,
                             id: doc.id,
                            createdAt: doc.data()?.createdAt
                }
            )
        }

        )
 
     }
    

    return(
        <div>
             <h1>add</h1>
       <input type="text"  onChange={(e:any)=>todayfirst(e.target.value)} />
       <button onClick={submitHandler}>submit</button>
       
       <h2>your todos are</h2>
       <button onClick={gettodos}> get todos</button>
       {todos.map((todo: any, index: number) => {
                return (
                   <div key={index}>{todo.id}  - {todo.first}</div>
                 )
            })}
      
       
       </div>
    )
}
export default todos