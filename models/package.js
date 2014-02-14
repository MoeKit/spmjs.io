var path = require('path');
var fs = require('fs-extra');
var _ = require('lodash');
var moment = require('moment');

function Package(package) {
  if (!package.name || !package.version) {
    return;
  }
  this.name = package.name;
  this.version = package.version;

  var pkg;
  var datafile = this.datafile();
  if (fs.existsSync(datafile)) {
    pkg = fs.readJsonSync(datafile);
  } else {
    pkg = {};
  }
  _.merge(this, pkg);
  _.merge(this, package);
  return this;
}

Package.prototype = {
  datafile: function() {
    return path.join('data', 'repository', this.name, this.version, 'index.json');
  },

  save: function() {
    var now = moment().format('YYYY-MM-DDTHH:mm:ssZ');
    this['created_at'] = this['created_at'] || now;
    this['updated_at'] = now;
    fs.outputJsonSync(this.datafile(), this);
    return this;
  }
};


module.exports = Package;
