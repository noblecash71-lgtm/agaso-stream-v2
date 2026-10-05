#!/bin/sh
set -eu
rm -rf dist
mkdir -p dist
if [ -f Index.html ]; then cp Index.html dist/index.html; else cp index.html dist/index.html; fi
cp index.html dist/404.html
cp Style.css dist/Style.css
cp Script.js dist/Script.js
cp manus-routes.json dist/manus-routes.json
if [ -f Icon.png ]; then cp Icon.png dist/Icon.png; fi
if [ -d posters ]; then cp -R posters dist/posters; fi
if [ -d images ]; then cp -R images dist/images; fi
