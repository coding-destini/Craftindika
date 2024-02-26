import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import Navbar from '../components/Navbar';

const Records = ({isLoggedIn}) => {
    const [records,setRecords] =  useState([]);

    //GEtting records
        useEffect(() => {
            const fetchRecords = async () => {
                try {
                    const myrecord = await axios.get('http://localhost:8080/record/getall');
                    setRecords(myrecord.data.records);
                    toast.success("Records fetch successfully");
                    console.log("myrecord --- ",myrecord);
                } catch (error) {
                    console.log(error);
                    toast.error("Error in getting records");
                }
            };
        
            fetchRecords();
        }, []);
    
    //deleting records 
    const handleDeleteRecord = async (recordId) => {
      try {
          await axios.delete(`http://localhost:8080/record/${recordId}`);
          setRecords(records.filter((record) => record._id !== recordId));
          toast.success('Record deleted successfully');
      } catch (error) {
          console.error('Error deleting record:', error);
          toast.error('Error deleting record');
      }
  };
        

  return (
    <div>
    <Navbar /> 
    <ul role="list" className="divide-y divide-gray-100 mx-8 border m-5 p-5 rounded-lg shadow-lg">
        {records.map((person) => (
            <li key={person._id} className="flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                    <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src='https://img.freepik.com/free-photo/paper-craft-art-folder-icon_53876-90052.jpg?t=st=1708980156~exp=1708983756~hmac=09e6c9a1a47d2bc46d6026633c5065f558890745aded06c99ccf4eec35a4f69a&w=740' alt="" />
                    <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                    </div>
                </div>
                <div className="flex gap-x-4">
                    <p className="text-sm leading-6 text-gray-900"> <b>Currency</b> : {person.currency}</p>
                    <p className="text-sm leading-6 text-gray-900"><b>Department</b> : {person.department}</p>
                    <p className="text-sm leading-6 text-gray-900"><b>Sub_department</b> : {person.sub_department}</p>
                    <p className="text-sm leading-6 text-gray-900"><b>Salary</b> : {person.salary}</p>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end  ">
                    <p className="text-sm leading-6 text-gray-900">{person.department}</p>
                    {person.on_contract ? (
                        <p className="mt-1 text-xs leading-5 text-gray-500">
                            Contracted {person.on_contract}
                        </p>
                    ) : (
                        <div className="mt-1 flex items-center gap-x-1.5">
                            <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            </div>
                            <p className="text-xs leading-5 text-gray-500">Contracted</p>
                        </div>
                    )}
                    <button onClick={() => handleDeleteRecord(person._id)} className="mt-2 px-3 py-1.5 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">Delete</button>
                </div>
            </li>
        ))}
    </ul>
</div>

  )
}

export default Records