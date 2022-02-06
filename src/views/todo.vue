<template>
    <div class="todo-page">
        <div class="container">
            <h1>Todos</h1>
            <div class="todo">
                <div class="todotop">
                    <span class="check-all">
                        <input type="checkbox" @change="checkboxAll" />
                    </span>
                    <input
                        type="text"
                        placeholder="What needs to be done?"
                        name=""
                        id=""
                        autofocus="autofocus"
                        v-model="newTodoContent"
                        @keyup.enter="addTodo"
                    />
                </div>
                <div class="todolist">
                    <TodoItem
                        v-for="(todo, index) in todos"
                        :key="index"
                        :todo="todo"
                        @checked-change="checkboxChange(todo.id)"
                        @deleteItemTodo="deleteItem(todo.id)"
                        @edit="
                            (newTodoContent) =>
                                todoEdit(todo.id, newTodoContent)
                        "
                    />
                </div>
                <div class="todofoot flex">
                    <div class="active-count">{{ activeCountText }}</div>
                    <div class="filter-btn">
                        <button
                            v-for="(item, index) in filter"
                            @click="filteredTodos(item, index)"
                            :key="index"
                            :class="{ active: filterIndex == index + 1 }"
                        >
                            {{ item }}
                        </button>
                    </div>
                    <div class="clear">
                        <button @click="clear">Clear completed</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TodoItem from "../components/TodoItem.vue";
export default {
    name: "todo",
    data() {
        return {
            filterIndex: 1,
            filter: ["All", "Active", "Completed"],
            newTodoContent: "",
            todos: [
                {
                    id: 1,
                    content: "1-dars uy ishi qilish",
                    completed: false,
                },
                {
                    id: 2,
                    content: "Uxlash",
                    completed: true,
                },
                {
                    id: 3,
                    content: "Kitob o'qish",
                    completed: true,
                },
            ],
        };
    },
    components: { TodoItem },
    computed: {
        activeCountText() {
            const count = this.todos.filter((todo) => !todo.completed).length;
            if (count === 1) {
                return "1 item left";
            }
            return `${count} items left`;
        },
        test12() {
            this.todos.forEach((todo) => {
                if (todo.completed == true) {
                    this.test = true;
                    return this.test;
                } else {
                    this.test = false;
                    return this.test;
                }
            });
        },
    },

    methods: {
        checkboxChange(todoId) {
            this.todos = this.todos.map((todo) => {
                if (todo.id === todoId) {
                    return { ...todo, completed: !todo.completed };
                } else {
                    return todo;
                }
            });
        },
        checkboxAll() {
            // this.todos.includes((todo) => {
            //     if (todo.completed == false) {
            //         todo.completed = true;
            //     } else {
            //         todo.completed = false;
            //     }
            // });
            this.todos = this.todos.map((todo) => {
                return { ...todo, completed: true };
            });
        },
        filteredTodos(item, index) {
            this.filterIndex = index + 1;
            if (item === "All") {
                return this.todos;
            }
            return this.todos.filter((todo) =>
                item === "Completed" ? todo.completed : !todo.completed
            );
        },

        addTodo() {
            this.todos.push({
                id: this.todos.length + 1,
                content: this.newTodoContent,
                completed: false,
            });
            this.newTodoContent = "";
        },
        clear() {
            this.todos = this.todos.filter((todo) => !todo.completed);
        },
        deleteItem(todoId) {
            this.todos.forEach((todo) => {
                if (todo.id === todoId) {
                    console.log(todoId);
                    this.todos.splice(todoId - 1, 1);
                }
            });
        },
        todoEdit(todoid, newTodoContent) {
            this.todos = this.todos.map((todo) => {
                if (todo.id == todoid) {
                    return { ...todo, content: newTodoContent };
                } else {
                    return todo;
                }
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.check-all {
    input {
        width: 25px;
        height: 25px;
    }
}
.todo-page {
    margin-top: 30px;
    h1 {
        font-size: 48px;
        color: rgb(83, 78, 78);
        text-align: center;
        font-weight: normal;
    }
    .todo {
        width: 50%;
        background: #fff;
        margin: 30px auto;
        border-radius: 10px;
        overflow: hidden;
        // padding: 10px;
        .todofoot {
            padding: 10px 20px;
            .active-count {
                flex: 1 1 0%;
            }
            .filter-btn {
                button {
                    background: transparent;
                    padding: 5px 10px;
                    border-radius: 5px;
                    border: 1px solid transparent;
                    cursor: pointer;
                    &:nth-child(2) {
                        margin: 0 5px;
                    }
                    &:hover {
                        border: 1px solid lightgray;
                    }
                    &.active {
                        border: 1px solid lightgray;
                    }
                }
            }
            .clear {
                flex: 1 1 0%;
                display: flex;
                justify-content: flex-end;
                button {
                    cursor: pointer;
                    border: 0;
                    background: transparent;
                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }
        .todolist {
            border-bottom: 1px solid rgb(243, 240, 240);
        }
        .todotop {
            padding: 0 10px;
            display: flex;
            align-items: center;
            border-bottom: 1px solid lightgray;
            button {
                padding: 10px;
                border: 0;
                background: transparent;
                cursor: pointer;
            }
            input {
                border: 0;
                flex: 1;
                padding: 10px 20px;
                font-size: 20px;
                font-size: 1.5rem;
                outline: 2px solid transparent;
                outline-offset: 2px;
            }
        }
    }
}
</style>
