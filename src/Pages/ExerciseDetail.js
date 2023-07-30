import { useEffect } from "react"
import React,{ useState } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import { exerciseOptions,fetchData } from "../Utils/fetchData"
import Detail from '../Components/Detail'
import ExerciseVideos from '../Components/ExerciseVideos'
import SimilarExercises from '../Components/SimilarExercises'
import { youtubeOptions } from "../Utils/fetchData"

const ExerciseDetail=()=> {
  const[exerciseDetail,setExerciseDetail]=useState({});
  const[exerciseVideos,setExerciseVideos]=useState([]);
  const[target,setTarget]=useState([]);
  const[equipment,setEquipment]=useState([]);

  const {id}=useParams();
  useEffect(()=>{
    const fetchExercises=async()=>{
      const exerciseDbUrl='https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl='https://youtube-search-and-download.p.rapidapi.com';
      const ExerciseDetailData=await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions)

      setExerciseDetail(ExerciseDetailData)
      const exerciseVideosData=await fetchData(`${youtubeSearchUrl}/search?query=${ExerciseDetailData.name}`,youtubeOptions)
      setExerciseVideos(exerciseVideosData.contents)
      // console.log(exerciseVideosData)
      const targetMuscleExercisesData=await fetchData(`${exerciseDbUrl}/exercises/target/${ExerciseDetailData.target}`,exerciseOptions)
      console.log(targetMuscleExercisesData)
      setTarget(targetMuscleExercisesData)
      const equipmentExercisesData=await fetchData(`${exerciseDbUrl}/exercises/equipment/${ExerciseDetailData.equipment}`,exerciseOptions)
      console.log(equipmentExercisesData)
      setEquipment(equipmentExercisesData)
    }
    fetchExercises();
    
  },[id])
  
  return (
    
      <Box width="100%">
        <Detail exerciseDetail={exerciseDetail}/>
        <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
        <SimilarExercises target={target} equipment={equipment}/>
      </Box>
   
  )
}

export default ExerciseDetail
