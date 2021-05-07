import {renderToString} from "react-dom/server";
import FirstAssignment from "../../hybrid/pages/assignment-1/FirstAssignment.jsx";
import React from 'react';
import {getPageHtml} from "../htmlTemplating/templateProvider";
import {WRAPPER_ID as WRAPPER_ID_1} from '../../hybrid/pages/assignment-1/FirstAssignment.jsx';
import SecondAssignment, {WRAPPER_ID as WRAPPER_ID_2} from '../../hybrid/pages/assignment-2/SecondAssignment.jsx';
import WEBSITE_SETUP from "../WEBSITE_SETUP";
import PageToJsxMapper from "../../hybrid/utils/PageToJsxMapper/PageToJsxMapper";

const init = async router => {

    //DEV landingspage
    router.get('/', (req, res) => res.send('<h1>Assignments</h1><ul><li><a href="/assigment-1">Assignment 1</a></li><li><a href="/assigment-2">Assignment 2</a></li></ul>'))

    //set up routing of all pages
    WEBSITE_SETUP.ALL_PAGES.map(PAGE => router.get(PAGE.SLUG, (req, res) => res.send(getPageHtml(PAGE))));

};

export default {init};
