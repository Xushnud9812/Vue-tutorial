<template>
    <div class="todoitems">
        <div class="flex">
            <div class="checkbox">
                <label for="">
                    <input type="checkbox" />
                </label>
            </div>
            <div class="todoContent">
                <span v-if="isEdit == false" @dblclick="isEdit = true">
                    {{ todo.content }}</span
                >
                <input
                    v-if="isEdit"
                    @blur="isEdite = false"
                    type="text"
                    v-model="todo.content"
                />
            </div>
            <button class="delete">x</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "TodoItem",
    data() {
        return {
            isEdit: false,
        };
    },

    props: {
        todo: {
            type: Object,
        },
    },
};
</script>

<style lang="scss" scoped>
.todoitems {
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
