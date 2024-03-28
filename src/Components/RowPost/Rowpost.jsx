import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import {imageUrl,API_Key} from '../../constants/constants'
import YouTube from 'react-youtube'


function RowPost(props) {
    const [row,setRow]=useState([])
    const [urlId,seturlId]=useState('')
    useEffect(()=>{
        axios.get(props.url).then((response)=>{
            setRow(response.data.results)
            
        })
    })
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const handleMovie=(id)=>{
      console.log(id)
      axios.get(`/movie/ ${id}/videos?api_key=${API_Key}&language=en-US`).then(response=>{
        if(response.data.results.length!=0){
            seturlId(response.data.results[0])
        }
        else{
            console.log("not available")
        }
       
      })
      }
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {
                   row.map((movie)=>{
                        return ( <img onClick={()=>handleMovie(movie.id)} className={props.isSmall ? 'Smallposter' :'poster'} alt='poster' src={`${imageUrl+movie.poster_path}`} />)
                       

                    })
                }
                
                
                </div>
                {urlId&&<YouTube videoId={urlId.key}  opts={opts}/>      } 
        </div>
    )
}

export default RowPost