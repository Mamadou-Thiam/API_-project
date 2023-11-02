import React from 'react';
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import { useEffect } from 'react';
import { useState } from 'react';
    
    const UserList = () => {
        const[data,setData]=useState([])
        useEffect(()=>{
            Axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res=>{
                console.log(res.data)
                setData(res.data)

            })
              

            .catch(err=>console.log(err))

        },[])
        // mapper pour afficher les données dans un tableau 
        const arr= data.map((data,index)=>{
            return (
              <tbody>
                <tr>
                  <td>{data.id}</td>
                  <td>{data.username}</td>
                  <td>{data.name}</td>
                  <td> {data.email}</td>
                  <td>{data.address.street} </td>
                </tr>
              </tbody>
            );
        })
        return (
            <>
            <h1>use axio with react js</h1>
            <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Identifiant</th>
          <th> Name</th>
          <th>User Name</th>
          <th>email</th>
          <th>Adress</th>
        </tr>
      </thead>
      
      {arr}
      
    </Table>
                
            </>
        );
    };
    
    export default UserList;