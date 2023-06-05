import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from '@mui/icons-material/School';
function Education() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement className='vertical-timeline-element-education' 
        date='2004-2014' iconStyle={{ background: "#3e497a", color:"#fff" }}
        icon={<SchoolIcon />}>
          <h3>Holy cross convent school, Ernakulam, Kerala</h3>
          <p>high School (LKG-8th standard)</p>

        </VerticalTimelineElement>


        <VerticalTimelineElement className='vertical-timeline-element-education' 
        date='2014-2016' iconStyle={{ background: "#3e497a", color:"#fff" }}
        icon={<SchoolIcon />}>
          <h3>H.M.T Educational society high school, Ernakulam, Kerala</h3>
          <p>high School (9th and 10th standard)</p>

        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element-education' 
        date='2016-2018' iconStyle={{ background: "#3e497a", color:"#fff" }}
        icon={<SchoolIcon />}>
          <h3>Govt. Boys Hss, Aluva, Ernakulam, Kerala</h3>
          <p>Higher Secondary Education</p>

        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element-education' 
        date='2018-2021' iconStyle={{ background: "#3e497a", color:"#fff" }}
        icon={<SchoolIcon />}>
          <h3>Govt. Polytechnic College, Kalamassery, Ernakulam, Kerala</h3>
          <p>Diploma</p>

        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element-education' 
        date='2021-present' iconStyle={{ background: "#3e497a", color:"#fff" }}
        icon={<SchoolIcon />}>
          <h3>College of Engineering, Trivandrum, Kerala</h3>
          <p>B.Tech in computer science and Engineering</p>

        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default Education
