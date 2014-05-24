var fs = require('fs');
var request = require('request');

module.exports = function(res, name, version, name, color) {
 var url;
 name = name || 'spm package';
 color = color || '32B1FF'; 
 if (version) {
    name = name.replace(/-/g, '--');
    url = 'http://img.shields.io/badge/' + name + '-' + version + '-' + color + '.svg';
  } else {
    url = 'http://img.shields.io/badge/spm-unknown-lightgrey.svg';
  }
  request(url).pipe(res);
};
