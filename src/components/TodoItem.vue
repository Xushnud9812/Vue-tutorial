<template>
    <div class="todoitems">
        <div class="flex">
            <div class="checkbox">
                <label for="">
                    <input type="radio" />
                </label>
            </div>
            <div class="todoContent">
                <span>Todos...</span>
            </div>
            <button></button>
        </div>
    </div>
</template>

<script>
export default {
    name: "TodoItem",
};
</script>

<style lang="scss" scoped>
.todoitems {
    .flex {
        .todoContent {
            width: 100%;
        }
    }
}
</style>
