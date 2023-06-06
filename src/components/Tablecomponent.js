import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./Tablecomponent.css"
function Table(){
const [data,setData]=useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(response=>{
            setData(response.data);
        })
        .catch(error=>{
            console.error(error);
        });
    },[]);

    return(
        <table className="table">
        <thead>
        <tr>
        <th>id</th>
        <th>name</th>
        <th>username</th>
        <th>phone</th>
        <th>website</th>
        <th>street</th>
        <th>suite</th>
        <th>city</th>
        <th>zipcode</th>



        </tr>
        </thead>
        <tbody>
        {
            data.map(item=>(
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.phone}</td>
                    <td>{item.website}</td>
                    <td>{item.address.street}</td>
                    <td>{item.address.suite}</td>
                    <td>{item.address.city}</td>
                    <td>{item.address.zipcode}</td>


                </tr>
            ))
        }
        </tbody>
        </table>
    );

}
export default Table;
