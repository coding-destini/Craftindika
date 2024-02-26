import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Detailed = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/record/detailed-department-summary');
        setData(response.data);
      } catch (error) {
        console.error('Failed to fetch detailed salary summary:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="code-editor">
      <div className="header">
        <span className="title">Detailed Salary</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="icon">
          <g strokeWidth={0} id="SVGRepo_bgCarrier" />
          <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier" />
        </svg>
      </div>
      {data.map((item, index) => (
        <div className="editor-content" key={index}>
          <code className="code">
            <p className="property">
              <span className="color-2">department</span>
              <span>:</span>
              <span className="color-1">{item.department}</span>;
            </p>
            {item.sub_departments.map((subDept, subIndex) => (
              <div key={subIndex}>
                <p className="property">
                  <span className="color-2">sub_department</span>
                  <span>:</span>
                  <span className="color-1">{subDept.sub_department}</span>;
                </p>
                <p className="property">
                  <span className="color-2">meanSalary</span>
                  <span>:</span>
                  <span className="color-1">{subDept.meanSalary}</span>;
                </p>
                <p className="property">
                  <span className="color-2">minSalary</span>
                  <span>:</span>
                  <span className="color-1">{subDept.minSalary}</span>;
                </p>
                <p className="property">
                  <span className="color-2">maxSalary</span>
                  <span>:</span>
                  <span className="color-1">{subDept.maxSalary}</span>;
                </p>
              </div>
            ))}
            <span>{'}'}</span>
          </code>
        </div>
      ))}
    </div>
  );
};

export default Detailed;
