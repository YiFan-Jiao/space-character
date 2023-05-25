import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

function Catalog() {
    const [characters,setCharacters] = useState()

    useEffect(()=>{
    const getJson = async () => {
        try {
            const {data} = await Axios.get(`https://finalspaceapi.com/api/v0/character`);
            console.log(data)
            setCharacters(data)
        } catch(error) {
            console.log(error)
        }
    }
    getJson();
    },[])

     
  return (
    <>
    <div className='container grid characters-box'>
        { characters?.map(item => (
                    <div className='grid' key={item.id}>
                        <a href='' target='_block'> 
                            <div>
                                <img src={item.img_url}></img>
                                <div className='characters-name'>
                                {item.name}
                                </div>
                            </div>
                        </a>
                    </div>
        ))}
    </div>
    
    
    </>
  )
}

export default Catalog