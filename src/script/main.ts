

export class CrudTaks {
    arrayTaks?: string[] | undefined;

    constructor(task?: string) {
        this.arrayTaks?.push(task!);
    }

    addTask(task: string): string {
        if(typeof task === 'string') {
            this.arrayTaks?.push(task);
            console.log(task);
            return "Task Adicionada com sucesso";
        } else {
            return "Erro ao adicionar a tarefa.";
        }
    }
}

let crud = new CrudTaks()