import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
/* npm install react-router-dom */
import Axios from 'axios'
/* npm i axios */
import { Helmet, HelmetProvider } from 'react-helmet-async';
/* npm i react-helmet */
/* react-helmet-async */


function Detail() {
    const [index,setIndex] = useState()
    const [status,setStatus] = useState()
    const [species,setSpecies] = useState()
    const [gender,setGender] = useState()
    const [hair,setHair] = useState()
    const [alias,setAlias] = useState()
    const [abilities,setAbilitiess] = useState()

    const [characters,setCharacters] = useState()
    const [img,setImg] = useState()
    const {charactername} = useParams();
    //console.log(charactername)

    useEffect(()=>{
        const getJson = async () => {
            try {
                const {data} = await Axios.get(`https://finalspaceapi.com/api/v0/character`);
                //console.log(data)
                data.map((item, index) => {
                    if(item.name === charactername) {
                        setIndex(index)
                        setCharacters(item.name)
                        setImg(item.img_url)
                        setStatus(item.status)
                        setSpecies(item.species)
                        setGender(item.gender)
                        setHair(item.hair)
                        setAlias(item.alias.join(", "))
                        setAbilitiess(item.abilities.join(", "))
                    }
                })
            } catch(error) {
                console.log(error)
            }
        }
        getJson();
    },[])

  return (
    <>
    <HelmetProvider>
        <Helmet>
            <title>{characters}</title>
        </Helmet>
    </HelmetProvider>

    <div className='container grid detail'>
            <div className='grid detail-box'>
                <div>
                    <img src={img}></img>
                </div>
                <div className='grid detail-info'>
                    <h2>
                        {characters}
                    </h2>
                    <div className='grid info3'>
                        <div>
                            status:{status}
                        </div>
                        <div>
                            species:{species}
                        </div>
                        <div>
                            gender:{gender}
                        </div>
                        <div>
                            hair:{hair}
                        </div>
                    </div>
                    <div>
                        alias: {alias}
                    </div>
                    <div>
                     abilities: {abilities}
                    </div>
                </div>
            </div>
    </div>
    </>
  )
}

export default Detail