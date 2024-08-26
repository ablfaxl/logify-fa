# Logify-fa

Logify-fa is a powerful yet lightweight logging library designed for both Node.js and browser applications. It features color-coded log levels, customizable log messages, and supports Persian (Jalaali) date formatting out of the box. This package makes it easier to maintain consistent and informative logs across different environments.

## Features

- Color-Coded Log Levels: Quickly identify log levels with color-coded messages.
- Persian Date Formatting: Automatically includes Persian (Jalaali) dates in log messages.
- Customizable Log Levels: Control which log levels are shown based on your environment.
- Support for Metadata: Attach additional information to log messages to provide more context.
- Universal Compatibility: Works seamlessly in both Node.js and browser environments.

<hr />

## Installation

You can install logify-fa via npm:

```bash
npm install logify-fa
```

yarn

```bash
yarn add logify-fa
```

pnpm

```bash
pnpm install logify-fa
```

<hr />

### Usage

### Basic Setup

First, import the logger and start logging:

```bash

import { clientLogger, serverLogger } from 'logify-fa';

// Example of client-side logging
clientLogger.info("This is an info message from the client");

// Example of server-side logging
serverLogger.warn("This is a warning message from the server");

```

## Log Levels

**logify-fa** supports four log levels, each with its own color for easy identification:

- debug: Blue
- info: Green
- warn: Yellow
- error: Red

You can control the minimum log level output by setting the level in the logger's constructor:

```bash

import { clientLogger } from 'logify-fa';
// Only logs 'warn' and 'error' messages
const logger = new clientLogger("warn");
logger.debug("This debug message will not be logged");
logger.error("This error message will be logged");
```

## Logging with Metadata

You can attach metadata to your log messages for more detailed logging:

```bash
clientLogger.debug("Debugging info", { userId: 123, operation: "update" });
serverLogger.error("Error occurred", { errorCode: 500, errorMessage: "Internal Server Error" });
```

## Persian Date in Logs

All log messages automatically include the current date in the Persian calendar:

```bash
clientLogger.info("This is an info message");
// Output: [1402-12-11] [INFO]: This is an info message
```

## Configuration

**logify-fa** can be configured to match your specific logging requirements:

- Log Level: Set the minimum log level to display (default is info).
- Metadata: Include additional data with each log entry.
- Persian Date: Automatically adds Persian date formatting to each log entry.

## Webpack Configuration

If you are using logify-fa in a project with Webpack, here’s a basic configuration for bundling the package:

```bash
const path = require("path");

module.exports = {
entry: "./src/index.ts",
output: {
filename: "bundle.js",
path: path.resolve(__dirname, "dist"),
library: "LogifyFa",
libraryTarget: "umd",
globalObject: "this",
},
module: {
rules: [
{
test: /\.ts$/,
use: "ts-loader",
exclude: /node_modules/,
},
],
},
resolve: {
extensions: [".ts", ".js"],
},
mode: "production",
};
```

## Contributing

Contributions are welcome! If you find a bug or have a feature request, please create an issue or submit a pull request on GitHub.




