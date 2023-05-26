import React from 'react'

function Header() {
    return (
      <header>
        <div className='container grid header'>
          <div className='page-title'>
            Space Character
          </div>
          <div className='head-nav grid'>
            <div>
              Home
            </div>
            <div>
              Character
            </div>
            <div>
              Info
            </div>
            <div>
              About us
            </div>
          </div>
          <div className='grid head-icons'>
            <div className='head-icon'>
              <img alt='' src={[require('../imgs/search.png')]}></img>
            </div>
            <div className='head-icon'>
              <img alt='' src={[require('../imgs/buy.png')]}></img>
            </div>
            <div className='head-icon'>
              <img alt='' src={[require('../imgs/contacts.png')]}></img>
            </div>
          </div>
        </div>
      </header>
    )
  }

export default Header