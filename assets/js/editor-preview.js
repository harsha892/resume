/*! minified version file */

function renderPDF(e,t,n){n=n||{scale:5};function o(e){console.log({options:n});var o=e.getViewport(n.scale),a=document.createElement("canvas"),i={canvasContext:a.getContext("2d"),viewport:o};a.height=o.height,a.width=o.width,t.appendChild(a),e.render(i)}PDFJS.disableWorker=!0,PDFJS.getDocument(e).then(function(e){for(var t=1;t<=e.numPages;t++)e.getPage(t).then(o)})}