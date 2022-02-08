<template>
    <ModalBase :width="'400px'" :height="'330px'">
        <template v-slot:header>
            <div class="menu-add-header">
                <div></div>
                <div>메뉴 추가하기</div>
                <a @click.prevent="SET_IS_ADD_MENU(false)">&times;</a>
            </div>
        </template>
        <template v-slot:main>
            <form @submit.prevent="console.log('asd')">
                <div class="menu-contain">
                    <label for="images" class="menu-image" :style="`background-image : url(${imageUrl})`"/>
                    <input ref="images" id="images" name="images" @change="uploadImg" multiple accept="image/*" type="file" class="image-input"/>
                    <select v-model="restaurant" class="menu-column">
                        <option value="res" hidden>음식점</option>
                        <option value=1>퀴즈노스</option>
                        <option value=2>롯데리아</option>
                        <option value=4>국수나무</option>
                        <option value=3>정환</option>
                    </select>
                    <input v-model="menuName" placeholder="메뉴 이름" class="menu-column"/>
                    <input v-model="cost" placeholder="가격" class="menu-column"/>
                </div>
                <div class="menu-btn">
                    <button class="menu-upload-btn" @click.prevent="sendMenu">Upload</button>
                </div>
            </form>
        </template>
    </ModalBase>
</template>

<script>
import ModalBase from './ModalBase.vue'
import { mapMutations } from 'vuex'
import axios from 'axios'

export default {
    components: {
        ModalBase
    },
    data() {
        return {
            restaurant: 'res',
            menuName: '',
            cost: '',
            imageUrl: 'https://via.placeholder.com/160',
            imageData: ''
        }
    },
    methods: {
        ...mapMutations([
            'SET_IS_ADD_MENU'
        ]),
        sendMenu() {
            if(this.restaurant === 'res' || this.menuName === '' || this.cost === '') { alert('빈칸을 모두 채워주세요') }
            else if(this.imageUrl === 'https://via.placeholder.com/160') { alert('이미지를 넣어주세요') }
            else {
                this.$foodAdd({
                    restaurantId : parseInt(this.restaurant), 
                    name: this.menuName,
                    imageUrl: this.imageUrl,
                    cost: parseInt(this.cost)
                })
                this.SET_IS_ADD_MENU(false)
            }
        },
        uploadImg(e) {
            this.imageData=e.target.files[0]

            const formData = new FormData();
            formData.append('images', this.imageData, this.imageData.name);

            axios({
                url: 'http://211.38.86.92:8080/images',
                method: 'post',
                data: formData,
                headers : {
                    "Content-Type": "multipart/form-data"
                }
            }).then((res) => {
                this.imageUrl = res.data.image_url
            }).catch((err) => {
                console.log(err)
            })

        }

    }
}
</script>

<style scoped>
.menu-add-header {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
}
.menu-add-header a{
    font-size: 30px;
    cursor: pointer;
}
.menu-contain{
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 170px 170px;
    grid-template-rows: repeat(3, 3 / 170);
}
.menu-image {
    width: 160px;
    background-size: 160px;
    object-fit: contain;
    margin: 0;
    background-color: #F5F5F5;
    grid-row-start: 1;
    grid-row-end: 4;
    cursor: pointer;
}
.menu-column {
    width: 160px;
    height: 40px;
    padding: 8px 16px;
    font-size: 14px;
    border-radius: 4px;
    box-sizing: border-box;
    border: none;
    background-color: #F5F5F5;
    outline: none;
}
.menu-btn{
    width: 100%;
    margin-top: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.menu-upload-btn {
    width: 80px;
    height: 36px;
    background-color: #F5F5F5;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
.image-input {
    display: none;
}
</style>
