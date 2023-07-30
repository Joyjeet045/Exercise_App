import React from 'react'
import { Stack, Typography, Box} from '@mui/material'
const ExerciseVideos = ({exerciseVideos,name}) => {
  
  return(

    exerciseVideos.length && (

      <Box sx={{marginTop:{lg:'200px',xs:'20px'}}} p='20px'>
        <Typography variant='h3' mb='30px'>
          Watch<span style={{color:'red',textTransform:'capitalize'}}>{name}{` `}</span>exercises videos
        </Typography>
        <Stack justifyContent='flex-start' flexWrap='wrap' alignItems='center' 
        sx={{
          flexDirection:{lg:'row'},
          gap:{lg:'110px',xs:'0px'},
          
        }}>
          {exerciseVideos?.slice(0,6).map((item,index)=>(
            <a key={index} target="_blank" rel= 'noreferrer' href={`https://www.youtube.com/watch?v=${item.video.videoId}`} style={{textDecoration:'none'}}>
              <img src={item.video.thumbnails[0].url}  alt={item.video.title}/>
              <Box >
                <Typography variant='h5' fontWeight='100px' color='#000'>{item.video.title}</Typography>
                <Typography variant='h6' color='#757575' >{item.video.channelName}</Typography></Box></a>
          ))}
        </Stack>
      </Box>
    )
    
  )
  
}

export default ExerciseVideos
