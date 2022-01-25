<template>
    <div class="star-wrapper" :style="cssProps">
        <input type="range" v-model="value" :style="cssProps" min=0 max=10 :disabled="!isMove"/>
        <img src="../assets/star.png" :style="cssProps"/>
        <input @input="setStar" type="range" v-model="value" :style="cssProps" min=0 max=10 :disabled="!isMove"/>
    </div>
</template>

<script>
export default {
    props: [
        'width',
        'height',
        'value',
        'isMove'
    ],
    computed: {
        cssProps() {
            return {
                'width': this.width,
                'height': this.height
            }
        }
    },
    methods: {
        setStar(e) {
            this.$emit('setStar', e.target.value)
        }
    }
    
}
</script>

<style scoped>
.star-wrapper {
    width: val(--width);
    height: val(--height);
}
input[type="range"] {
    overflow: hidden;
    width: val(--width);
    height: val(--heigth);
    -webkit-appearance: none;
    background: transparent;
    background-color: #f2f2f2;
    z-index: 1;
    position: absolute;
    top: 0;
    margin: 0px;
}
input[type="range"]:nth-child(3){
    position: absolute;
    top: 0;
    z-index: 3;
    opacity: 0;
}

input[type="range"]:focus {
	outline: none;
}

input[type="range"]::-webkit-slider-runnable-track {
    width: val(--width);
    height: val(--heigth);
    cursor: pointer;
    border-radius: 5px;
}

input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 0px;
    height: 0px;
    background: black;
    box-shadow: 1px 1px 7px #f3d559;
    cursor: pointer;
    box-shadow: -100vw 0 0 100vw #f3d559;
}
img{
    object-fit: cover;
    height: val(--heigth);
    z-index: 2;
    position: absolute;
    top: 0;
}
</style>