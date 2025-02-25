import React from 'react'
import '../css/Home.css'
const Skills = () => {
  return (
    <div className="achievement__container">
    <ul className="achievement__list">
      <li>
        <strong>Coding Languages</strong>
        <ul>
          <li>C</li>
          <li>Pyhton </li>
          <li>Java</li>
          <li>MySQL</li>
        </ul>
      </li>
      <li>
        <strong>Web Technologies</strong>
        <ul>
          <li>HTML</li>
          <li>CSS </li>
          <li>Javascript</li>
          <li>React Framework</li>
          <li>MongoDB</li>
        </ul>
      </li>
      <li>
        <strong>Good in</strong>
        <ul>
          <li>Data Structures</li>
          <li>Relational Databases </li>
        </ul>
      </li>
      <li>
        <strong>Languages</strong>
        <ul>
        <li>English:Proficient</li>
          <li>Tamil:Proficient</li>
          <li>Japanese: Beginner</li>
        </ul>
      </li>
    </ul>
    </div>
  )
}

export default Skills
