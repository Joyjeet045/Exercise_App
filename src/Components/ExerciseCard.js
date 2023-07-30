import React from 'react'
import { Link } from 'react-router-dom'
import { Box,Button,Stack,Typography } from '@mui/material'
import '../App.css'
const ExerciseCard=({exercise})=> {
  return (
    <Box sx={{ borderTop:'3px solid red'}} className='my-box'>
        <Link className='exercise-card' to={`/exercise/${exercise.id}`}  >
        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy'></img>
        <Stack direction='row'>
            <Button sx={{ml:'21px',color:'#fff',background:'#ffa9a9',fontSize:'14px',borderRadius:'20px' ,textTransform:'captalize'}}>
                {exercise.bodyPart}
            </Button>
            <Button sx={{ml:'21px',color:'#fff',background:'#fcc757',fontSize:'14px',borderRadius:'20px',textTransform:'captalize'}}>
                {exercise.target}
            </Button>
        </Stack>
        <Typography ml="20px" color="#000" mt="11px" fontWeight="bold" fontSize="22px" textTransform="capitalize">{exercise.name}</Typography>
    </Link>
  
    </Box>
  ) 
}

export default ExerciseCard
