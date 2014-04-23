var Package = require('../models/package');
var Project = require('../models/project');

exports.calculate = function(package, action) {
  var dependencies = package.dependencies || [];
  dependencies.forEach(function(d) {
    var name = d.split('@')[0];
    var version = d.split('@')[1];
    var p = new Package({
      name: name,
      version: version
    });

    if (p.md5) {
      p.dependents = p.dependents || [];
      var dep = package.name + '@' + package.version;
      if (action === 'update') {
        if (p.dependents.indexOf(dep) < 0) {
          p.dependents.push(dep);
        }
      } else if (action === 'delete') {
        p.dependents.splice(p.dependents.indexOf(dep), 1);
      }
      p.save();
      var project = new Project({ name: name });
      project.packages[version] = p;
      project.save();
    }
  });
};
