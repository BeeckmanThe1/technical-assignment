import React, {useState} from 'react';
import classnames from 'classnames';

const Accordion = ({label, children}) => {
    const [isActive, setIsActive] = useState(false);
    const toggleActiveness = () => setIsActive(prev => !prev);
    return <>
        <button onClick={toggleActiveness} className={classnames('sib-accordion', {'sib-active-accordion': isActive})}>{label}</button>
        <div className={'sib-accordion-panel'}>
            {children}
        </div>
    </>
};

export default Accordion;
