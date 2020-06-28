#!/usr/bin/env node
const figlet = require("figlet");
const chalk = require("chalk");
const inquirer = require("inquirer");
const questions = require("./questions");
const git = require("simple-git/promise")();
const repoList = require("./repo-list");
const Spinner = require("clui").Spinner;
const delDir = require("./delDir");

const log = console.log;
const status = new Spinner("正在下载中......");

figlet("Hello CJY", async (err, data) => {
  if (err) {
    log(chalk.red("出错啦！下面是出错信息："));
    log(err);
    return;
  }
  log(chalk.blue(data));
  const answers = await inquirer.prompt(questions);
  status.start();
  const witch = answers.type[0].substr(0, 1);
  await git.clone(repoList[witch], `./${answers.name}`);
  delDir(`./${answers.name}/.git`);
  status.stop();
});
