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
  await loadScript(`${baseUrl}pspdfkit.js`);

  const pdf = window.location.href;
  const res = await fetch(pdf);
  const arrayBuffer = await res.arrayBuffer();

  window.PSPDFKit.load({
    document: arrayBuffer,
    container: document.getElementById('hello'),
    baseUrl,
    disableWebAssembly: true,
  });
})();
