"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const express = require('express');
const app = (0, express_1.default)();
const PORT = 8080;
app.get('/', (req, res) => {
    res.send('Hello Sang');
});
app.listen(PORT, () => {
    console.log(`My app is running on port ${PORT}`);
});
//# sourceMappingURL=app.js.map