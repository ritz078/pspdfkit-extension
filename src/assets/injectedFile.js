const loadScript = function (url) {
  return new Promise(function (resolve, reject) {
    const script = document.createElement('script');
    script.src = url;

    script.onload = resolve;

    document.head.appendChild(script);
  });
};

(async function () {
  const baseUrl = document.currentScript.src.replace('injectedFile.js', '');
  await loadScript(`${baseUrl}pspdfkit/pspdfkit.js`);

  window.PSPDFKit.load({
    document: window.location.href,
    container: document.getElementById('hello'),
    baseUrl: `${baseUrl}pspdfkit/`,
    disableWebAssembly: true,
  });
})();
