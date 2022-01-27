<template>
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-contain" :style="cssProps">
                <div class="modal-header">
                    <slot name="header"></slot>
                </div>
                <div class="modal-main">
                    <slot name="main"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['width', 'height'],
    computed: {
        cssProps() {
            return {
                'width': this.width,
                'height': this.height
            }
        }
    }

}
</script>

<style>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    transition: opacity .3s ease;
    display: table;
    box-sizing: border-box;
}
.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}
.modal-contain {
    background-color: white;
    margin: 0px auto;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
}
.modal-header {
    width: 100%;
    height: 56px;
    border-bottom: 1px solid #707070;
    padding: 10px 25px;
    box-sizing: border-box;
}
.modal-main {
    width: 100%;
    height: calc(100% - 56px);
    padding: 25px;
    box-sizing: border-box;
}
</style>