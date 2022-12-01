import './App.css';
//var goog = require('goog').goog;
//const OmidSessionClient = goog.module('omid.sessionClient');

function App() {


	//let sessionClient;
	//try {
	//	sessionClient = OmidSessionClient['default'];
	//} catch (e) { /* Can't use OM SDK :( */ return; }
	//if (!sessionClient) { /* Can't use OM SDK :( */ return; }
	//const AdSession = sessionClient.AdSession;
	//const Partner = sessionClient.Partner;
	//const Context = sessionClient.Context;
	//const VerificationScriptResource = sessionClient.VerificationScriptResource;
	//const AdEvents = sessionClient.AdEvents;
	//const MediaEvents = sessionClient.MediaEvents;

	return (
		<div className="App">
			<h1>kdfjns</h1>
			<video width="300" class="omid-element" id="player" controls playsinline autoplay muted>
				<source src="https://omsdk-demo-files.s3.us-west-2.amazonaws.com/ra_1.3/IABTL_VAST_Intro_30s.mp4" type="video/mp4" />
			</video>
		</div>
	);
}

export default App;
