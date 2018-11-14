import React from 'react'
import {Link} from 'react-router-dom'
import {HomePageWrapper} from './HomePage.style'

const HomePage = ({history}) => {
  return (
    <HomePageWrapper>
      <div className="main">
        <div className="main__logo-box">
          <img src="/assets/1786.png" alt="Logo" className="main__logo" />
        </div>

        <div className="main__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">amdocs</span>
            <span className="heading-primary--sub">is where magic happens</span>
          </h1>

          <Link to="/users" className="btn btn--white btn--animated">Discover our users</Link>
        </div>
      </div>
    </HomePageWrapper>
  )
}

export default HomePage
