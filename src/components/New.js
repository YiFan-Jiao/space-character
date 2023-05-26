import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { Helmet, HelmetProvider } from 'react-helmet-async';

function New() {
  return (
    <>
    <HelmetProvider>
        <Helmet>
            <title>Add list</title>
        </Helmet>
    </HelmetProvider>
    <div className='container'>

    </div>
    </>
  )
}

export default New