import React from 'react';
import { Spin, Icon } from 'antd';
import styles from './index.module.scss';

const LoadingPage = () => {
    return (
        <div className={styles.page}>
            <div className={styles.inlinePage}>
                <Spin spinning size="large" indicator={<Icon type="setting" style={{ fontSize: 45 }} spin theme="twoTone" />} />
            </div>
        </div>
    )
};

export default LoadingPage;