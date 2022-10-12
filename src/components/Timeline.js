import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { UilBag } from '@iconscout/react-unicons';
import { UilBook } from '@iconscout/react-unicons';
import timelineData from "./TimeLineData";


export const Timeline = () => {
    let workIconStyle = {background: "linear-gradient(90.21deg, #aa367c -5.91%, #4a2fbd 111.58%)"}
    let schoolIconStye = {background: "linear-gradient(180.21deg, #aa367c -5.91%, #4a2fbd 111.58%)"}
    return (
        <div>
            <VerticalTimeline>
            {timelineData.map((element) => {
                // check to see if the type of experience is work, used to determine the icon 
                let isWorkIcon = element.icon === "work"; 
                    return (
                        <VerticalTimelineElement 
                            key={element.key} 
                            date={element.date}
                            dateClassName="date"
                            iconStyle={isWorkIcon ? workIconStyle : schoolIconStye} 
                            icon={isWorkIcon ? <UilBag/> : <UilBook/>}
                            >
                        <h3 className="vertical-timeline-element-title">{element.Company}</h3>
                        <h6 className="vertical-timeline-elmenet-subtitle">{element.title}</h6>
                        <h6 className="vertical-timeline-elmenet-subtitle">{element.location}</h6>
                        <ul className="tasking-list">
                            {
                                element.tasking.map((element) => {
                                    return (
                                        <li className="tasking-items">{element}</li>
                                    )
                                })
                            }
                        </ul>
                        </VerticalTimelineElement>
                    )
                })}
            </VerticalTimeline>
        </div>
    )
}