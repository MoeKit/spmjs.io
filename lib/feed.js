var path = require('path');
var Datastore = require('nedb');
var feed = new Datastore({
  filename: path.join(CONFIG.wwwroot, 'db', 'feed.db'),
  autoload: true
});
var _ = require('lodash');
var moment = require('moment');

exports.add = function(data, callback) {
  feed.insert(data, function(err) {
    callback && callback();
  });
};

// stat useful data
exports.stat = function(callback, count) {
  count = count || 10;
  return feed.find({}).limit(100).exec(function(err, results) {
    var res = [];
    var todayPublishes = [];

    for (var i in results) {
      var item = results[i];
      res.push(item);
      if (moment(item.time).diff(moment(), 'days') < 1) {
        todayPublishes.push(item);
      }
    }
    res = res.sort(function(a, b) {
      return b.time - a.time;
    });
    res = _.uniq(res, function(feed) {
      return feed.name;
    });
    callback && callback(res.splice(0, count), todayPublishes.length);
  });
};

exports.getAll = function(callback) {
  return feed.find({}).exec(function(err, results) {
    callback && callback(results.reverse());
  })
};
