<template>
  <div class="fillcontain">
    <head-top></head-top>
    <div class="gen_container">
      <el-tabs type="border-card"  style="margin-top:10px">
        <el-tab-pane label="手动生成" >
          <el-form :inline="true" :model="formPara">
            <el-form-item label="名称">
              <el-input v-model="formPara.NodeSATName"></el-input>
            </el-form-item>
            <el-form-item label="卫星个数">
              <el-input v-model="formPara.NodeSAT_nTot"></el-input>
            </el-form-item>
            <el-form-item label="轨道面数">
              <el-input v-model="formPara.NodeSAT_nCyc"></el-input>
            </el-form-item>
            <el-form-item label="WalkerF">
              <el-input v-model="formPara.NodeSAT_WalkerF"></el-input>
            </el-form-item>
            <el-form-item label="RAAN扩展范围">
              <el-input v-model="formPara.NodeSAT_RAANSpreading"></el-input>
            </el-form-item>
          </el-form>
          <el-form :inline="true" :model="formPara">
            <el-form-item label="高度">
              <el-input v-model="formPara.NodeSAT_Alt">
                <template slot="append">km</template>
              </el-input>
            </el-form-item>
            <el-form-item label="倾角">
              <el-input v-model="formPara.NodeSAT_inc"></el-input>
            </el-form-item>
            <el-form-item label="离心率">
              <el-input v-model="formPara.NodeSAT_ecc"></el-input>
            </el-form-item>
            <el-form-item label="RAAN">
              <el-input v-model="formPara.NodeSAT_RAAN"></el-input>
            </el-form-item>
            <el-form-item label="真近点角">
              <el-input v-model="formPara.NodeSAT_argp"></el-input>
            </el-form-item>
            <el-form-item label="平近点角">
              <el-input v-model="formPara.NodeSAT_manom"></el-input>
            </el-form-item>
            <el-button @click="generateData" style="margin-left:20px">确定</el-button>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="基于文件" >
          <div>
              <uploadFile></uploadFile>
          </div>
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
        :show-overflow-tooltip="true"
        style="width: 100%"
      >
        <el-table-column label="domIdx" sortable fixed prop="name">
        </el-table-column>
        <el-table-column label="Name" prop="description"> </el-table-column>
        <el-table-column label="NodeType" width="150px" prop="rating">
        </el-table-column>
        <el-table-column label="consIdx" prop="rating"> </el-table-column>
        <el-table-column label="consName" prop="rating"> </el-table-column>
        <el-table-column label="orbitIdx" prop="rating"> </el-table-column>
        <el-table-column label="phsIdx" prop="rating"> </el-table-column>
        <el-table-column label="orbitPara_a" prop="rating"> </el-table-column>
        <el-table-column label="OrbitPara_e" prop="rating"> </el-table-column>
        <el-table-column label="orbitPara_i" prop="rating"> </el-table-column>
        <el-table-column label="orbitPara_W" prop="rating"> </el-table-column>
        <el-table-column label="orbitPara_w" prop="rating"> </el-table-column>
        <el-table-column label="orbitPara_M" prop="rating"> </el-table-column>
        <el-table-column label="TBD1" prop="rating"> </el-table-column>
        <el-table-column label="TBD2" prop="rating"> </el-table-column>
        <el-table-column label="TBD3" prop="rating"> </el-table-column>
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
  getFoods,
  getFoodsCount,
  getMenu,
  updateFood,
  deleteFood,
  getResturantDetail,
  getMenuById,
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
      tableData: [],
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
        "NodeSATFile":"path",
        "NodeSAT_manom":1.2345,
        "NodeSAT_argp": 2.2345,
        "NodeSAT_RAAN": 3.2345,
        "NodeSAT_ecc":  4.2345,
        "NodeSAT_inc":  5.2345,
        "NodeSAT_Alt":  6.2345,
        "NodeSAT_RAANSpreading": 7.2345,
        "NodeSAT_WalkerF": 8.2345,
        "NodeSAT_nCyc": 9,
        "NodeSAT_nTot": 10,
        "NodeSATName":  "name"
      },
    };
  },
  created() {
    this.restaurant_id = this.$route.query.restaurant_id;
    this.initData();
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
      console.log(this.$store.state)
    },
    async initData() {
      try {
        const countData = await getFoodsCount({
          restaurant_id: this.restaurant_id,
        });
        if (countData.status == 1) {
          this.count = countData.count;
        } else {
          throw new Error("获取数据失败");
        }
        this.getFoods();
      } catch (err) {
        console.log("获取数据失败", err);
      }
    },
    async getMenu() {
      this.menuOptions = [];
      try {
        const menu = await getMenu({
          restaurant_id: this.selectTable.restaurant_id,
          allMenu: true,
        });
        menu.forEach((item, index) => {
          this.menuOptions.push({
            label: item.name,
            value: item.id,
            index,
          });
        });
      } catch (err) {
        console.log("获取食品种类失败", err);
      }
    },
    async getFoods() {
      const Foods = await getFoods({
        offset: this.offset,
        limit: this.limit,
        restaurant_id: this.restaurant_id,
      });
      this.tableData = [];
      Foods.forEach((item, index) => {
        const tableData = {};
        tableData.name = item.name;
        tableData.item_id = item.item_id;
        tableData.description = item.description;
        tableData.rating = item.rating;
        tableData.month_sales = item.month_sales;
        tableData.restaurant_id = item.restaurant_id;
        tableData.category_id = item.category_id;
        tableData.image_path = item.image_path;
        tableData.specfoods = item.specfoods;
        tableData.index = index;
        this.tableData.push(tableData);
      });
    },
    tableRowClassName(row, index) {
      if (index === 1) {
        return "info-row";
      } else if (index === 3) {
        return "positive-row";
      }
      return "";
    },
    addspecs() {
      this.specs.push({ ...this.specsForm });
      this.specsForm.specs = "";
      this.specsForm.packing_fee = 0;
      this.specsForm.price = 20;
      this.specsFormVisible = false;
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
    async getSelectItemData(row, type) {
      const restaurant = await getResturantDetail(row.restaurant_id);
      const category = await getMenuById(row.category_id);
      this.selectTable = {
        ...row,
        ...{
          restaurant_name: restaurant.name,
          restaurant_address: restaurant.address,
          category_name: category.name,
        },
      };

      this.selectMenu = { label: category.name, value: row.category_id };
      this.tableData.splice(row.index, 1, { ...this.selectTable });
      this.$nextTick(() => {
        this.expendRow.push(row.index);
      });
      if (type == "edit" && this.restaurant_id != row.restaurant_id) {
        this.getMenu();
      }
    },
    handleSelect(index) {
      this.selectIndex = index;
      this.selectMenu = this.menuOptions[index];
    },
    async handleDelete(index, row) {
      try {
        const res = await deleteFood(row.item_id);
        if (res.status == 1) {
          this.$message({
            type: "success",
            message: "删除食品成功",
          });
          this.tableData.splice(index, 1);
        } else {
          throw new Error(res.message);
        }
      } catch (err) {
        this.$message({
          type: "error",
          message: err.message,
        });
        console.log("删除食品失败");
      }
    },
    handleServiceAvatarScucess(res, file) {
      if (res.status == 1) {
        this.selectTable.image_path = res.image_path;
      } else {
        this.$message.error("上传图片失败！");
      }
    },
    beforeAvatarUpload(file) {
      const isRightType =
        file.type === "image/jpeg" || file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isRightType) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isRightType && isLt2M;
    },
    async updateFood() {
      this.dialogFormVisible = false;
      try {
        const subData = {
          new_category_id: this.selectMenu.value,
          specs: this.specs,
        };
        const postData = { ...this.selectTable, ...subData };
        const res = await updateFood(postData);
        if (res.status == 1) {
          this.$message({
            type: "success",
            message: "更新食品信息成功",
          });
          this.getFoods();
        } else {
          this.$message({
            type: "error",
            message: res.message,
          });
        }
      } catch (err) {
        console.log("更新餐馆信息失败", err);
      }
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
