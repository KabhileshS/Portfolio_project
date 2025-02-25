import React from 'react'
import '../css/Home.css'
const Home = () => {
  return (
    <div className='achievement'>
        <h2>Kabhilesh S</h2>
        <h3 className="text-lg text-gray-400">Greetings!! , I'm a currently a Computer Science Engineering Student pursuing my degree in St.Joseph's Institute of Technology</h3>
        <h3>I have a passion for coding and problem-solving.
        I am proficient with C, Python and Java programming and flexible to learn new things. And have some experience with working in React</h3>
      <div className="achievement">
      <h2>ACHIEVEMENT</h2>
      <div className="achievement__container">
        <ul className="achievement__list">
          <li>
            <strong>Altruix 2023 Symposium</strong> 
            <p>Prize: 1st <br />
Place: SRM Valliammai Engineering College<br />
Description: Won first prize in a symposium event conducted by ADS Department</p>
          </li>
          <li>
            <strong>Solved Problems:</strong>
            <ul>
              <li>LeetCode: 150+</li>
              <li>SkillRack: 1000+</li>
            </ul>
          </li>
          <li>
            <strong>Internship in Rajasri systems Private Limited</strong> 
            <p>Learned to develop a ecommerce website after learning html,css,javascript,Learning API development, Front-end and Back-end integration, Database management
            Tools : HTML, CSS, JavaScript, C#, Visual Studio, MySQL DB
            </p>
          </li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Home
