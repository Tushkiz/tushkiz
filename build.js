'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('             Tushar Sonawane'),
  handle: chalk.white('tushkiz'),
  work: chalk.white('Software Engineer at Vuclip'),
  twitter: chalk.gray('https://twitter.com/tushkiz'),
  github: chalk.gray('https://github.com/tushkiz'),
  linkedin: chalk.gray('https://linkedin.com/in/tushkiz'),
  web: chalk.cyan('https://tushkiz.github.io'),
  npx: chalk.red('npx') + ' ' + chalk.white('tushkiz'),
  labelWork: chalk.white.bold('      Work:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.white.bold('      Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading +
                newline + newline +
                working + newline +
                twittering + newline +
                githubing + newline +
                linkedining + newline +
                webing + newline + newline +
                carding

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
