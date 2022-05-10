import React from 'react';
import '../assets/components/cycler.scss';

const Cycler = () => {
	return (
		<div id="cycler">
			<div style={{backgroundPosition: '0 0px'}} class="active"></div>
			<div style={{backgroundPosition: '0 300px'}}></div>
			<div style={{backgroundPosition: '0 600px'}}></div>
			<div style={{backgroundPosition: '0 900px'}}></div>
			<div style={{backgroundPosition: '0 1200px'}}></div>
		</div>
	);
}

export default Cycler;