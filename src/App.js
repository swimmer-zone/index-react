import React from 'react';
import Music from './Layout/Music';
import './App.scss';

const App = () => {
    return (
      	<>
			<div id="beam"></div>
			<img src="/header.png" alt="Header" id="header_image" />

			<ul id="menu">
				<li key="home"><a href="#home">&nbsp;</a></li>
				<li key="agenda"><a href="#agenda">&nbsp;</a></li>
				<li key="bio"><a href="#bio">&nbsp;</a></li>
				<li key="music"><a href="#music">&nbsp;</a></li>
				<li key="contact"><a href="#contact">&nbsp;</a></li>
			</ul>

			<div id="subheader">
				<h1 id="home">Welcome to our site</h1>
				<p>
					IndeX is a band, which consists out of Marc (bass), Daniel (drums / vocals), Patrick (guitar),
					Saba (keyboard), Niels (vocals / guitar) and Stella (violin).
				</p>
				<p>
					The name 'IndeX' exists since the year 2000. We operated three years as a punkband. Our former bassplayer
					stopped and just before the band stopped entirely, it resurrected into reggaemusic. Later on, the keyboard
					player and the singer joined the band.<br />
					Nowadays we make music based on reggae, but with many influences from other styles, such as punk, funk,
					ska, dub and more...
				</p>

				<h2>Listen to our demo's</h2>
				<Music project="index" />

				<h2 id="agenda">See us live</h2>
				<p>Nothing planned at this moment.</p>

				<h3>What you missed</h3>
				<ul class="agenda">
					<li>
						<span>May 15, 2009</span>
						<span><a href="http://www.perron55.nl">Perron55_</a> (Venlo)</span>
					</li>
					<li>
						<span>Oct 22, 2008</span>
						<span><a href="http://www.perron55.nl">Perron55_</a> (Venlo)</span>
						<span>&nbsp;</span>
						<span><a href="http://3voor12.vpro.nl/artikelen/artikel//40748098">Review</a></span>
					</li>
					<li>
						<span>Unknown</span>
						<span><a href="http://www.ojcniks.nl">OJC Niks</a> (Horst)</span>
					</li>
					<li>
						<span>Unknown</span>
						<span><a href="http://www.ojcwalhalla.nl">OJC Walhalla</a> (Sevenum)</span>
					</li>
				</ul>
			</div>
			<div id="cycler">
				<div style={{backgroundPosition: '0 0px'}} class="active"></div>
				<div style={{backgroundPosition: '0 300px'}}></div>
				<div style={{backgroundPosition: '0 600px'}}></div>
				<div style={{backgroundPosition: '0 900px'}}></div>
				<div style={{backgroundPosition: '0 1200px'}}></div>
			</div>
      	</>
    );
}

export default App;