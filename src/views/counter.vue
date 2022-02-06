<template>
    <div>
        <div class="counter">
            <h1 class="mb-20">Counter</h1>
            <div class="input mb-20">
                <span>Write Count Number:</span>
                <input type="text" v-model.number="countNumber" />
            </div>

            <div class="count mb-20">
                <span>{{ count }}</span>
            </div>

            <div class="count-btn mb-20">
                <button @click="decrement" :disabled="count === 1">
                    Decrement
                </button>
                <button @click="reset">Reset</button>
                <button @click="increment">Increment</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 1,
            countNumber: 1,
        };
    },

    methods: {
        increment() {
            this.count += this.countNumber;
        },
        reset() {
            this.count = 1;
        },
        decrement() {
            this.count = Math.max(this.count - this.countNumber, 1);
        },
    },
};
</script>

<style lang="scss" scoped>
.mb-20 {
    margin-bottom: 20px;
}
.counter {
    width: 40%;
    background: #fff;
    padding: 30px;
    margin: 30px auto;
    border-radius: 30px;
    text-align: center;
    color: #2c3e50;
    .input {
        input {
            width: 130px;
            margin-left: 10px;
            padding: 8px;
            border-radius: 5px;
            border: 1px solid gray;
            font-size: 18px;
        }
    }
    .count {
        font-size: 48px;
    }
    .count-btn {
        button {
            padding: 10px 15px;
            border: 0;
            border-radius: 5px;
            cursor: pointer;
            transition: 0.3s;
            &:nth-child(2) {
                margin: 0 10px;
            }
            &:hover {
                background: #271a1a;
                color: #fff;
            }
        }
    }
}
</style>
