import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='container grid page404'>
        <div>
            404
        </div>
        <Link to="/space-character">
            <div className='button'>
                    Return to home
            </div>
        </Link>
    </div>
  )
}

export default NotFound