import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { AiFillLinkedin, AiFillInstagram, AiFillGithub,  AiFillTwitterCircle} from 'react-icons/ai';
import 'react-vertical-timeline-component/style.min.css';
import { BsRocket,BsAward } from 'react-icons/bs';
import Link from 'next/link';

const Experience = () => {
  return (
    <div id='mainBody' className="w-full max-h-screen ">
      <div className='max-w-[1240px] w-full h-full m-auto p-2'>
      <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Experience</p>
      <h2 className='py-4'>What I Have Experienced</h2>
      <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#9f7aea', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="April 2023 - July 2023"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<BsRocket />}
  >
    <Link href="https://whereuelevate.com/" target='_blank' rel="noopener noreferrer">
    <h3 className="vertical-timeline-element-title"><b>WHERE YOU ELEVATE</b></h3>
    </Link>
    <h3 className="vertical-timeline-element-title"><b>SDE Intern </b></h3>
    <h4 className="vertical-timeline-element-subtitle">Remote</h4>
    <p>
    <p>
    ● Significantly improved the user experience and visual appeal of company web pages by implementing
Material-UI, resulting in a {'>'}=30% increase in user engagement.
    </p>
<p>● Successfully integrated APIs, enabling seamless communication between systems and a {'>'}=15% increase in
overall system efficiency.</p>
<p>● Applied SEO techniques to optimize web pages, resulting in a {'>'}=25% increase in organic search traffic, a 20% improvement in search engine rankings.</p>
● Conducted informative sessions for new employees on API integration, helping them understand its importance
and implementation in website development.
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
