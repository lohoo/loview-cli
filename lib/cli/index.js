'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _version = require('../version');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var program = _commander2.default;

program.version((0, _version.version)());

program.command('init', 'initialize a .reduxrc file for project details');

program.command('new', 'creates a new redux project');

// fake an alias for generate since commander doesn't support
// aliases for sub-commands.
program.command('generate', 'generates new code from blueprints').command('g', 'alias for generate').alias('g'); //Fix alias 'redux g' missing for Windows

program.parse(process.argv);