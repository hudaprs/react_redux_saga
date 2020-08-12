import React from "react"

// Components
import MainLayout from "../layout/MainLayout"

function About() {
  return (
    <MainLayout>
      <div className='container mt-2'>
        <p>Todo application using ReactJS with Redux Saga</p>
        <p>
          The code is uploaded in my GitHub:{" "}
          <a
            href='https://github.com/hudaprs/react_redux_saga'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='fab fa-github'></span>
          </a>
        </p>
      </div>
    </MainLayout>
  )
}

export default About
