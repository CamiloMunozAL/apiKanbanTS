"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_SECRET = exports.DB_PORT = exports.DB_PASSWORD = exports.DB_DATABASE = exports.DB_HOST = exports.DB_USER = exports.PORT = void 0;
exports.PORT = process.env.PORT || 3000;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Para la conexión a la base de datos, necesitamos las siguientes variables de entorno:
exports.DB_USER = process.env.DB_USER;
exports.DB_HOST = process.env.DB_HOST;
exports.DB_DATABASE = process.env.DB_DATABASE;
exports.DB_PASSWORD = process.env.DB_PASSWORD;
exports.DB_PORT = process.env.DB_PORT;
exports.JWT_SECRET = process.env.JWT_SECRET;
