import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

function Catalog() {
    const [characters,setCharacters] = useState()

    useEffect(()=>{
    const getJson = async () => {
        try {
            const {data} = await Axios.get(`https://finalspaceapi.com/api/v0/character`);
            //console.log(data)
            setCharacters(data)
        } catch(error) {
            console.log(error)
        }
    }
    getJson();
    },[])
     
  return (
    <>
    <div className='grid container buttons-2'>
        <div></div>
        <div className='grid button-2'>
            <div className='w-btn'>
                Sort lists
            </div>
            <Link to={`/space-character/new`} > 
                <div className='b-btn'>
                    Add list
                </div>
            </Link>
        </div>
    </div>
    <div className='container grid characters-box'>
        { characters?.map(item => (
            <div className='grid' key={item.id}>
                <Link to={`/character/${(item.name)}`} > 
                    <div>
                        <img src={item.img_url}></img>
                        <div className='characters-name'>
                            {item.name}
                        </div>
                    </div>
                </Link>
            </div>
        ))}
    </div>
    
    
    </>
  )
}

export default Catalog