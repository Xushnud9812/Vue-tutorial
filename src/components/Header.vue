<template>
    <div>
        <header>
            <div class="container">
                <div class="flex">
                    <ul>
                        <li>
                            <router-link to="/counter">Counter</router-link>
                        </li>
                        <li><router-link to="/todo">Todo</router-link></li>
                        <li>
                            <router-link to="/tictac">TicTacToe</router-link>
                        </li>
                        <li><router-link to="/quizz">Quizz</router-link></li>
                    </ul>

                    <h5 class="name">Xushnudbek Ayitboyev</h5>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
    border-bottom: 1px solid lightgray;
    padding: 10px 0;
    background: #fff;

    ul {
        list-style: none;
        display: flex;
        align-items: center;
        li {
            a {
                display: block;
                text-decoration: none;
                color: #000;
                padding: 10px 16px;
            }
        }
    }
    .name {
        font-size: 16px;
        font-weight: 500;
        color: #a3a3a3;
    }
}
</style>
