import './App.css';

import logo from './logo.svg';
import { useEffect } from 'react';

function App() {

	useEffect(() => {
		// if (window.location.href.includes('localhost')) {
		// 	document.title = 'Localhost - React App';
		// } else {
		// 	document.title = 'Production - React App';
		// }

		// <script src="https://cmp-ci.osano.com/2skdb1YDRiZvJfB1dPK/0f4ab435-8ca5-4dcc-aeb4-9989561717b3/osano.js"></script>
		const osnoScript = document.createElement('script');
		osnoScript.src = "https://cmp-ci.osano.com/2skdb1YDRiZvJfB1dPK/0f4ab435-8ca5-4dcc-aeb4-9989561717b3/osano.js";
		osnoScript.async = false;
		document.head.appendChild(osnoScript);
		const script = document.createElement('script');
		script.src = "http://127.0.0.1:5500/test.js";
		script.async = true;
		document.head.appendChild(script);
		return () => {
			document.head.removeChild(script);
		};
	}, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
