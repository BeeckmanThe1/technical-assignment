import React from 'react';
import classnames from 'classnames';

const StoryCard = ({title, description, assignedBy, timeIndication, assigneeBackground}) => {
    const timeValue = timeIndication?.value;
    return <div className={'sib-story-card'}>
        <strong className={'sib-story-title'}>{title}</strong>
        <p className={'sib-story-description'}>{description}</p>
        <div className={'sib-bottom-bar'}>
            <span className={'sib-assignee'} style={{backgroundColor: assigneeBackground}}>{assignedBy}</span>
            {timeValue &&
            <span className={classnames('sib-time-indication', timeIndication?.cssClass)}>{timeValue}</span>}
        </div>
    </div>
};

export default StoryCard;
