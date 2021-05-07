import React, {useState, useEffect} from 'react';
import Accordion from "../../../Partials/Accordion/Accordion.jsx";
import apiUtil from "../../../utils/api.utils/api.utils";

const Starlinks = () => {
    const [starlinks, setStarlinks] = useState();
    useEffect(async () => {
        const inMemoryStarlinks = JSON.parse(sessionStorage.getItem('starlinks'));
        if (!inMemoryStarlinks) {
            apiUtil.getstarlinks().then(result => {
                sessionStorage.setItem('starlinks', JSON.stringify(result));
                setStarlinks(result);
            });
        } else {
            const stringifiedStoredStarlinks = sessionStorage.getItem('starlinks');
            const storedStarlink = stringifiedStoredStarlinks && JSON.parse(stringifiedStoredStarlinks);
            setStarlinks(storedStarlink);
        }
    }, []);

    return <>
        <h2>Starlinks</h2>
        {
            starlinks?.years?.map(year => {
                const months = starlinks[year]?.months;
                return <Accordion {...{label: year}}>
                    {months?.map(month => {
                        const days = starlinks?.[year]?.[month]?.days;
                        return <Accordion {...{label: month}}>
                            {days?.map(day => {
                                const starlinksForGivenDay = starlinks?.[year]?.[month]?.[day];
                                return <Accordion label={`${day} ${month}`}>
                                    <ul>
                                        {starlinksForGivenDay?.map(starlinkForGivenDay =>
                                            <li>{starlinkForGivenDay?.spaceTrack?.OBJECT_NAME}</li>)}
                                    </ul>
                                </Accordion>
                            })}
                        </Accordion>
                    })}
                </Accordion>;
            })
        }
    </>
};

export default Starlinks;
