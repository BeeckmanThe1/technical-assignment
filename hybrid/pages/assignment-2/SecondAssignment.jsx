import React from 'react';
import {ENDPOINTS} from "../../utils/api.utils/ENDPOINTS";
import Intro from "./Intro/Intro.jsx";
import FailedLaunches from "./FailedLaunches/FailedLaunches.jsx";
import Starlinks from "./Starlinks/Starlinks.jsx";

const SecondAssignment = () => {

    return <section>
        <Intro/>
        <FailedLaunches/>
        <Starlinks/>
    </section>
};

export default SecondAssignment;
