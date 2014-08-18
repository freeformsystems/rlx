var fs = require('fs');
var path = require('path');
var base = path.normalize(path.join(__dirname, '..', '..'));
var target = path.join(base, 'target')
var program = require('../../lib/rlx');
var userdb = require('../../lib/command/user/userdb');

var config = {
  name: 'rlx-test-runner',
  program: program,
  server: {
    default: 'http://localhost:5984'
  },
  database: {
    default: 'mock-database'
  },
  user: {
    name: 'mock-user',
    pass: 'secret',
    id: userdb.prefix + 'mock-user'
  },
  admin: {
    name: 'mock-admin',
    pass: 'secret'
  },
  paths: {
    base: base,
    pkg: path.join(base, 'package.json'),
    target: target,
    fixtures: path.join(base, 'test', 'fixtures'),
  },
  fixtures: {}
}

var files = fs.readdirSync(config.paths.fixtures);
for(var i = 0;i < files.length;i++) {
  contents = '' + fs.readFileSync(path.join(config.paths.fixtures, files[i]));
  config.fixtures[path.basename(files[i], '.json')] =
    {
      name: files[i],
      doc: contents,
      data: JSON.parse(contents)
    }
}

config.file = function(name) {
  return path.join(target, name);
}

config.json = function(file) {
  var contents = config.text(file);
  //console.log('contents: %s', contents);
  return JSON.parse(contents);
}

config.text = function(file) {
  return '' + fs.readFileSync(file);
}

config.require = function(file) {
  return require(file);
}

module.exports = config;
