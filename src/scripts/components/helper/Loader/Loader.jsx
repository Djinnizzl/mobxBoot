import React from 'react';

import styles from './styles.scss';



export default ({ loadingFinishedWhen, children }) => loadingFinishedWhen ? (
	children ? children : null
) : (
	<div className={styles.loadingIcon}>
		<div className={styles.loadingIcon__bar}></div>
		<div className={styles.loadingIcon__bar}></div>
		<div className={styles.loadingIcon__bar}></div>
		<div style={{clear:'both'}}></div>
	</div>
);