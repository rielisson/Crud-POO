

export class CrudTaks {
    arrayTaks: string[] | undefined;
    // arrayTaks = ["programar"]
    constructor(task?: string) {
        this.arrayTaks?.push(task!);
    }

    addTask(task: string): string {
        if(typeof task === 'string') {
            this.arrayTaks?.push(task);
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

    editarTask(task: string, index: number) {
        if(!this.arrayTaks) {
            return "Array de tarefas nao existe.";
        }

        if(index >= 0 && index < this.arrayTaks.length) {
            this.arrayTaks[index] = task
            return "task editada com sucesso.";
        } else {
            return "task nao encontrada.";
        }
    }
}

let crud = new CrudTaks()

console.log(crud.addTask("programar"))
// console.log(crud.deleteTask("programar"))

console.log(crud.editarTask("desenvolvedor web", 0));