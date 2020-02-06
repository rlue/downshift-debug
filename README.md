To run this bug demo:

```sh
$ git clone https://github.com/rlue/downshift-debug
$ cd downshift-debug

$ yarn policies set-version berry  # below yarn v1.22
$ yarn set version berry           # for yarn v1.22+

$ yarn install
$ yarn run start
```

This will load the faulty version of this demo app at <http://localhost:8080>.
To observe the bug in question, do the following:

1. Enter the name of a US state;
2. highlight it using the mouse or arrow keys;
3. click or press `<Enter>` (so far, so good);
4. enter the name of another US state;
5. highlight it using the mouse or arrow keys;
6. press `<Escape>`.

This will cause the application to crash.

To see how using string values in the item list will avoid the bug,
check out branch `workaround` and repeat the process.
