import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import timelineData from "./TimeLineData";


export const Timeline = () => {
    return (
        <div>
            <VerticalTimeline>
            {timelineData.map((element) => {
                    return (
                        <VerticalTimelineElement 
                            key={element.key} 
                            date={element.date}
                            dateClassName="date" 
                            >

                        </VerticalTimelineElement>
                    )
                })}
            </VerticalTimeline>
        </div>
    )
}