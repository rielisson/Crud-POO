"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const main_1 = require("../script/main");
(0, globals_1.describe)('crud testes', () => {
    let crud;
    beforeAll(() => {
        crud = new main_1.CrudTaks();
    });
    (0, globals_1.test)('Dado um tipo de dado o metodo deve retornar se foi adicionado com sucesso.', () => {
        (0, globals_1.expect)(crud.addTask('programar')).toEqual("Task Adicionada com sucesso");
    });
});
