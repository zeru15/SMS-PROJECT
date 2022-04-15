import { Button } from '@material-ui/core'
import React from 'react'
import '../Css/Home.css'
import background from '../Images/sms-background.jpeg'
function Home() {
  return (
    <div className='home-body' style= {{backgroundImage: `url(${background})`,
     width: '100%', height: '100vh',
     backgroundRepeat: 'no-repeat', 
     backgroundSize: 'cover'}}>
        <div className="home-navbar">
            <h2 className= 'sms-logo'>School Management System</h2>
            <ul className= 'nav-links'>
              <li><a href= '#'>About</a></li>
              <li><a href= '#'>Contact Us</a></li>
            </ul>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className='body-text'>
        <h1>Your Ideal <br/>
        School Manager</h1>
        </div>
        <Button size= 'large' variant= 'contained' style= {{marginLeft : '120px', backgroundColor: 'white'}}>Register</Button>
        <Button size= 'large' variant= 'contained' style= {{marginLeft : '120px', backgroundColor: 'white'}}>Sign In</Button>
    </div>
  )
}

export default Home