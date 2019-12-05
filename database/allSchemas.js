import Realm from 'realm';
export const TODOLIST_SCHEMA = 'TodoList';
export const TODO_SCHEMA = 'Todo';
const uuidv4= () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
// Define your models and their properties
export const TodoSchema = {
    name: TODO_SCHEMA,
    primaryKey: 'id',
    properties: {
        id: 'string',
        name: {
            type:'string',
            indexed:true,
        },
        done: {
            type: 'bool',
            default:false,
        },
    },
};

export const TodoListSchema = {
    name: TODOLIST_SCHEMA,
    primaryKey: 'id',
    properties: {
        id: 'string',
        name: 'string',
        creationDate:'date',
        todos: {
            type: 'list',
            objectType:TODO_SCHEMA,
        },
    },
};

const databasOptions = {
    path: 'todoListApp.realm',
    schema: [TodoListSchema, TodoSchema],
    schemaVersion: 0 // optional
}

// functions for TodoLists
// CREATE
export const createTodoList = ({name}) => {
    return new Promise((resolve,reject) => {
        Realm.open(databasOptions).then(realm => {
            realm.write(() => {
                const todoList = {
                    id: uuidv4(),
                    name,
                    creationDate: new Date(),
                    todos: []
                };
                realm.create(TODOLIST_SCHEMA, todoList);
                resolve(todoList);
            })
        }).catch((error) => {
            reject(error);
        })
    })
}
// UPDATE
export const setTodoList = todoList => {
    return new Promise((resolve,reject) => {
        Realm.open(databasOptions).then(realm => {
            realm.write(() => {
                let todoListToUpdate = realm.objectForPrimaryKey(TODOLIST_SCHEMA, todoList.id);
                todoListToUpdate.name = todoList.name;
                resolve(todoListToUpdate);
            })
        }).catch((error) => {
            reject(error);
        })
    })
}
// DELETE
export const deleteTodoList = todoList => {
    return new Promise((resolve,reject) => {
        Realm.open(databasOptions).then(realm => {
            realm.write(() => {
                const todoListToDelete = realm.objectForPrimaryKey(TODOLIST_SCHEMA, todoList.id);
                realm.delete(todoListToDelete)
                resolve();
            })
        }).catch((error) => {
            reject(error);
        })
    })
}

// DELETE ALL
export const deleteTodoLists = () => {
    return new Promise((resolve,reject) => {
        Realm.open(databasOptions).then(realm => {
            realm.write(() => {
                const allTodoList = realm.objects(TODOLIST_SCHEMA);
                realm.delete(allTodoList)
                resolve();
            })
        }).catch((error) => {
            reject(error);
        })
    })
}

// GET ALL 
export const getTodoLists = todoList => {
    return new Promise((resolve,reject) => {
        Realm.open(databasOptions).then(realm => {
            realm.write(() => {
                const allTodoList = realm.objects(TODOLIST_SCHEMA);
                resolve(allTodoList);
            })
        }).catch((error) => {
            reject(error);
        })
    })
}

export default new Realm(databasOptions);