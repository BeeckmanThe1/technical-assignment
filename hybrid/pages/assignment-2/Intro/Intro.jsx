import React from 'react';

const Intro = () => {
    return <>
        <h1>Second Assignment</h1>

        <p>The starlinks are saved in React component state AND in sessionStorage. Go devtools > application >
            sessionStorage to see. If you check the XHR-calls in the network tab, you can see that the first
            ajax-call
            (to fetch the failed
            launches) is
            done everytime you refresh the page.
            The ajax-call to fetch the starlinks is only done on the FIRST pageload of each session as it gets
            stored in
            memory.</p>
        <p>I did a very quick and dirty way of visualizing the data, since it was not in the scope of this
            assignment.</p>
    </>
};

export default Intro;
