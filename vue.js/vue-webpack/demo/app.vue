<template>
    <div>
       <v-title title="Vue组件"></v-title>
       <v-button @click="handleClick">点击按钮</v-button>
    </div>    
</template>

<script>
import vTitle from './title.vue';
import vButton from './button.vue';

export default {
    component: {
        vTitle,
        vButton
    },
    methods: {
        handleClick(e) {
            console.log(e);
        }
    }
}
</script>

<style scoped>
    div {
        color: #f60;
        font-size: 24px;
    }
</style>
