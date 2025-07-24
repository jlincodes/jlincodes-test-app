import './App.css';

// import { AnalyticsBrowser } from '@segment/analytics-next';
// import logo from './logo.svg';
import { useEffect } from 'react';

// import { withCMP } from 'osno-segment-integration-test';

function App() {
	
const clearStorageAndCookies = () => {
	// Clear localStorage
	localStorage.clear();
	
	// Clear sessionStorage
	sessionStorage.clear();
	
	// Clear all cookies
	document.cookie.split(";").forEach(function(c) { 
		document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + "; path=/; domain=" + window.location.hostname); 
	});
	
	// Optional: Reload the page to ensure everything is reset
	window.location.reload();
};
	
	useEffect(() => {
		// Load osano.js
		const osnoScript = document.createElement('script');
		osnoScript.src = "https://cmp-ci.osano.com/2skdb1YDRiZvJfB1dPK/0f4ab435-8ca5-4dcc-aeb4-9989561717b3/osano.js";
		osnoScript.async = false;
		document.head.appendChild(osnoScript);

		// Load Osano Segment Wrapper
		const osanoWrapperScript = document.createElement('script');
		// osanoWrapperScript.src = "https://cmp.osano.local/osano.segment.js";
		osanoWrapperScript.src = "https://cmp-ci.osano.com/osano.segment.js";
		osanoWrapperScript.async = false;
		document.head.appendChild(osanoWrapperScript);

		const segmentSnippet = document.createElement('script');
		osanoWrapperScript.addEventListener('load', () => {
			segmentSnippet.innerHTML = `
			  !function(){var i="analytics",analytics=window[i]=window[i]||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","screen","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware","register"];analytics.factory=function(e){return function(){if(window[i].initialized)return window[i][e].apply(window[i],arguments);var n=Array.prototype.slice.call(arguments);if(["track","screen","alias","group","page","identify"].indexOf(e)>-1){var c=document.querySelector("link[rel='canonical']");n.push({__t:"bpc",c:c&&c.getAttribute("href")||void 0,p:location.pathname,u:location.href,s:location.search,t:document.title,r:document.referrer})}n.unshift(e);analytics.push(n);return analytics}};for(var n=0;n<analytics.methods.length;n++){var key=analytics.methods[n];analytics[key]=analytics.factory(key)}analytics.load=function(key,n){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.setAttribute("data-global-segment-analytics-key",i);t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(t,r);analytics._loadOptions=n};analytics._writeKey="qiLaJePDoBnDDhfu0wcdcoql1umVWc9x";;analytics.SNIPPET_VERSION="5.2.0";
				  withCMP(analytics).load("qiLaJePDoBnDDhfu0wcdcoql1umVWc9x");
				  analytics.page();
				  }}();
			`;
			document.head.appendChild(segmentSnippet);
		});
		// const analytics = new AnalyticsBrowser();
		// withCMP(analytics).load({ writeKey: "qiLaJePDoBnDDhfu0wcdcoql1umVWc9x" });
		return () => {
			document.head.removeChild(osnoScript);
			document.head.removeChild(osanoWrapperScript);
			document.head.removeChild(segmentSnippet);
		};
	}, []);

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return (
    <div className="App">
      <header className="App-header">
        <button 
          onClick={clearStorageAndCookies}
          style={{
            background: '#61dafb',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            color: '#282c34'
          }}
        >
          Clear Storage & Cookies
        </button>
      </header>
    </div>
  );
}

// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// import CookieConsent from './pages/cookie-consent';
// import Home from './pages';
// import Navbar from './components/navbar';
// import OsanoSegment from './pages/osano-segment';

// function App() {
// 	return (
// 		<Router>
// 			<Navbar />
// 			<Routes>
// 				<Route path="/" element={<Home />} />
// 				<Route path="/cookie-consent" element={<CookieConsent />} />
// 				<Route path="/osano-segment" element={<OsanoSegment />} />
// 			</Routes>
// 		</Router>
// 	)
// }

export default App;
