import React from 'react';
import classnames from "classnames";

const TopBar = () => {
    return <section className={'sib-top-bar'}>
        <div className={classnames('sib-logo-partial', 'sib-top-bar-partial')}>
            <img className={'sib-logo-img'} src={'/logo.svg'}/>
        </div>
        <div className={classnames('sib-search-bar', 'sib-top-bar-partial')}>
            <i aria-hidden className="fas fa-search"/><input type={'text'} placeholder={'Search for ..'}/>
        </div>
        <div className={classnames('sib-user-partial', 'sib-top-bar-partial')}>
            <div className={'sib-user-avatar'}><img src={'/avatar.jpeg'}/></div>
            <span className={'sib-user-name'}>Leonetta Lloyd</span>
        </div>
    </section>
};

export default TopBar;
