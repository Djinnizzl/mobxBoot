import React, { Component } from 'react';
import { Provider, observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

/* STORES */
import MainStore from '../stores/index.jsx';

/* HELPER */
import Loader from './helper/Loader/Loader.jsx'

/* COMPONENTS */

@observer
class Main extends Component {

	MainStore = new MainStore();

	render() {

		const MainStore = this.MainStore;

		return (
			<Provider MainStore={MainStore}>
				<div>
					<DevTools />
					<div className="test">
						<Loader loadingFinishedWhen={false} />
					</div>
				</div>
			</Provider>
		);
	}
}

export default Main;