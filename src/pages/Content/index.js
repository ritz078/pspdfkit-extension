import React, { useEffect } from 'react';
import { render } from 'react-dom';

const isPDF = window.location.href.endsWith('.pdf');

const App = () => {
  useEffect(() => {
    var s = document.createElement('script');
    s.src = chrome.runtime.getURL('injectedFile.js');
    (document.head || document.documentElement).appendChild(s);
    s.onload = function () {
      s.remove();
    };
  }, []);

  return (
    <div
      id="hello"
      style={{
        height: '100vh',
        width: '100vw',
      }}
    />
  );
};

if (isPDF) {
  render(<App />, document.getElementsByTagName('body')[0]);
}
