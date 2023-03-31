# Pre-requisites

Please make sure that you have **Node.js** installed to be able to run this project.

# Running the App

### Installing dependencies.

```
npm install
```

### Compiling all the TypeScript files into JavaScript.

```
npm run build
```

**Note**: The result will be in the `dist` folder.

### Run the app

```
node dist the-name-of-the-file
```

For example, to run the first course

```
node dist `1-intro.js`
```

# (Optional) bundled commands with Make

### Pre-requisites

Please make sure that you have **Make** installed.

### Using the bundled commands

This app supports bundled-commands for building and running different courses.

```
make course-name
```

For example, to build and run the first course you can simply run this command

```
make 1
```

The rest of the supported bundled commands are specified in `Makefile`. Happy learning!
