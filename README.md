# Containerized Moch Testing

There are several options you can choose regarding database for integration test in Node.js

Firstly, you can use in memory databases such as `SQLite`.

It's fast and doesn't require long running teardown, however, there are subtle differences in syntax with other SQL databases.

For example, you can't query by time, hour and second in `SQLite` like we can do with `MySQL`.

Thus you'll find certain disparity between test and production environment.

Secondly, you can use a local SQL database of your choice.

It ensures there's no disparity between test and production environment.

But it can be difficult to setup local test environment especially when you're in a big team.

Docker container comes to the rescue! It reduces the time and effort to setup an identical environment among many machines.

Another advantage of using it is you can also run tests in parallel easily.

You can do something like this.

```bash
npm run test:docker -- -e MYSQL_DATABASE=test app
npm run test:docker -- -e MYSQL_DATABASE=test2 app
```

As two commands use seperate database, tests will pass.

## Run locally

```bash
npm test # needs local mysql
npm run test:docker app # needs nothing! :)
OR
npm run test:docker -e ENV_VAR_TO_OVERRIDE=value app
```
