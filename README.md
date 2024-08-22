# Logify

Logify is a lightweight logger package for Node.js and browser applications, supporting color-coded log levels and Persian date formatting.

## Installation

```bash
npm install logify
```

Usage
Basic Example

```bash
import logger from 'logify';

// Log messages
logger.info("This is an info message");
logger.warn("This is a warning message");
logger.error("This is an error message");
```

Log Levels
Logify supports the following log levels:

debug
info
warn
error

Custom Log Messages

```bash
logger.debug("Debugging info", { userId: 123, operation: "update" });
```
