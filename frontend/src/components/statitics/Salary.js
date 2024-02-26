import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast';
import Layout from '../Layout/Layout';

const Salary = () => {
 const [data,setdata] = useState({});


 useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/record/salary-summary');
      setdata(response.data);
    } catch (error) {
      toast.error('Failed to fetch salary summary');
    }
  }
  fetchData();
}, []);

  return (
    <div><Layout topic={"Salary Summary"} data={data} /></div>
  )
}

export default Salary