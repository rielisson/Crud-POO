import {describe, expect, test} from '@jest/globals';
import { CrudTaks } from '../script/main';
describe('crud testes', () => {
    let crud: CrudTaks;
    beforeAll(() => {
         crud = new CrudTaks();
    })
    test('Dado um tipo de dado o metodo deve retornar se foi adicionado com sucesso.', () => {
        expect(crud.addTask('programar')).toEqual("Task Adicionada com sucesso");
    })

    test('Dado um um tipo de dado o metodo deve remover e retorna se foi concluido com sucesso.', () => {
        expect(crud.deleteTask('programar')).toEqual("Task removida com sucesso.");
    })

    test('Dado um tipo de dado o metodo deve editar o novo valor pelo antigo e retorna sucesso.', () => {
        expect(crud.editarTask("desenvolvedor", 0)).toEqual("task editada com sucesso.");
    })

})
