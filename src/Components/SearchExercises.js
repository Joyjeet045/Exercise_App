import React, { useEffect, useState} from 'react'
import { Box, Stack, Button, TextField, Typography } from '@mui/material'
import { exerciseOptions,fetchData } from '../Utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'
function SearchExercises({setExercises,bodyPart,setBodyPart}) {
    const [search,setSearch]=useState('')
    const [bodyParts,setBodyParts]=useState([])
    useEffect(()=>
    {const fetchExerciseData=async()=>{
        const bodyPartsData=await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);
        setBodyParts(['all',...bodyPartsData]);}
    fetchExerciseData()}
    ,[])
    const handleSearch=async ()=>{
        if(search){
            const exerciseData=await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
            // console.log(exerciseData)
            const searchedExercise=exerciseData.filter((e)=>e.name.toLowerCase().includes(search)
            ||e.target.toLowerCase().includes(search)||e.equipment.toLowerCase().includes(search)||e.bodyPart.toLowerCase().includes(search));
            setSearch('');
            setExercises(searchedExercise);
        }
    }
    return (
        <div>
            <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
                <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb='50px' mt='100px' textAlign='center'>
                    Awesome Exercises You<br /> Should Know
                </Typography>
                <Box position="relative" mb="72px">
                    <TextField
                        sx={{
                            input: {
                                // border:'10px dashed black',
                                // margin:'10px',
                                fontWeight: '700',
                            },
                            width: { lg: '800px', xs: '350px' },
                            backgroundColor: '#fff',
                            borderRadius:'40px'
                        }}
                        height='76px' value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} type='text' placeholder='Search Exercises' />
                    <Button variant='contained' className='search-btn' color='error' sx={{ width: { lg: '175px', xs: '80px' }, fontSize: { lg: '16px', xs: '14px' }, height: '56px', position: 'absolute', right: 0 }} onClick={handleSearch}>Search</Button>
                </Box>
                <Box sx={{position:'relative',width:'100%',p:'20px'}}>
                    <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
                </Box>
            </Stack>
        </div>
    )
}

export default SearchExercises
