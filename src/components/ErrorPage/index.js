import React from 'react';
import { Link } from 'react-router-dom';
import RubberBand from 'react-reveal/RubberBand';
import Bounce from 'react-reveal/Bounce';
import styles from './index.module.scss';

class ErrorPage extends React.PureComponent {
    render() {
        return (
            <div className={styles.parent}>
                <div className={styles.inlineDiv}>
                    <RubberBand><div className={styles.errorCode}>600</div></RubberBand>
                    <Bounce right><div className={styles.errorMessage}>Hic! Sorry for the inconvenience</div></Bounce>
                    <Bounce left><div className={styles.backToHome}><Link to="/">&larr; Home Page</Link></div></Bounce>
                </div>
            </div>
        )
    }
}

export default ErrorPage;