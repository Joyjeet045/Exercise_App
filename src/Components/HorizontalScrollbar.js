import React,{useContext} from 'react'
import { Box,Button } from '@mui/material'
import BodyPart from './BodyPart'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

import RightArrowIcon from "../assets/icons/right-arrow.png"
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import ExerciseCard from './ExerciseCard';
const LeftArrow=()=>{
    const {isFirstItemVisible,scrollPrev}=useContext(VisibilityContext);
    return(
        <Button disabled={isFirstItemVisible} onClick={()=>scrollPrev()}>
            <img src={LeftArrowIcon} alt='left-arrow'/>
        </Button>
    )
}
const RightArrow=()=>{
    const {isLastItemVisible,scrollNext}=useContext(VisibilityContext);
    return(
        <Button disabled={isLastItemVisible} onClick={()=>scrollNext()}>
            <img src={RightArrowIcon} alt='right-arrow'/>
        </Button>
    )
}
function HorizontalScrollbar({data,bodyPart,setBodyPart,isBodyParts}) {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}  className="track-horizontal" >
      {data.map((item)=>
      <Box key={item.id || item} ItemId={item.id || item} title={item.id || item} m='0 40px'>
        {isBodyParts?<BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>:<ExerciseCard exercise={item}/>}
      </Box>)}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar
