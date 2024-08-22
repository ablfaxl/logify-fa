"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverLogger = exports.clientLogger = void 0;
var client_logger_1 = require("./client-logger");
Object.defineProperty(exports, "clientLogger", { enumerable: true, get: function () { return __importDefault(client_logger_1).default; } });
var server_logger_1 = require("./server-logger");
Object.defineProperty(exports, "serverLogger", { enumerable: true, get: function () { return __importDefault(server_logger_1).default; } });
