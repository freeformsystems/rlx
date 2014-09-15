Table of Contents
=================

* [rlx](#rlx)
  * [Install](#install)
  * [Documentation](#documentation)
  * [Usage](#usage)
  * [Developer](#developer)
    * [Test](#test)
      * [Environment](#environment)
    * [Documentation](#documentation-1)
    * [Manual](#manual)
    * [Readme](#readme)
    * [Cheatsheet](#cheatsheet)

rlx
===

Command line interface for [couchdb](http://couchdb.apache.org) designed for POSIX systems.

Requires [node](http://nodejs.org) and [npm](http://www.npmjs.org).

## Install

```
npm i -g rlx
```

## Documentation

The documentation for the program is available via the `help` command, for those familiar with [couchdb](http://couchdb.apache.org) the [cheatsheet](https://github.com/freeformsystems/rlx/blob/master/doc/cheatsheet.md) is a good place to start.

## Usage

```
Usage: rlx <command>

where <command> is one of:
    admin, user, usr, database, db, security, sec, document,
    doc, bulk, attach, att, replicate, repl, batch, application,
    app, local, lcl, login, in, logout, out, session, sess,
    config, conf, info, stats, tasks, log, restart, uuids, edit,
    tpl, lint, level, lvl, whoami, runconf, rc, system, sys,
    interactive, i, help

rlx --help <cmd>         quick help on <cmd>
rlx help <cmd>           documentation for <cmd>
rlx i                    launch interactive console

rlx@0.1.310 /Users/cyberfunk/git/rlx
```

## Developer

Developed against `couchdb@1.6.0`, behaviour in earlier versions is undefined.

### Test

Tests require a clean [couchdb](http://couchdb.apache.org) installation running in *admin party* mode.

```
npm test
```

If an rc file is present (`~/.rlx/.rlxrc`) the tests may fail as the default configuration is required you should ensure this file does not exist before running tests.

Quick test executes commands in series but bypasses code coverage and test assertions:

```
npm run qt
```

#### Environment

* `rlx_test_server` - Specify the server to run tests against, default is `http://localhost:5984`.

### Documentation

To generate all documentation (manual, readme, cheatsheet etc):

```
npm run docs
```

### Manual

To generate man pages run (requires [manpage](https://github.com/freeformsystems/cli-manpage)):

```
npm run manual
```

Generated man pages are in the [man](https://github.com/freeformsystems/rlx/blob/master/doc/man) directory, to dynamically generate man pages set `NODE_ENV` to `devel` and execute the help command:

```
NODE_ENV=devel ./bin/rlx help db
```

### Readme

To build the readme file from the partial definitions (requires [mdp](https://github.com/freeformsystems/mdp)):

```
npm run readme
```

### Cheatsheet

To generate the cheatsheet (requires [mdp](https://github.com/freeformsystems/mdp)):

```
npm run cheatsheet
```

Generated by [mdp(1)](https://github.com/freeformsystems/mdp).

[couchdb]: http://couchdb.apache.org
[node]: http://nodejs.org
[npm]: http://www.npmjs.org
[man]: https://github.com/freeformsystems/rlx/blob/master/doc/man
[mdp]: https://github.com/freeformsystems/mdp
[manpage]: https://github.com/freeformsystems/cli-manpage
