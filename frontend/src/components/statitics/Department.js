import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast';

const Department = () => {
 const [data,setdata] = useState([]);


 useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/record/department-summary');
      setdata(response.data);
      console.log(data)
    } catch (error) {
      toast.error('Failed to fetch department salary summary');
    }
  }
  fetchData();
}, []);

  return (
    <div>
      <div className="code-editor">
        <div className="header">
          <span className="title">Department Salary</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="icon"
          >
            <g strokeWidth={0} id="SVGRepo_bgCarrier" />
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              id="SVGRepo_tracerCarrier"
            />
            
          </svg>
        </div>
       { data.map((item,index)=>
       
      ( 
         <div className="editor-content" key={index}>
         <code className="code">
         <p className="property">
             <span className="color-2">department</span>
             <span>:</span>
             <span className="color-1">{item.department}</span>;
           </p>
           <p className="property">
             <span className="color-2">meanSalary</span>
             <span>:</span>
             <span className="color-1">{item.meanSalary}</span>;
           </p>
           <p className="property">
             <span className="color-2">minSalary</span>
             <span>:</span>
             <span className="color-1">{item.minSalary}</span>;
           </p>
           <p className="property">
             <span className="color-2">maxSalary</span>
             <span>:</span>
             <span className="color-1">{item.maxSalary}</span>;
           </p>
           <span>{"}"}</span>
         </code>
       </div>
       )) }
      </div>
    </div>
  )
}

export default Department