<template>
    <div class="todoitems">
        <div class="flex">
            <div class="checkbox">
                <label for="">
                    <input
                        type="checkbox"
                        :checked="todo.completed"
                        @change="checkboxChange"
                    />
                </label>
            </div>
            <div class="todoContent" :class="{ line: todo.completed }">
                <input
                    v-if="isEdit"
                    @blur="deactive"
                    ref="input"
                    type="text"
                    v-model="newTodoContent"
                    @keyup.esc="deactive"
                    @keyup.enter="todoContentChange"
                />
                <span v-else @dblclick="activeInput"> {{ todo.content }}</span>
            </div>
            <button @click="deleteTodo" class="delete">x</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "TodoItem",
    data() {
        return {
            isEdit: false,
            newTodoContent: "",
        };
    },

    props: {
        todo: {
            type: Object,
        },
    },
    methods: {
        checkboxChange() {
            this.$emit("checked-change");
        },
        activeInput() {
            this.isEdit = true;
            this.newTodoContent = this.todo.content;
            this.$nextTick(() => {
                this.$refs.input.focus();
            });
        },
        deleteTodo() {
            this.$emit("deleteItemTodo");
        },
        deactive() {
            this.isEdit = false;
        },
        todoContentChange() {
            this.$emit("edit", this.newTodoContent);
            this.isEdit = false;
        },
    },
};
</script>

<style lang="scss" scoped>
.todoitems {
    border-bottom: 1px solid rgb(236, 219, 219);
    .line {
        span {
            text-decoration: line-through;
            color: gray;
        }
    }
    .flex {
        button.delete {
            background: transparent;
            padding: 10px;
            cursor: pointer;
            border: 0;
            display: none;
            font-size: 16px;
        }
        &:hover {
            button.delete {
                display: block;
            }
        }

        .checkbox {
            padding: 10px;
            input {
                width: 25px;
                height: 25px;
            }
        }
        .todoContent {
            width: 100%;
            span,
            input {
                display: block;
                padding: 16px 0;
                border: 0;
                font-size: 16px;
                &:focus {
                    outline: 0;
                }
            }
        }
    }
}
</style>
