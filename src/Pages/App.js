import React from 'react';
import { Agenda, Cycler, Header, Home, Menu, Music } from '../Components';
import '../assets/app.scss';

const App = () => {
    return (
      	<>
      		<Header />
			<Menu />

			<Home />
			<Music />
			<Agenda />
			
			<Cycler />
      	</>
    );
}

export default App;