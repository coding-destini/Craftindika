import React from 'react'
import './layout.css'

const Layout = ({ topic, data }) => {
  return (
    <div>
      <div className="code-editor">
        <div className="header">
          <span className="title">{topic}</span>
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
        <div className="editor-content">
          <code className="code">
            <p>
              <span className="color-0">.get-data </span> <span>{"{"}</span>
            </p>
            <p className="property">
              <span className="color-2">meanSalary</span>
              <span>:</span>
              <span className="color-1">{data.meanSalary}</span>;
            </p>
            <p className="property">
              <span className="color-2">minSalary</span>
              <span>:</span>
              <span className="color-1">{data.minSalary}</span>;
            </p>
            <p className="property">
              <span className="color-2">maxSalary</span>
              <span>:</span>
              <span className="color-1">{data.maxSalary}</span>;
            </p>
            <span>{"}"}</span>
          </code>
        </div>
      </div>

    </div>
  )
}

export default Layout