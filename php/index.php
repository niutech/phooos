<?php
require __DIR__ . '/vendor/autoload.php';
use Revolt\EventLoop;

@ob_end_flush();
ob_implicit_flush();
header("X-Accel-Buffering: no"); // disable output buffering

$indexFile = "../static/index.html";
$partsFiles = ["../static/part-1.html", "../static/part-2.html", "../static/part-3.html"];
$indexParts = explode("<!-- parts -->", file_get_contents($indexFile));

echo $indexParts[0]; // first part of index.html
foreach($partsFiles as $key => $part) {
    EventLoop::delay(rand(1, 4), function () use ($key, $part, &$partsFiles, $indexParts): void { // random delay 1-4 sec.
        echo file_get_contents($part);
        unset($partsFiles[$key]);
        if (!count($partsFiles)) echo $indexParts[1]; // last part of index.html
    });
}
EventLoop::run();
