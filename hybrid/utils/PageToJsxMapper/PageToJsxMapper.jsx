import React from 'react';
import Pages from '../../pages/index';
import WEBSITE_SETUP from "../../../server/WEBSITE_SETUP";
import {renderToString} from "react-dom/server";

const {PAGES} = WEBSITE_SETUP;

export default (PAGE, returnAsHtml) => {
    let jsx;
    switch (PAGE.ID) {
        case PAGES.ASSIGNMENT_1.ID:
            jsx = <Pages.FirstAssignment/>;
            break;
        case PAGES.ASSIGNMENT_2.ID:
            jsx = <Pages.SecondAssignment/>;
            break;
        default:
            return null;
            break;
    }
    return returnAsHtml ? renderToString(jsx) : jsx
}
