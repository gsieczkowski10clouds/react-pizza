import React from 'react';

import styles from './button.module.scss';

Button.defaultProps = {
    theme: 'dark',
};

function Button(props) {

    return (
        <span className={[styles.button, styles[props.theme], props.className].join(' ')}>
            {props.children}
        </span>
    );
}

export default Button;