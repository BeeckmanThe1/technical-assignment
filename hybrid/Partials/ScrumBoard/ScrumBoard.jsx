import React from 'react';
import StoryCard from "../StoryCard/StoryCard.jsx";

const STORY_STATUS = {
    IN_BACKLOG: 'inBackLog',
    TO_DO: 'toDo',
    DONE: 'done',
};
const hardCodedStories = [
    {
        title: 'Nulla volutpat aliquam velit',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere era ar ..Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere era ar ..',
        assignedBy: 'OZ',
        backgroundColor: '#3591FB',
        timeIndication: {value: '', cssClass: ''},
        status: STORY_STATUS.IN_BACKLOG,
        assigneeBackground: '#3591FB'
    },
    {
        title: 'Facillisis in pretium nisl aliquet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere era ar ..',
        assignedBy: 'LE',
        timeIndication: {value: 'Two days ago', cssClass: 'sib-danger'},
        status: STORY_STATUS.IN_BACKLOG,

        assigneeBackground: '#915AFF'
    },
    {
        title: 'Etget porttitor lorem',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere era ar ..',
        assignedBy: 'ME',
        timeIndication: {
            value: '',
        },
        status: STORY_STATUS.IN_BACKLOG,

        assigneeBackground: '#75DDFC'
    },
    {
        title: 'Etget porttitor lorem',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere era ar ..',
        assignedBy: 'AM',
        timeIndication: {
            value: 'Today',
            cssClass: 'sib-primary'
        },
        status: STORY_STATUS.TO_DO,

        assigneeBackground: '#915AFF'
    },
    {
        title: 'Consectetur adipiscing elit',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere era ar ..',
        assignedBy: 'OZ',
        timeIndication: {
            value: 'In three days',
            cssClass: 'sib-success'
        },
        status: STORY_STATUS.TO_DO,

        assigneeBackground: '#3591FB'
    },
    {
        title: 'Nulla volutpat aliquam velit',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere era ar ..',
        assignedBy: 'LE',
        timeIndication: {
            value: 'July 21',
            cssClass: 'sib-success'
        },
        status: STORY_STATUS.TO_DO,

        assigneeBackground: '#C335FB'
    },
    {
        title: 'Ac tristique libero volutpat at',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere era ar ..',
        assignedBy: 'LE',
        timeIndication: {
            value: 'A week ago',
            cssClass: 'sib-neutral'
        },
        status: STORY_STATUS.DONE,

        assigneeBackground: '#C335FB'
    },
    {
        title: 'Phasellus iaculis neque',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere era ar ..',
        assignedBy: 'OZ',
        timeIndication: {
            value: 'Last thursday',
            cssClass: 'sib-neutral'
        },
        status: STORY_STATUS.DONE,

        assigneeBackground: '#3591FB'
    },
    {
        title: 'Facilisis in pretium nisl aliquet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere era ar ..',
        assignedBy: 'AM',
        timeIndication: {
            value: '',
        },
        status: STORY_STATUS.DONE,

        assigneeBackground: '#915AFF'
    }
];

const backlogStories = hardCodedStories.filter(story => story?.status === STORY_STATUS.IN_BACKLOG);
const todoStories = hardCodedStories.filter(story => story?.status === STORY_STATUS.TO_DO);
const doneStories = hardCodedStories.filter(story => story?.status === STORY_STATUS.DONE);

const ScrumBoard = () => {
    return <secion className={'sib-scrum-board'}>
        <div className={'sib-tile sib-backlog-tile'}>
            <h2>Backlog</h2>
            {backlogStories.map((story) => <StoryCard key={story?.title} {...story}/>)}
        </div>
        <div className={'sib-tile sib-todo-tile'}>
            <h2>Todo</h2>
            {todoStories.map(story => <StoryCard key={story?.title} {...story}/>)}
        </div>
        <div className={'sib-tile sib-done-tile'}>
            <h2>Done</h2>
            {doneStories.map(story => <StoryCard key={story?.title} {...story}/>)}
        </div>
    </secion>
};

export default ScrumBoard;
