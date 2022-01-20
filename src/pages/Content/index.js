import React, { useEffect } from 'react';
import { render } from 'react-dom';

const isPDF =
  window.location.href.endsWith('.pdf') ||
  (window.location.href.startsWith(
    'https://pspdfkit.zendesk.com/attachments'
  ) &&
    window.location.href.endsWith('.pdf'));

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
  while (document.body.firstChild) {
    document.body.removeChild(document.body.firstChild);
  }

  const div = document.createElement('div');
  document.body.appendChild(div);

  render(<App />, div);
}
