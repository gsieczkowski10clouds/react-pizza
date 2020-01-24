import React from 'react';

import styles from './button.module.scss';

Button.defaultProps = {
    theme: 'dark',
};

function Button({theme, className, children}) {

    return (
        <span className={[styles.button, styles[theme], className].join(' ')}>
            {children}
        </span>
    );
}

export default Button;