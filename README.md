# Logify-fa

Logify-fa is a powerful yet lightweight logging library designed for both Node.js and browser applications. It features color-coded log levels, customizable log messages, supports Persian (Jalaali) date formatting, and includes file logging capabilities. This package makes it easier to maintain consistent and informative logs across different environments.

## Features

- **Color-Coded Log Levels**: Quickly identify log levels with color-coded messages.
- **Persian Date Formatting**: Automatically includes Persian (Jalaali) dates in log messages.
- **Customizable Log Levels**: Control which log levels are shown based on your environment.
- **Support for Metadata**: Attach additional information to log messages to provide more context.
- **File Logging**: Logs are automatically saved to a file in the `logger` directory, ensuring that you have persistent log records.
- **Universal Compatibility**: Works seamlessly in both Node.js and browser environments.

## Installation

You can install Logify-fa via npm:

```bash
npm install logify-fa
```

Or using yarn:

```bash
yarn add logify-fa
```
Or using pnpm:

```bash
pnpm install logify-fa
```

## Usage
### Creating Logger Instances

Import the factory function and create logger instances with custom settings:

```ecmascript 6
import createLogger from 'logify-fa';

const logger = createLogger({
    level: 'debug', // Minimum log level to capture
    filename: 'path/to/your/logs.log' // File to save the logs
});

// Example of logging
logger.info("This is an info message with Persian date");
logger.error("This is an error message with Persian date");

```

### Log Levels

#### Logify-fa supports four log levels, each with its own color for easy identification:

- debug: Blue
- info: Green
- warn: Yellow
- error: Red

### Logging with Metadata

Attach metadata to your log messages for more detailed logging:


```ecmascript 6
logger.debug("Debugging info", { userId: 123, operation: "update" });
logger.error("Error occurred", { errorCode: 500, errorMessage: "Internal Server Error" });

```

### File Logging

All log messages are automatically saved to the specified file in the logger directory:

```
[1402-12-11] [INFO]: This is an info message with Persian date
[1402-12-11] [ERROR]: This is an error message with Persian date
```

### Configuration

Customize your logger instances based on your needs:

- Log Level: Set the minimum log level to display.
- File Path: Specify the path to the file where logs should be saved.

### Contributing

Contributions are welcome! If you find a bug or have a feature request, please create an issue or submit a pull request on GitHub.

```dtd
### Key Changes
- **Creating Logger Instances**: Added a section to guide users on how to create their own logger instances using the factory function, which allows custom settings.
- **Configuration**: Expanded the configuration section to cover more on how users can customize their logger instances.
- **Example Code**: Updated the code examples to reflect the usage of the new logger creation approach.

This updated README should help users understand how to effectively use and integrate the `Logify-fa` logging library into their projects with custom configurations.

```