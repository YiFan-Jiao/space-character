import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async';

function NotFound() {
  return (
    <>
    <HelmetProvider>
        <Helmet>
            <title>404</title>
        </Helmet>
    </HelmetProvider>
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
    </>
  )
}

export default NotFound