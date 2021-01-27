import React from 'react'
import Annoucement from './Annoucement'
import Course from './Courses'
import Duedate from './Duedate'
const Home =()=>{
    return(
        <div>
            <Course/>
            <Annoucement/>
            <Duedate/>
        </div>
    )
}
export default Home