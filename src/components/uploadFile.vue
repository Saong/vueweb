<template>
    <div>
        <form id="sendFileForm" style="">
            <input id="file" type="file" multiple style=""/>
            <el-button value="发送文件" @click="submitUpload">发送文件</el-button>
        </form>
    </div>
</template>

<script>

    export default {
    	data(){
    		return {
            }
    	},
    	components: {
    		
    	},
    	mounted(){
    		
    	},
    	methods: {
    		
            submitUpload() {
                var inputElement = document.getElementById("file");
                var fileList = inputElement.files;

                for (var i = 0; i < fileList.length; i++) {
                    console.log(fileList[i].name);
                    //发送文件名
                    this.$store.state.ws.send(fileList[i].name);
                    //reader.readAsBinaryString(fileList[i]);
                    //读取文件　　
                    var reader = new FileReader();
                    reader.readAsArrayBuffer(fileList[i]);
                    //reader.readAsText(fileList[i]);
                    //文件读取完毕后该函数响应
                    var ws = this.$store.state.ws
                    reader.onload = function loaded(evt) {
                        var binaryString = evt.target.result;
                        // Handle UTF-16 file dump
                        
                        ws.send(binaryString);
                    }
                }
            }
		}
    }
</script>

<style scoped>
    ::-ms-browse, [type='file'] {
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        -webkit-appearance: none;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        transition: .1s;
        font-weight: 500;
        padding: 9px 15px;
        font-size: 12px;
        border-radius: 3px;
        border: 1px solid #ff4a00;
        background: #ff4a00;
        color: #fff;
    }
    ::-webkit-file-upload-button {
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        -webkit-appearance: none;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        transition: .1s;
        font-weight: 500;
        padding: 9px 15px;
        font-size: 12px;
        border-radius: 3px;
        border: 1px solid #ff4a00;
        background: #ff4a00;
        color: #fff;
    }
</style>
