import commander from 'commander';
import { version } from '../version';

const program = commander;

program.version(version());

program.command('init', '初始化项目目录');

program.command('new', '创建一个新项目');

// fake an alias for generate since commander doesn't support
// aliases for sub-commands.
program
  .command('generate', '自动生成项目基础结构')
  .command('g', 'generate 的简写命令')
  .alias('g'); //Fix alias 'redux g' missing for Windows

program.parse(process.argv);

