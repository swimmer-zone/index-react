import React from 'react';
import '../assets/components/agenda.scss';

const Agenda = () => {
	return (<section>
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
	</section>);
}

export default Agenda;