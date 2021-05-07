import React, {useState, useEffect} from 'react';
import Accordion from "../../../Partials/Accordion/Accordion.jsx";
import apiUtil from "../../../utils/api.utils/api.utils";

const mockedDesiredLaunchpadId = '5e9e4502f5090995de566f86';

const FailedLaunches = () => {
    const [failedLaunches, setFailedLaunches] = useState({});
    useEffect(async () => apiUtil.getFailedLaunches(mockedDesiredLaunchpadId).then(result => setFailedLaunches(result)), []);

    return <>
        <h2>Failed launches</h2>

        <Accordion {...{label: failedLaunches?.launchpad}}>
            <ul>
                {failedLaunches?.all_failures?.map(failure => <div>
                    <strong>{failure?.name}: </strong>
                    <div>
                        <ol>
                            {failure?.failures.map(reason => <li>{reason}</li>)}
                        </ol>
                    </div>
                </div>)}
            </ul>
        </Accordion>
    </>
};

export default FailedLaunches;
