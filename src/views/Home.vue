<template>
    <div class="home">
        <div class="counter">
            <ul>
                <li v-for="(item, index) in persons" :key="index">
                    {{ item }} <button @click="minus(index)">-</button>
                </li>
            </ul>

            <br />
            <input type="text" v-model="name" />

            <!-- <button>-</button> -->
            <button @click="Add">+</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            name: "",
            persons: ["Anvar", "Rustam", "Shokir", "Jahongir"],
        };
    },
    methods: {
        minus(index) {
            this.persons.splice(index, 1);
        },
        reset() {
            this.count = 0;
        },
        Add() {
            this.persons.push(this.name);
            this.name = "";
        },
    },
};
</script>

<style lang="scss"></style>
