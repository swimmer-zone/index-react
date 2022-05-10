import React from 'react';
import '../assets/components/menu.scss';

const Menu = () => {
	return (<>
		<div id="beam"></div>
		<ul id="menu">
			<li key="home"><a href="#home">&nbsp;</a></li>
			<li key="music"><a href="#music">&nbsp;</a></li>
			<li key="agenda"><a href="#agenda">&nbsp;</a></li>
			<li key="bio"><a href="#bio">&nbsp;</a></li>
			<li key="contact"><a href="#contact">&nbsp;</a></li>
		</ul>
	</>);
}

export default Menu;