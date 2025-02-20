

export class CrudTaks {
    arrayTaks: string[] | undefined;

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

    deleteTask(task: string) {
        if(!this.arrayTaks) {
            return "Array de tarefas nao existe.";
        }

        const index = this.arrayTaks.indexOf(task);
        if(index !== -1) {
            this.arrayTaks.splice(index, 1);
            return "A task foi removida com sucesso"
        } else {
            return "Taks nao encontrada"
        }
    }
}

let crud = new CrudTaks()

console.log(crud.deleteTask("programar"))