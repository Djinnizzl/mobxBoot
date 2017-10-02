import React from 'react';

export default ({ loadingFinishedWhen, children }) => loadingFinishedWhen ? (
	children ? children : null
) : (
	<div className="loadingIcon">
		<div className="loadingIcon__bar"></div>
		<div className="loadingIcon__bar"></div>
		<div className="loadingIcon__bar"></div>
	</div>
);