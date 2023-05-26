import React from 'react'
import { useForm } from "react-hook-form";
import { Helmet, HelmetProvider } from 'react-helmet-async';

function New() {
    const { handleSubmit, register, formState: {errors} } = useForm();
    const saveHandle = (data) => {
        console.log(data)
    }
  return ( 
    <>
    <HelmetProvider>
        <Helmet>
            <title>Add list</title>
        </Helmet>
    </HelmetProvider>
    <div className='container form-box grid'>
        <form className='grid' onSubmit={handleSubmit(saveHandle)}>
            <h2 className='form-head'>
                New character
            </h2>
            <div className='input-box grid'>
                <input className='form-input' type='text' placeholder='character id' {...register('id', {
                    required: {
                        value: true,
                        message:'Can not be empty'
                    },
                    pattern: {
                        value: /^\d+$/,
                        message:'Please enter the number'
                    },
                })}></input>
                <p className='tips'>{errors.id && errors.id.message}</p>
            </div>
            <div className='input-box grid'>
                <input className='form-input' type='text' placeholder='character name' {...register('name', {
                    required: {
                        value: true,
                        message:'Can not be empty'
                    },
                })}></input>
                <p className='tips'>{errors.name && errors.name.message}</p>
            </div>
            <div className='input-box grid'>
                <input className='form-input' type='text' placeholder='character species' {...register('species', {
                    required: {
                        value: true,
                        message:'Can not be empty'
                    },
                })}></input>
                <p className='tips'>{errors.species && errors.species.message}</p>
            </div>
            <div className='input-box grid'>
                <input className='form-input' type='text' placeholder='character hair' {...register('hair', {
                    required: {
                        value: true,
                        message:'Can not be empty'
                    },
                })}></input>
                <p className='tips'>{errors.hair && errors.hair.message}</p>
            </div>
            <button className='submit' type='submit'>
                Submit
            </button>
        </form>
    </div>
    </>
  )
}

export default New