<template>
  <div class="fillcontain">
    <head-top></head-top>
    <div class="gen_container">
      <el-tabs type="border-card" style="margin-top:10px">
        <el-tab-pane label="手动生成" >
          <el-form :inline="true" :model="formPara">
            <el-form-item label="个数">
              <el-input v-model="formPara.NodeUE_nTot"></el-input>
            </el-form-item>
            <el-form-item label="维度">
              <el-input v-model="formPara.NodeUE_lat"></el-input>
            </el-form-item>
            <el-form-item label="经度">
              <el-input v-model="formPara.NodeUE_lon"></el-input>
            </el-form-item>
            <el-form-item label="高度">
              <el-input v-model="formPara.NodeUE_alt"></el-input>
            </el-form-item>
            <el-button @click="generateData" style="margin-left:20px">确定</el-button>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="基于文件" >
          <uploadFile></uploadFile>
        </el-tab-pane>
      </el-tabs>
    </div>



    <div class="table_container">
      <el-table
        :data="tableData"
        @expand="expand"
        :expand-row-keys="expendRow"
        :row-key="(row) => row.index"
        stripe
        fit
        border
        max-height="750"
        :show-overflow-tooltip="true"
        style="width: 100%;"
      >
        <el-table-column label="domIdx" sortable fixed prop="domIdx"></el-table-column>
        <el-table-column label="Name"  width="150px" prop="Name"> </el-table-column>
        <el-table-column label="NodeType" prop="NodeType"></el-table-column>
        <el-table-column label="lat" prop="lat"> </el-table-column>
        <el-table-column label="lon" prop="lon"> </el-table-column>
        <el-table-column label="alt" prop="alt"> </el-table-column>
        <el-table-column label="Mobility" prop="Mobility"> </el-table-column>
        <el-table-column label="TBD1" prop="TBD1"> </el-table-column>
        <el-table-column label="TBD2" prop="TBD2"> </el-table-column>
        <el-table-column label="TBD3" prop="TBD3"> </el-table-column>


        

      </el-table>
      <div class="Pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="20"
          layout="total, prev, pager, next"
          :total="count"
        >
        </el-pagination>
      </div>


    </div>
  </div>
</template>

<script>
import headTop from "../components/headTop";
import uploadFile from "../components/uploadFile";
import { baseUrl, baseImgPath } from "@/config/env";
import {
} from "@/api/getData";
export default {
  data() {
    return {
      baseUrl,
      baseImgPath,
      restaurant_id: null,
      city: {},
      offset: 0,
      limit: 20,
      count: 0,
      tableData: [{
    "domIdx":1,
    "Name":"name",
    "NodeType":3,
    "lat":1.2,
    "lon":2.1,
    "alt":234.1,
    "Mobility":"Fixed",
    "TBD1":"temp",
    "TBD2":"temp",
    "TBD3":"temp"
}],
      currentPage: 1,
      selectTable: {},
      dialogFormVisible: false,
      menuOptions: [],
      selectMenu: {},
      selectIndex: null,
      specsForm: {
        specs: "",
        packing_fee: 0,
        
        price: 20,
      },
      fileList: [],
      specsFormrules: {
        specs: [{ required: true, message: "请输入规格", trigger: "blur" }],
      },
      specsFormVisible: false,
      expendRow: [],
      formPara: {
        "NodeUE_nTot": 2,
        "NodeUE_alt": 3.2345,
        "NodeUE_lon": 4.2345,
        "NodeUE_lat": 5.2345,
      },
    };
  },
  created() {
    this.count = this.tableData.length;
  },
  computed: {
    specs: function () {
      let specs = [];
      if (this.selectTable.specfoods) {
        this.selectTable.specfoods.forEach((item) => {
          specs.push({
            specs: item.specs_name,
            packing_fee: item.packing_fee,
            price: item.price,
          });
        });
      }
      return specs;
    },
  },
  components: {
    headTop,
    uploadFile
  },
  methods: {
    generateData() {
      console.log("点击了确定按钮");
      console.log(this.formPara);
      for(var i = 0; i < this.tableData.length; i++){
        console.log(this.tableData[i].name = "热狗")
      }
      console.log(this.tableData);
    },

    deleteSpecs(index) {
      this.specs.splice(index, 1);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.offset = (val - 1) * this.limit;
      this.getFoods();
    },
    expand(row, status) {
      if (status) {
        this.getSelectItemData(row);
      } else {
        const index = this.expendRow.indexOf(row.index);
        this.expendRow.splice(index, 1);
      }
    },
    handleEdit(row) {
      this.getSelectItemData(row, "edit");
      this.dialogFormVisible = true;
    },

    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  },
};
</script>

<style lang="less">
@import "../style/mixin";
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.table_container {
  padding: 20px;
}
.gen_container{
  padding-left:20px;
}
.Pagination {
  display: flex;
  justify-content: flex-start;
  margin-top: 8px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #20a0ff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;
}
.avatar {
  width: 120px;
  height: 120px;
  display: block;
}
</style>
