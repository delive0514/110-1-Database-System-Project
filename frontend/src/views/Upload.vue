<template>
    <div class="hello">
        <input type="file" accept=".pdf,.png" onChange="fileUpload">
        <button @click="getResultDataHandler()">Upload</button>
    </div>
</template>

<script>

export default {
    data () {
        return {
            selectedFile:null,
        }
    },
    methods: {
        onFileSelected(event) {
            this.selectedFile = event.target.files[0]
        },
        getResultDataHandler() {
            var r = confirm("Save File?");
            if (r == true) {
                console.log("downloading");
                window.open("yahoo.com.tw", 'Download');
            }
            else {
                console.log("Canceled");
            }
        },
    },
    name: 'app',
};
</script>