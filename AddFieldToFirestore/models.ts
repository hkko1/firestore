export interface Todo {
  id: number;
  content: string;
  isFinished: boolean;
}

export interface Meta {
  totalCount: number;
}

export interface ITodo {
  id: number;
  content: string;
  isFinished: boolean;
}

export interface ITodoLists {
  id: number;
  title: string;
  todos: ITodo[];
  nextTodoId: number;
  archive: boolean;
}
