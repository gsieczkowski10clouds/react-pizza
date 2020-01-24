import React from 'react';

import styles from './title.module.scss';

function Title({title, subtitle}) {

    return (
        <div className={styles.title}>
            {subtitle && <h3>{subtitle}</h3>}
            {title && <h2>{title}</h2>}
        </div>
    );
}

export default Title;