import React from 'react'
import { useState } from 'react'
import { Box } from '@mui/material'
import Herobanner from '../Components/Herobanner'
import SearchExercises from '../Components/SearchExercises'
import Exercises from '../Components/Exercises'

function Home() {
    const [exercises, setExercises] = useState([])
    const [bodyPart,setBodyPart]=useState('all')
    return (
       
            <Box sx={{width:'100%'}}  >
                <Herobanner />
                <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
                <Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} />
            </Box>
       
    )
}

export default Home
