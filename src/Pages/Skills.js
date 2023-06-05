import React from 'react'
import "../Styles/Skills.css"
function Skills() {
  return (
    <div className='skills'>
      <h2>Skills</h2>
      <ol className='list'>
        <li className='item'>
          <h3>Front-End</h3>
          <span>
            HTML, CSS, Javascript, ReactJs
          </span>
        </li>
      </ol>
      <ol className='list'>
        <li className='item'>
          <h3>Back-End</h3>
          <span>
            MySQL, PSQL
          </span>
        </li>
      </ol>
      <ol className='list'>
        <li className='item'>
          <h3>Programming Languages</h3>
          <span>
            C, C++, Java, Python
          </span>
        </li>
      </ol>
      
    </div>
  )
}

export default Skills
