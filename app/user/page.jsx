"use client"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, deleteUser, fetchUser } from "./userApi";
import { selectUser } from "./userSlice";


const userPage = () => {
    const {users} = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(fetchUser)
    },[dispatch])
    

    const [input,setInput] = useState({
        name: "",
        email:"",
    })
    const handleInputChange = (e) => {
        setInput((prevState) =>({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }
// submit from
    const handleCreateUser = (e) => {
        e.preventDefault()
        dispatch(createUser(input))
    }
    // delete user
    const  handleDeleteUser = (id) => {
        dispatch(deleteUser(id))
    }
    return (
        <div >
            <div className="w-11/12  mx-auto  container flex">
                <div className="my-10 w-9/12">
                    <h1 className="text-2xl text-red-400 text-center my-3 underline">user profile</h1>
                    <table className="" border="3" cellSpacing="0" cellPadding="10">
                        <thead>
                            <tr className="bg-black text-white px-5 rounded-md divide-x divide-gray-400">
                                <th>SI</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Photo</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.length < 0 ? <h1>user data not found</h1> : users.map((index, user) => {
                                    const { name, email,_id} = user
                                    console.log(user);
                                    return  <tr key={index} className="bg-gray-200 divide-x-2 divide-gray-400  ">
                                    <td> {index + 1} </td>
                                    <td> {name} </td>
                                    <td> {email} </td>
                                    <td>+88 01762033852</td>
                                    <td> <img className="w-[40px] rounded-full" src="https://www.sylhetbar.com.bd/uploads/images/member/478.png" alt="shahinur" /> </td>
                                    <td>Panchagarh</td>
                                    <td >
                                        <button className=" divide-x-2 divide-cyan-500 bg-green-600 text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                        </svg>
                                        </button> <button onClick={() =>handleDeleteUser(_id)} className="bg-red-500 text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>
                                        </button>
                                    </td>
                                </tr>
                                })
                            }
                           
                        </tbody>
                    </table>
                </div>
                <div className="my-10 ms-5 bg-gray-200 p-4 rounded-md w-6/12">
                    <h1 className="text-2xl text-red-400 text-center my-3 underline">Create a new user</h1>
                    <form  onSubmit={handleCreateUser}>
                        <label htmlFor="name">Name</label>
                        <input onChange={handleInputChange} type="text" className="w-full px-5 py-2  bg-gray-400 rounded-sm text-white" value={input.name} name="name" placeholder="Name" required id="" />

                        <label htmlFor="email">Email</label>
                        <input onChange={handleInputChange} type="email" className="w-full px-5 py-2 bg-gray-400 text-white rounded-sm"  value={input.email} name="email" placeholder="Email" required id="" />

                        
                        <label htmlFor="phone">Phone</label>
                        <input type="number" className="w-full px-5 py-2 bg-gray-500 rounded-sm text-white mt-2" name="phone" placeholder="Phone" id="" />

                        <label className="mr-2" htmlFor="photo">Photo</label>
                        <input  className="mt-2" type="file" name="photo" id="" /> <br />

                        <label htmlFor="address">Address</label>
                        <input  type="text" className="w-full px-5 py-2 bg-gray-500 rounded-sm text-white mt-2" name="address" placeholder="Address"  id="" />

                        <input type="submit" className="bg-purple-500 px-10 py-2 rounded-md text-white w-full mt-7 cursor-pointer" value="create a user" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default userPage;