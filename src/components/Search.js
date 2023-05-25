import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

function Search() {
    const githubToken = process.env.REACT_APP_GITHUB_TOKEN;
    //console.log(githubToken)
    const [user,setUser] = useState('');
    const [poster,setPoster] = useState(true);
    const getUserName = (event) => {
            setUser(event.target.value);
    }
    /* const options = {headers: { Authorization: `Bearer ${githubToken}`}}; */
        useEffect(()=>{
            const getJson = async () => {
            try {
                if(user !== '') {
                const {data} = await Axios.get(`https://api.github.com/users/${user}`/* ,options */);
            }
                setPoster(true);
            } catch(error) {
                setPoster(false);
            }
        }
         getJson();
        },[user])
    
    const notfound = <div>Please enter a correct username</div>
    const moviePoster = <div></div>

    const linkDiv = <Link to={`/user/${(user)}`} className='btn grid'> 
                        <input 
                            className='sub-btn'
                            type='submit' 
                            value='SEARCH'
                        />
                    </Link>

    const divNoLink = <Link to={`/space-character`} className='btn grid'> 
                        <input 
                            className='sub-btn'
                            type='submit' 
                            value='SEARCH'
                        />
                    </Link>
  return (
    <main>
        <div className='container'>
            <div className='search-bar grid'>
                <h1>Github Finder</h1>
                <div className='search-eare grid' >
                    <input 
                        className='input-search' 
                        placeholder='Profile' 
                        value={user} 
                        onChange={getUserName}
                    />
                    {poster?linkDiv:divNoLink}
                </div>
                {poster?moviePoster:notfound}
                
            </div>
        </div>
    </main>
  )
}

export default Search