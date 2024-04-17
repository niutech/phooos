Pure HTML Out-Of-Order Streaming
================================

Out-Of-Order HTML Streaming without JavaScript<sup>\*</sup>, using Declarative Shadow DOM, as described in the [recent article by Chris Haynes](https://lamplightdev.com/blog/2024/01/10/streaming-html-out-of-order-without-javascript/) and [older article by Stoyan Stefanov](https://www.phpied.com/progressive-rendering-via-multiple-flushes/).

This repository contains a server-side demo code in PHP and Node.js.

You may need to [turn off output buffering](https://www.jeffgeerling.com/blog/2016/streaming-php-disabling-output-buffering-php-apache-nginx-and-varnish) in your web server and enable chunked transfer encoding for HTML streaming to work.

<sub><sup>\* except optional tiny Declarative Shadow DOM polyfill for older browsers.</sup></sub>

#### [Try the online demo](https://kodus.pl/)

## License

&copy; 2024 Jerzy Głowacki under MIT License