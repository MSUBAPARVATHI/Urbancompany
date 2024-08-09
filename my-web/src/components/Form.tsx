// import React, { FormEvent, useState } from 'react';
// import { useRouter } from 'next/router';
// import {database} from '../firebase'
// import { addUserForm, getUserForm } from '"firebase/database"';

// const Form=() =>{

//     const [name, setName] = useState('');
//     const [age, setAge] = useState('');
//     const [degree, setDegree] = useState('');

//     const router = useRouter();

//     const handleForm = async (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault();

//     try{
//         const userForm = await addUserForm(name, age, degree);
//         await getUserForm (userForm.user);
//         console.log("Information are stored in firebase database");

//     }
//     catch(err: any){
//         console.error("Error storing database", err);
//         //setError(err.message);
//     }

// }
// };

// return(
//     <div>
//         <div className='hero bg-base-200 min-h-screen'>
//             <div className="hero-content flex-col">
//            <h1 className="text-xl fond-bold">personal information! </h1>
//             </div>
//         </div>
        
//         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//                         <form className="card-body" onSubmit={handleForm}>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Name</span>
//                                 </label>
//                                  <input
//                                     type="text"
//                                     placeholder="Enter your name"
//                                     className="input input-bordered"
//                                     value={name}
//                                     onChange={(e) => setName(e.target.value)}
//                                     required
//                                 />

//                                 <label className="label">
//                                     <span className="label-text">Age</span>
//                                 </label>
//                                 <input
//                                     type="number"
//                                     placeholder="Enter your Age"
//                                     className="input input-bordered"
//                                     value={age}
//                                     onChange={(e) => setAge(e.target.value)}
//                                     required
//                                 />

//                                 <label className="label">
//                                     <span className="label-text">Degree</span>
//                                 </label>
//                                 <input
//                                     type="text"
//                                     placeholder="Enter your Degree"
//                                     className="input input-bordered"
//                                     value={degree}
//                                     onChange={(e) => setDegree(e.target.value)}
//                                     required
//                                 />
//                                 </div>

                                
//     </div>
// );