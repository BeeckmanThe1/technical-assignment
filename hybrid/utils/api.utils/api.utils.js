import axios from "axios";
import ENDPOINTS from "./ENDPOINTS";

const reduceLaunches = apiResponse => {
    const rawLaunches = apiResponse?.data?.docs || [];

    const reducedLaunches = rawLaunches.reduce((reduced, current) => ({
        ...reduced,
        all_failures: [...reduced?.all_failures, {
            name: current?.name,
            failures: current?.failures.map(failure => failure.reason)
        }]
    }), {launchpad: rawLaunches[0]?.launchpad?.name, all_failures: []});

    return reducedLaunches;
};
const reduceStarlinks = apiResponse => {

    const rawStarlinks = apiResponse?.data || [];

    const reducedStarlinksInfoObject = rawStarlinks.reduce((reduced, current) => {
        const monthMapper = {
            '01': 'january',
            '02': 'february',
            '03': 'march',
            '04': 'april',
            '05': 'may',
            '06': 'june',
            '07': 'july',
            '08': 'augustus',
            '09': 'september',
            '10': 'october',
            '11': 'november',
            '12': 'december'
        }

        const launchDateString = current?.spaceTrack?.LAUNCH_DATE;
        const launchDateParts = launchDateString && launchDateString.split('-');
        const year = launchDateParts[0];
        const month = monthMapper[launchDateParts[1]];
        const day = launchDateParts[2];

        return ({
            ...reduced,
            [year]: {
                ...reduced?.[year] || {},
                [month]: {
                    ...reduced?.[year]?.[month] || {},
                    [day]: [...reduced?.[year]?.[month]?.[day] || [], current],
                    get days() {
                        return Object.keys(this).filter(cur => cur !== 'days');
                    }
                },
                get months() {
                    return Object.keys(this).filter(cur => cur !== 'months');
                }
            },
            get years() {
                return Object.keys(this).filter(cur => cur !== 'years');
            }
        });
    }, {})

    return reducedStarlinksInfoObject;
};
const fetchFailedLaunchesFromGivenLaunchpad = async launchpadId => {
    const query = {
        "success": false,
        "launchpad": launchpadId
    };
    const options = {
        "populate": [
            {
                "path": "launchpad",
                "select": {
                    "name": 1
                }
            }
        ],
        "sort": {
            "date_unix": "desc"
        }
    };

    const apiResponse = await axios.post(ENDPOINTS.SPACE_X.LAUNCHES_QUERY, {query, options});
    return apiResponse;
}
const fetchAllStarlinks = async () => {
    const apiResponse = await axios.get(ENDPOINTS.SPACE_X.STARLINK_SATELLITES);
    return apiResponse;
}

const getFailedLaunches = async launchpadId => {
    try {
        const apiResponse = await fetchFailedLaunchesFromGivenLaunchpad(launchpadId);
        const status = apiResponse?.status;

        if (status === 200) {
            return reduceLaunches(apiResponse);
        }
    } catch (err) {
        //TODO: log error somewhere somewhere
    }
};
const getstarlinks = async () => {
    try {
        const apiResponse = await fetchAllStarlinks();
        const status = apiResponse?.status;

        if (status === 200) {
            return reduceStarlinks(apiResponse);
        }
    } catch (err) {
        //TODO: log error somewhere somewhere
    }
};

export default {getFailedLaunches, getstarlinks};
