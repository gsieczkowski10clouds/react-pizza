import React from 'react';

import styles from './button.module.scss';

Button.defaultProps = {
    theme: 'dark',
};

function Button({theme, className, children}) {

    return (
        <span className={[styles.buttonHolder, styles[theme], className].join(' ')}>
            <span className={styles.button}>
                {children}
            </span>
        </span>
    );
}

export default Button;