<script setup>
import { ref } from 'vue'
import Upload from '@/assets/upload.png'
import Cancel from '@/assets/cancel.png'
import Navbar from '@/components/Navbar.vue'
import Topbar from '@/components/Topbar.vue'
const form = ref({
    media: {},
});

const imageSrc = ref([]);
const selectedFiles = ref([]);
const handleFileUpload = (e) => {
    console.log("event");
    var files = e.target.files || e.dataTransfer.files;
    if (!files.length) return;

    for (let i = 0; i < files.length; i++) {
        selectedFiles.value.push(files[i]);
        const src = URL.createObjectURL(files[i]);
        imageSrc.value.push(src);
    }
    form.value.media = e.target.files[0];
};

const removeItem = (index) => {
    imageSrc.value.splice(index, 1);
};
</script>

<template>
    <div class="app-display">
        <Topbar></Topbar>
        <Navbar></Navbar>
        <div class="page-container">
            <div class="reg-form">
                <h2>Product Details</h2>
                <form>
                    <div class="fields">
                        <label for="product-name">Product Name</label>
                        <input type='text' name='product-name' placeholder="Type name here"></input>
                        <label for="product-des">Description</label>
                        <textarea name='product-des' rows="4" placeholder="Type description here"></textarea>
                        <label for="category">Category</label>
                        <select name="category">
                            <option value="category1">Category 1</option>
                            <option value="category2">Category 2</option>
                            <option value="category3">Category 3</option>
                            <option value="category4">Category 4</option>
                        </select>

                        <label for="brand-name">Brand Name</label>
                        <input type='text' name='brand-name' placeholder="Type Brand Name"></input>

                        <label for="stock-quantity">Stock Quantity</label>
                        <input type='number' name='stock-quantity' placeholder="120"></input>

                        <div class="price-info">
                            <div class="price-field">
                                <label for="price-reg">Regular Price</label>
                                <input type='text' id="price-reg" name='price-reg' placeholder="Rs. 120"></input>
                            </div>
                            <div class="price-field">
                                <label for="price-sale">Sale Price</label>
                                <input type='text' id="price-sale" name='price-sale ' placeholder="Rs.150"></input>
                            </div>
                        </div>
                    </div>
                    <div class="gallery">
                        <h3 class="container">Product Gallery </h3>
                        <div>
                            <div class="file-container">
                                <div class="img-form">
                                        <input type="file" id="media" accept="image/*" multiple
                                            @change="(event) => handleFileUpload(event)" />
                                        <div>
                                            <section>
                                                <img :src="Upload" />
                                                <p>Upload images here.</p>
                                                <p>Minimum file size 50MB</p>
                                            </section>
                                        </div>
                                </div>
                            </div>
                            <div>
                                <div class="images">
                                    <div v-for="(src, index) in imageSrc" :key="index" class="images-lists">
                                        <div class="image-container">
                                            <img :src="src" id="output" class="image-style" />
                                        </div>
                                        <div class="cross-icon" v-if="imageSrc">
                                            <img :src="Cancel" @click="removeItem(index)" />
                                        </div>

                                        <p style="width: 150px" class="line-clamp-1 text-center">
                                            {{ selectedFiles[index].name }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                         <div class="buttons">
                            <div><button class="save-btn">Save</button></div>
                            <div><button class="cancel-btn">Cancel</button></div>
                        </div>
                    </div>
            </form>
        </div>
    </div>
    </div>
</template>

<style scoped>
form {
    display: flex;
    flex-direction: row;
    overflow: hidden;
    justify-content: space-around;
}

.app-display {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow: hidden;
    background-color:#e7e8e3;
}

.reg-form {
    top: 5%;
    position: absolute;
    display: flex;
    flex-direction: column;
    margin-left: 300px;
    width: 80%;
    padding: 25px;
    background-color: #F9FAFB;
    height: 100vh;
    overflow: hidden;
}

.reg-form h2 {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

}

.fields {
    font-size: 18px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    display: flex;
    flex-direction: column;
    flex: 1.5;
    padding: 5px;
    overflow: hidden;
}


input {
    width: 70%;
    padding: 12px 20px;
    margin: 10px 0;
    border-radius: 5px;
}

textarea {
    margin-top: 10px;
    width: 70%;
}

select {
    width: 50%;
    padding: 12px 20px;
    margin: 8px 0;
}

.gallery {
    flex: 1;
}

.fields label {
    margin-top: 10px;
    font-weight: bold;
}

.fields ::placeholder {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.price-info {
    display: flex;
    flex-direction: row;
}

#price-reg,
#price-sale {
    margin-left: 10px;
    width: 15%;
}


.buttons {
    margin-top: 200px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 120px;
}

.buttons .save-btn,
.buttons .cancel-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
    padding: 8px 14px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    border-radius: 6px;
    border: none;
    width: 150px;
    cursor: pointer;
    font-size: 18px;
}

.buttons .save-btn {
    background: #003F62;
    box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1), inset 0px 0.5px 0.5px rgba(255, 255, 255, 0.5), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.12);
    color: #DFDEDF;
}

.save-btn :focus {
    box-shadow: inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2), 0px 0.5px 1px rgba(0, 0, 0, 0.1), 0px 0px 0px 3.5px rgba(58, 108, 217, 0.5);
    outline: 0;
}


.container {
  margin-bottom: 150px;
  display: flex;
  flex-direction: column;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.file-container {
  position: relative;
  cursor: pointer;
}
.img-form {
  width: 500px !important;
  position: absolute;
  top: 55%;
  left: 0;
  margin-top: -100px;
  width: 100%;
  height: 200px;
  border-radius: 5px;
  border: 1.5px dashed #a0a0a0;
  cursor: pointer;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.img-form div {
    margin-top:10px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
}
.img-form div img{
    width: 60px;
    height: 60px;
}
.img-form input {
  position: absolute;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  outline: none;
  opacity: 0;
}


.images {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.images-lists {
  position: relative;
  margin-top: 120px;
  margin-left: 10px;
  margin-right: 10px;
}

.image-container {
  padding: 4px;
  border: 0.5px solid #a0a0a0;
  border-radius: 10px;
}

.image-style {
  height: 150px;
  width: 150px;
  object-fit: cover;
}

.cross-icon {
  position: absolute;
  top: 0%;
  right: 0;
  cursor: pointer;
}
</style>