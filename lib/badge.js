var fs = require('fs');
var request = require('request');

module.exports = function(res, name, version, color) {
 var url;
 name = name || 'moekit package';
 color = color || '32B1FF'; 
 if (version) {
    name = name.replace(/-/g, '--');
    url = 'http://img.shields.io/badge/moekit-v' + version + '-32B1FF.svg?style=flat';
  } else {
    url = 'http://img.shields.io/badge/moekit-unknown-lightgrey.svg?style=flat';
  }
  request(url).pipe(res);
};
