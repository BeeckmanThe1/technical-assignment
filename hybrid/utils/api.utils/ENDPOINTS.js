const SPACE_X_BASE = 'https://api.spacexdata.com/v4';

const ENDPOINTS = {
    SPACE_X: {
        LAUNCHES_QUERY: SPACE_X_BASE + '/launches/query',
        STARLINK_SATELLITES: SPACE_X_BASE + '/starlink',
    }
};

export default ENDPOINTS;
