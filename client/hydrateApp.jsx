import React from 'react';
import ReactDOM from 'react-dom';
import PageToJsxMapper from "../hybrid/utils/PageToJsxMapper/PageToJsxMapper.jsx";
import WEBSITE_SETUP from "../server/WEBSITE_SETUP";

const hydrateServerRenderedContent = () => {
    try {
        const currentPageId = document.getElementsByTagName('body')[0].id;
        const PAGE = WEBSITE_SETUP.ALL_PAGES.find(PAGE => PAGE.ID === currentPageId);
        const appNode = document.getElementById(PAGE.WRAPPER_ID);
        const jsx = PageToJsxMapper(PAGE);
        ReactDOM.hydrate(jsx, appNode);
        console.log('Succesfully hydrated page:', PAGE.TITLE);
    } catch (err) {
        //TODO
    }
}
hydrateServerRenderedContent();
