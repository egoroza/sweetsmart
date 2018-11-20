import React from 'react'
import Star from '../img/star.png';

const Home = () => (
  <div className="section">
    <div className="container">
    BOOP
      <h1>Hi there, welcome to <strong>sweetsmart: version cookie</strong>!</h1>
      <p>We're excited to have you here. We are currently in Beta, and we're super excited that you're one of the
         first humans to review our user interface platform. <strong>sweetsmart</strong> is a social media website whose
         aim is to keep accessibility design in mind. Our goal is to create more satisfying user experiences through ethical
         web design and increasing awareness of accessibility in technology. This is the first of 7 interfaces that you are going
         to review throughout this session. Any questions, please let us know!
         Below are some notes to discuss before we get started... </p>
         <br />
      <p>
        <center>
        <table className="table">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={Star} style={{width: '15px'}}/>
              </td>
              <td>
                Indicates a favorite person, i.e. someone you are close to.
              </td>
            </tr>
          </tbody>
        </table>
        </center>
      </p>
      <br />
      <p>Once you are finished reviewing this interface, click the two buttons below to review this interface, 
         and then move on to the next one. You can spend as much or as little time on each interface as you wish.</p>
      <br />
      <center>
      <p><a className="button is-primary"><strong>Step 1: review</strong></a></p>
      <br />
      <p><a className="button is-primary" href="/coffee"><strong>Step 2: version coffee</strong></a></p>
      </center>
    </div>
  </div>  
)
export default Home