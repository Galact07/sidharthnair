import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { AiFillLinkedin, AiFillInstagram, AiFillGithub,  AiFillTwitterCircle} from 'react-icons/ai';
import 'react-vertical-timeline-component/style.min.css';
import { BsRocket,BsAward } from 'react-icons/bs';
import Link from 'next/link';

const Experience = () => {
  return (
    <div id='mainBody' className="w-full h-screen  ">
      <div className='max-w-[1240px] w-full h-full m-auto p-2'>
      <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Experience</p>
      <h2 className='py-4'>What I Have Experienced</h2>
      <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#9f7aea', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="April 2023 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<BsRocket />}
  >
    <Link href="https://whereuelevate.com/" target='_blank' rel="noopener noreferrer">
    <h3 className="vertical-timeline-element-title"><b>WHERE YOU ELEVATE</b></h3>
    </Link>
    <h3 className="vertical-timeline-element-title"><b>SDE Intern (Frontend)</b></h3>
    <h4 className="vertical-timeline-element-subtitle">Remote</h4>
    <p>
      Responsive WebPages, User Experience, Visual Design, Material-UI, API Integration
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#9f7aea', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="Future"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<BsAward/>}
  >
    <p className='font-bold'>
      AWAITING FUTURE ENDEAVORS
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
      </div>
    </div>
  )
}

export default Experience;
