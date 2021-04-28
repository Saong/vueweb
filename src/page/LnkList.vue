<template>
  <div class="fillcontain">
    <head-top></head-top>
    <div class="gen_container">
      <el-tabs  type="border-card" style="margin-top:10px">

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
        style="width: 100%;overflow:auto"
      >
        <el-table-column label="LnkTypeIdx" sortable fixed="left" prop="LnkTypeIdx">
        </el-table-column>
        <el-table-column label="Name" prop="Name"> </el-table-column>
        <el-table-column label="numBeamTx" width="120px" prop="numBeamTx">
        </el-table-column>
        <el-table-column label="numBeamRx" prop="numBeamRx"> </el-table-column>
        <el-table-column label="maxFoR" prop="maxFoR"> </el-table-column>
        <el-table-column label="minEl" prop="minEl"> </el-table-column>
        <el-table-column label="fc" prop="fc"> </el-table-column>
        <el-table-column label="bw" prop="bw"> </el-table-column>
        <el-table-column label="bwChnl" prop="bwChnl"> </el-table-column>
        <el-table-column label="EIRP" prop="EIRP"> </el-table-column>
        <el-table-column label="AntTxPoint" prop="AntTxPoint"> </el-table-column>
        <el-table-column label="AntTxRaMode" prop="AntTxRaMode"> </el-table-column>
        <el-table-column label="GT" prop="GT"> </el-table-column>
        <el-table-column label="AntRxPoint" prop="AntRxPoint" :formatter="formatAntRxPoint"> </el-table-column>
        <el-table-column label="AntRxRaMode" prop="AntRxRaMode"> </el-table-column>
        <el-table-column label="TransMode" prop="TransMode"> </el-table-column>
        <el-table-column label="ISLNum" prop="ISLNum"> </el-table-column>
        <el-table-column label="ISLPhs" prop="ISLPhs"> </el-table-column>
        <el-table-column label="FixedTxRx" prop="FixedTxRx"> </el-table-column>
        <el-table-column label="latPoOff" prop="latPoOff"> </el-table-column>
        <el-table-column label="latEqOff" prop="latEqOff"> </el-table-column>
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
        "LnkTypeIdx":3,
        "Name":"name",
    "numBeamTx":2,
    "numBeamRx":3,
    "maxFoR":60,
    "minEl":8,
    "fc":1500000000,
    "bw":240000,
    "bwChnl":2400,
    "EIRP":40,
    "AntTxPoint":[
        {
            "one":0,
            "two":1
        }
    ],
    "AntTxRaMode":"Omni",
    "GT":-5,
    "AntRxPoint":[
        {
            "one":0,
            "two":1
        }
    ],
    "AntRxRaMode":"Omni",
    "TransMode":"1bps/Hz",
    "ISLNum":1,
    "ISLPhs":-1,
    "FixedTxRx":[
        {
            "one":0,
            "two":1
        },
        {
            "three":0,
            "four":1
        },
        {
            "five":0,
            "six":1
        }
    ],
    "latPoOff":70,
    "latEqOff":0,
    "TBD1":"temp",
    "TBD2":"temp",
    "TBD3":"temp"},],
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
        name: "",
        count: "",
        guidao: "",
        walk: "",
        raanfanwei: "",
        height: "",
        angle: "",
        lixin: "",
        raan: "",
        zhen: "",
        ping: "",
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

    formatAntRxPoint(val){
      console.log(val.AntRxPoint[0])
      val = val.AntRxPoint[0]
        return "["+val.one+" "+val.two+"]"
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

.avatar {
  width: 120px;
  height: 120px;
  display: block;
}
</style>
