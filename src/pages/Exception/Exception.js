import React from 'react';
import { Link } from 'react-router-dom';
import RubberBand from 'react-reveal/RubberBand';
import Bounce from 'react-reveal/Bounce';
import PropTypes from 'prop-types';
import styles from './Exception.module.scss';

class Exception extends React.PureComponent {
    render() {
        let type = this.props.match.params.type;
        const mapTypeToMessage = {
            '404': 'Page not found',
            '500': 'Internal Server Error',
            '401': 'Unauthorized',
        };
        type = mapTypeToMessage[type] ? type : '404';
        const message = mapTypeToMessage[type];
        return (
            <div className={styles.parent}>
                <div className={styles.inlineDiv}>
                    <RubberBand><div className={styles.errorCode}>{type}</div></RubberBand>
                    <Bounce right><div className={styles.errorMessage}>Oops! {message}</div></Bounce>
                    <Bounce left><div className={styles.backToHome}><Link to="/">&larr; Home Page</Link></div></Bounce>
                </div>
            </div>
        )
    }
}

export default Exception;