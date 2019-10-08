import React from 'react';
import classNames from 'classnames';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

const inlineStyle = {
    padding: 25,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
};

// const bg = '/'

function Home(props) {
    return (
        <div className={classNames("container", styles.home)}>
            <Parallax style={{ width: "100%" }} strength={15} bgImage={'assets/images/bg3.jpg'}>
                <div style={{ height: 'calc(100vh - 54px)' }}>
                    <div style={inlineStyle}>
                        <div className={styles.superNode}>
                            <span>Snode-Crypto</span>
                        </div>
                        <div className={styles.homeSlogan}>
                            <p>
                                One must acknowledge with cryptography no amount of violence will ever solve a math problem
                            </p>
                        </div>
                        <div className={styles.btnsContainer}>
                            <Link className={classNames(styles.tryLink, "btn-lg btn-outline-warning")} to="/algorithm/aes">Try to Encrypt</Link>
                        </div>
                    </div>       
                </div>
            </Parallax>
        </div>
    );
}

export default Home;