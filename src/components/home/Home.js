import React from 'react'
import Annoucement from './Annoucement'
import Course from './Courses'
import Duedate from './Duedate'
import CropIcon from '@material-ui/icons/Crop';
const Home =()=>{
    return(
        <div>
        
            <CropIcon/>
            <Course/>
            <Annoucement/>
            <Duedate/>
        </div>
    )
}

export default Home