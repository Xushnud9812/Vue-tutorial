<template>
    <div class="todo-page">
        <div class="container">
            <h1>Todos</h1>
            <div class="todo">
                <div class="todotop">
                    <button>as</button>
                    <input
                        type="text"
                        placeholder="What needs to be done?"
                        name=""
                        id=""
                        autofocus="autofocus"
                    />
                </div>
                <div class="todolist">
                    <TodoItem />
                </div>
                <div class="todofoot"></div>
            </div>
        </div>
    </div>
</template>

<script>
import TodoItem from "../components/TodoItem.vue";
export default {
    data() {
        return {
            todos: [
                {
                    id: 1,
                    content: "1-dars uy ishi qilish",
                    completed: false,
                },
                {
                    id: 2,
                    content: "Uxlash",
                    completed: false,
                },
            ],
        };
    },
    components: { TodoItem },
};
</script>

<style lang="scss" scoped>
.todo-page {
    h1 {
        text-align: center;
    }
    .todo {
        width: 50%;
        background: #fff;
        margin: 30px auto;
        border-radius: 10px;
        overflow: hidden;

        .todotop {
            display: flex;
            button {
                padding: 10px;
                border: 0;
                background: transparent;
                cursor: pointer;
            }
            input {
                border: 0;
                width: 100%;
                padding: 10px 20px;
                font-size: 20px;
                font-size: 1.5rem;
                outline: 2px solid transparent;
                outline-offset: 2px;
            }
        }
    }
    .todolist {
    }
}
</style>
