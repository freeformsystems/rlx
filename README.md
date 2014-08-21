Table of Contents
=================

* [rlx](#rlx)
  * [Install](#install)
  * [Usage](#usage)
  * [Developer](#developer)
    * [Test](#test)
      * [Environment](#environment)
    * [Manual](#manual)
    * [Readme](#readme)

rlx
===

Command line interface for [couchdb](http://couchdb.apache.org) designed for POSIX systems.

Requires [node](http://nodejs.org) and [npm](http://www.npmjs.org).

## Install

```
npm i -g rlx
```

## Usage

```
Command line interface for couchdb.

Usage: rlx <command> [-h] [--color|--no-color] [--force] [--trace]
           [--debug] [--info] [--warn] [--error] [-h|--help]
           [--version] [-s|--server=<url>] [-d|--database=<name>]
           [-u|--username=<name>] [-p|--password=<pass>]
           [-o|--output=<file>] [-f|--file=<file>] [-j|--json=<json>]
           [-t|--template=<name>] [--id=<id>] [--rev=<rev>]
           [--ddoc=<name>] <args>

Options:

Command should be one of: info, stats, uuids, database, tasks, log, config,
restart, session, admin, user, login, logout, list, security, edit, template,
lint, document, level, help.

Commands:
 info               Print server information.
 stats              Print server statistics.
 uuids              Print list of uuids.
 database, db       Manage databases.
 tasks              Print active tasks.
 log                Print server log.
 config, conf       Manage server configuration.
 restart            Restart a server.
 session, sess      Cookie-based session authentication.
 admin              Manage server administrators.
 user, usr          Manage server users.
 login              Login to a server.
 logout             Logout of current session.
 list, ls           List databases.
 security, sec      Get or set security document.
 edit               Edit a document.
 template, tpl      Manage template files.
 lint               Lint javascript and json.
 document, doc      Manage documents.
 level, lvl         Get or set the server log level.
 help               Show help for commands.

Arguments:
     --id=[id]      Document identifier.
     --[no]-color   Enable or disable terminal colors.
 -d, --database=[name]
                    Database name.
 -u, --username=[name]
                    Authentication username.
 -p, --password=[pass]
                    Authentication password.
 -o, --output=[file]
                    Write response to output file.
 -f, --file=[file]  Read JSON input from file.
 -j, --json=[json]  JSON string literal (overrides --file).
 -t, --template=[name]
                    Name of a template file.
     --force        Force file overwrite.
 -s, --server=[url] Database server.
     --rev=[rev]    Document revision.
     --ddoc=[name]  Design document id.
     --trace        Set log level to trace.
     --debug        Set log level to debug.
     --info         Set log level to info.
     --warn         Set log level to warn.
     --error        Set log level to error.
 -h, --help         Display this help and exit.
     --version      Output version information and exit.

Report bugs to https://github.com/freeformsystems/rlx/issues.
```

## Developer

Developed against `couchdb@1.6.0`, behaviour in earlier versions is undefined.

### Test

Tests require a clean [couchdb](http://couchdb.apache.org) installation running in *admin party* mode.

```
npm test
```

Quick test executes commands in series but bypasses code coverage and test assertions:

```
npm run qt
```

#### Environment

* `rlx_test_server` - Specify the server to run tests against, default is `http://localhost:5984`.

### Manual

To generate man pages run:

```
npm run manual
```

Generated man pages are in the [man](https://github.com/freeformsystems/rlx/blob/master/doc/man) directory.

To dynamically generate man pages set `NODE_ENV` to `devel` and execute a help command:

```
NODE_ENV=devel ./bin/rlx help db
```

### Readme

To build the readme file from the partial definitions (requires [mdp](https://github.com/freeformsystems/mdp)):

```
npm run readme
```

Generated by [mdp(1)](https://github.com/freeformsystems/mdp).

[couchdb]: http://couchdb.apache.org
[node]: http://nodejs.org
[npm]: http://www.npmjs.org
[man]: https://github.com/freeformsystems/rlx/blob/master/doc/man
[mdp]: https://github.com/freeformsystems/mdp
