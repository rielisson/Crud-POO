"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudTaks = void 0;
class CrudTaks {
    constructor(task) {
        var _a;
        (_a = this.arrayTaks) === null || _a === void 0 ? void 0 : _a.push(task);
    }
    addTask(task) {
        var _a;
        if (typeof task === 'string') {
            (_a = this.arrayTaks) === null || _a === void 0 ? void 0 : _a.push(task);
            console.log(this.arrayTaks);
            return "Task Adicionada com sucesso";
        }
        else {
            return "Erro ao adicionar a tarefa.";
        }
    }
}
exports.CrudTaks = CrudTaks;
let crud = new CrudTaks();
