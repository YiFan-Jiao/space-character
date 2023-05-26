import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Catalog() {
    const [characters,setCharacters] = useState([])
    const [option, setOption] = useState('id');
    let filteredItems = [];

    useEffect(()=>{
    const getJson = async () => {
        try {
            const {data} = await Axios.get(`https://finalspaceapi.com/api/v0/character`);
            //console.log(data)
            //setCharacters(data.sort((a, b) => a.id - b.id))
            setCharacters(data)
        } catch(error) {
            console.log(error)
        }
    }
    getJson();
    },[])

    if(option === 'id') {
         filteredItems = characters.sort((a, b) => a.id - b.id)
    } else {
         filteredItems = characters.sort((a, b) => a.name.localeCompare(b.name));
    }
  return (
    <>
    <HelmetProvider>
        <Helmet>
            <title>space character</title>
        </Helmet>
    </HelmetProvider>
    <div className='grid container buttons-2'>
        <div></div>
        <div className='grid button-2'>
            <select className='w-btn' value={option} onChange={(e) => setOption(e.target.value)}>
                <option value="id">Sort by ID</option>
                <option value="name">Sort by Name</option>
            </select>
            <Link to={`/new`} > 
                <div className='b-btn'>
                    Add list
                </div>
            </Link>
        </div>
    </div>
    <div className='container grid characters-box'>
        
        { filteredItems?.map(item => (
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