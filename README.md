Logify-fa
Logify-fa is a lightweight logging library for Node.js applications, featuring color-coded log levels and Persian (Jalaali) date formatting. It provides a simple, customizable way to log messages with consistent formatting across your projects.
Features

Color-Coded Log Levels: Easily identify log messages with color-coded output (cyan for info, yellow for warn, red for error, magenta for debug).
Persian Date Formatting: Logs include timestamps in the Persian (Jalaali) calendar format.
Customizable Colors: Enable or disable color output for logs.
TypeScript Support: Fully typed with TypeScript for a better developer experience.
Lightweight and Simple: Minimal dependencies and straightforward API for logging.

Installation
Install Logify-fa via npm:
npm install logify-fa

Or using Yarn:
yarn add logify-fa

Or using pnpm:
pnpm install logify-fa

Usage
Basic Logging
Import and use the default logger instance:
import { logger } from 'logify-fa';

logger.info('This is an info message');
logger.warn('This is a warning message');
logger.error('This is an error message');
logger.debug('This is a debug message');

Example output (with colors enabled):
[1404/03/06 13:28:45] [INFO] This is an info message
[1404/03/06 13:28:45] [WARN] This is a warning message
[1404/03/06 13:28:45] [ERROR] This is an error message
[1404/03/06 13:28:45] [DEBUG] This is a debug message

Custom Logger Instance
Create a custom logger instance with configurable color output:
import { LogifyFa } from 'logify-fa';

const logger = new LogifyFa(false); // Disable colors
logger.info('This is an info message without colors');

Log Levels
Logify-fa supports four log levels:

debug: Magenta (for debugging details)
info: Cyan (for informational messages)
warn: Yellow (for warnings)
error: Red (for errors)

Configuration

Color Output: Pass true (default) or false to the LogifyFa constructor to enable or disable colorized logs.const coloredLogger = new LogifyFa(true); // Colorized logs
const plainLogger = new LogifyFa(false); // Plain text logs

Planned Features
The following features are planned for future releases:

File Logging: Save logs to a file in a specified directory.
Custom Log Levels: Filter logs by minimum log level (e.g., show only error and warn in production).
Metadata Support: Attach additional data (e.g., { userId: 123 }) to log messages.
Factory Function: Introduce a createLogger function for easier configuration.
Browser Support: Extend compatibility to browser environments.

Contributing
Contributions are welcome! To contribute:

Fork the repository on GitHub.
Create a new branch for your changes.
Submit a pull request with a clear description of your changes.

Please report bugs or suggest features by creating an issue on the GitHub repository.
Development
To set up the project locally:

Clone the repository:
git clone https://github.com/ablfaxl/logify-fa.git
cd logify-fa

Install dependencies:
npm install

Build the project:
npm run build

Run tests:
npm test

License
MIT License. See LICENSE for details.
