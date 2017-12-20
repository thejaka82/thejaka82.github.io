/****************************************\
**  Copyright © 2017 Thejaka Maldeniya  **
\****************************************/
'use strict';
(function (d, i, s) {
	var b = d.body, l = d.getElementById(i)
	if (l)
		b.removeChild(l)
	l = d.createElement('script')
	l.id = i
	l.src = s
	b.appendChild(l)
}(document, 'favelets-hop', 'https://haxx.byethost17.com/favelets/hop.js'))