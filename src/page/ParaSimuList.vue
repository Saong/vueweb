
<template>
  <div class="fillcontain">
    <head-top></head-top>




  <el-tabs tab-position="bottom" type="border-card" >
    <el-tab-pane label="仿真设定">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>显示</span>
        </div>
        <div style="display:flex">
          <el-form :model="formPara" 
          :label-width="labelWidth" 
          size="mini" 
          label-position="right" 
          class="sub-setting"
          style="width:15%">
            <el-form-item label="卫星图标">
              <el-select v-model="formPara.count" placeholder="卫星图标">
                <el-option label="图标1" value="shanghai"></el-option>
                <el-option label="图标2" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="名称">
              <el-input v-model="formPara.name"></el-input>
            </el-form-item>
            <el-form-item label="颜色">
              <el-color-picker v-model="color1"></el-color-picker>
            </el-form-item>
            <el-form-item label="显示名称">
              <el-switch v-model="formPara.switch"></el-switch>
            </el-form-item>
          </el-form>
          <el-form :model="formPara" 
          :label-width="labelWidth" 
          size="mini" 
          label-position="right" 
          class="sub-setting"
          style="width:15%">
            <el-form-item label="关口站图标">
              <el-select v-model="formPara.count" placeholder="关口站图标">
                <el-option label="图标1" value="shanghai"></el-option>
                <el-option label="图标2" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="大小">
              <el-input v-model="formPara.name" placeholder="大小"></el-input>
            </el-form-item>
            <el-form-item label="颜色">
              <el-color-picker v-model="color1"></el-color-picker>
            </el-form-item>
            <el-form-item label="显示名称">
              <el-switch v-model="formPara.switch"></el-switch>
            </el-form-item>
          </el-form>
          <el-form :model="formPara" 
          :label-width="labelWidth" 
          size="mini" 
          label-position="right" 
          class="sub-setting"
          style="width:15%">
            <el-form-item label="终端图标">
              <el-select v-model="formPara.count" placeholder="终端图标">
                <el-option label="图标1" value="shanghai"></el-option>
                <el-option label="图标2" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="大小">
              <el-input v-model="formPara.name" placeholder="大小"></el-input>
            </el-form-item>
            <el-form-item label="颜色">
              <el-color-picker v-model="color1"></el-color-picker>
            </el-form-item>
            <el-form-item label="显示名称">
              <el-switch v-model="formPara.switch"></el-switch>
            </el-form-item>
          </el-form>
          <el-form :model="formPara" 
          :label-width="labelWidth" 
          size="mini" 
          label-position="right" 
          class="sub-setting"
          style="width:15%">
            <el-form-item label="海岸线图标">
              <el-select v-model="formPara.count" placeholder="海岸线图标">
                <el-option label="图标1" value="shanghai"></el-option>
                <el-option label="图标2" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="大小">
              <el-input v-model="formPara.name" placeholder="大小"></el-input>
            </el-form-item>
            <el-form-item label="颜色">
              <el-color-picker v-model="color1"></el-color-picker>
            </el-form-item>
          </el-form>
        </div>
        <el-divider></el-divider>
        <div style="display:flex">
          <el-form :model="formPara" 
          :label-width="labelWidth" 
          size="mini" 
          label-position="right"
          class="sub-setting" 
          style="width:15%">
            <el-form-item label="用户链路">
              <el-select v-model="formPara.count" placeholder="用户链路">
                <el-option label="图标1" value="shanghai"></el-option>
                <el-option label="图标2" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="线宽">
              <el-input v-model="formPara.name" palceholder="线宽"></el-input>
            </el-form-item>
            <el-form-item label="颜色">
              <el-color-picker v-model="color1"></el-color-picker>
            </el-form-item>
          </el-form>
          <el-form :model="formPara" 
          :label-width="labelWidth" 
          size="mini" 
          label-position="right" 
          class="sub-setting"
          style="width:15%">
            <el-form-item label="馈电线路">
              <el-select v-model="formPara.count" placeholder="馈电线路">
                <el-option label="图标1" value="shanghai"></el-option>
                <el-option label="图标2" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="线宽">
              <el-input v-model="formPara.name" placeholder="线宽"></el-input>
            </el-form-item>
            <el-form-item label="颜色">
              <el-color-picker v-model="color1"></el-color-picker>
            </el-form-item>
          </el-form>
          <el-form :model="formPara" 
          :label-width="labelWidth" 
          size="mini" 
          label-position="right" 
          class="sub-setting"
          style="width:15%">
            <el-form-item label="同轨星间链">
              <el-select v-model="formPara.count" placeholder="同轨星间链">
                <el-option label="图标1" value="shanghai"></el-option>
                <el-option label="图标2" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="线宽">
              <el-input v-model="formPara.name" placeholder="线宽"></el-input>
            </el-form-item>
            <el-form-item label="颜色">
              <el-color-picker v-model="color1"></el-color-picker>
            </el-form-item>
          </el-form>
          <el-form :model="formPara" 
          :label-width="labelWidth" 
          size="mini" 
          label-position="right" 
          class="sub-setting"
          style="width:15%">
            <el-form-item label="异轨星间链">
              <el-select v-model="formPara.count" placeholder="异轨星间链">
                <el-option label="图标1" value="shanghai"></el-option>
                <el-option label="图标2" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="线宽">
              <el-input v-model="formPara.name" placeholder="线宽"></el-input>
            </el-form-item>
            <el-form-item label="颜色">
              <el-color-picker v-model="color1"></el-color-picker>
            </el-form-item>
          </el-form>
          <el-form :model="formPara" 
          :label-width="labelWidth" 
          size="mini" 
          label-position="right" 
          class="sub-setting"
          style="width:15%">
            <el-form-item label="站间链路">
              <el-select v-model="formPara.count" placeholder="站间链路">
                <el-option label="图标1" value="shanghai"></el-option>
                <el-option label="图标2" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="线宽">
              <el-input v-model="formPara.name" placeholder="线宽"></el-input>
            </el-form-item>
            <el-form-item label="颜色">
              <el-color-picker v-model="color1"></el-color-picker>
            </el-form-item>
          </el-form>
          <el-form :model="formPara" 
          :label-width="labelWidth" 
          size="mini" 
          label-position="right" 
          class="sub-setting"
          style="width:15%">
            <el-form-item label="业务流">
              <el-select v-model="formPara.count" placeholder="业务流">
                <el-option label="图标1" value="shanghai"></el-option>
                <el-option label="图标2" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="线宽">
              <el-input v-model="formPara.name" placeholder="线宽"></el-input>
            </el-form-item>
            <el-form-item label="颜色" >
                <el-color-picker v-model="color1"></el-color-picker>
            </el-form-item>
          </el-form>
        </div>

      </el-card>
      <el-card class="box-card" style="margin-top:15px">
        <div slot="header" class="clearfix">
          <span>路径与导出</span>
        </div>
        <el-form :model="formPara" 
        :inline="true"
        size="mini" 
        style="margin-top:15px">
          <el-form-item label="工作路径" >
            <el-input v-model="formPara.name" ></el-input>
          </el-form-item>
          <el-form-item label="时间戳位数">
             <el-input v-model="formPara.name"></el-input>
          </el-form-item> 
        </el-form>
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="用户链路"></el-checkbox>
          <el-checkbox label="馈电链路"></el-checkbox>
          <el-checkbox label="星间链路"></el-checkbox>
          <el-checkbox label="卫星实时位置"></el-checkbox>
          <el-checkbox label="网络拓扑"></el-checkbox>
          <el-checkbox label="覆盖性"></el-checkbox>
          <el-checkbox label="吞吐量"></el-checkbox>
          <el-checkbox label="时延"></el-checkbox>
          <el-checkbox label="外部UDP发送"></el-checkbox>
        </el-checkbox-group>
        <el-form :model="formPara" 
        :inline="true"
        size="mini" 
        style="margin-top:20px">
          
          <el-form-item label="UDP对端IP" >
            <el-input v-model="formPara.name" placeholder="127.0.0.1"></el-input>
          </el-form-item>
          <el-form-item label="对端端口">
             <el-input v-model="formPara.name"></el-input>
          </el-form-item> 
          <el-form-item label="发送区缓存">
            <el-input v-model="formPara.name"></el-input>
          </el-form-item>
          <el-form-item label="本机端口">
            <el-input v-model="formPara.name" placeholder="9001"></el-input>
          </el-form-item>
          <el-form-item label="接收区缓存">
            <el-input v-model="formPara.name"></el-input>
          </el-form-item>
          <el-form-item label="超时">
            <el-input v-model="formPara.name"></el-input>
          </el-form-item>
        </el-form>
      </el-card>
    </el-tab-pane>
    <el-tab-pane label="场景信息">
    <div class="gen_container">
      <el-tabs  style="margin-top:10px" tab-position="top">
        <el-tab-pane label="手动生成" >
          <el-form :inline="true" :model="formPara">
            <el-form-item label="开始时间">
              <el-date-picker
                v-model="value1"
                type="datetime"
                placeholder="选择日期时间">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="仿真时长">
              <el-input v-model="formPara.count"></el-input>
            </el-form-item>
            <el-form-item label="仿真间隔">
              <el-input v-model="formPara.guidao"></el-input>
            </el-form-item>
          </el-form>
          <el-form :inline="true" :model="formPara">
            <el-form-item label="端星接入">
              <el-select v-model="formPara.count" >
                <el-option label="图标1" value="shanghai"></el-option>
                <el-option label="图标2" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="站星接入">
              <el-select v-model="formPara.count">
                <el-option label="图标1" value="shanghai"></el-option>
                <el-option label="图标2" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-button @click="generateData" style="margin-left:20px">确定</el-button>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="基于文件" >
          <div>
              <el-upload
                ref="upload"
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :limit="1"
                :file-list="fileList"
                :auto-upload="false"
                style="margin-top: 10px; margin-bottom: 10px; width:500px; float:left;"
              >
                <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">确定</el-button>
              </el-upload>
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
        border
        fit
        :show-overflow-tooltip="true"
        style="width: 100%"
      >
        <!-- <el-table-column type="expand">
                  <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                      <el-form-item label="食品名称">
                        <span>{{ props.row.name }}</span>
                      </el-form-item>
                      <el-form-item label="餐馆名称">
                        <span>{{ props.row.restaurant_name }}</span>
                      </el-form-item>
                      <el-form-item label="食品 ID">
                        <span>{{ props.row.item_id }}</span>
                      </el-form-item>
                      <el-form-item label="餐馆 ID">
                        <span>{{ props.row.restaurant_id }}</span>
                      </el-form-item>
                      <el-form-item label="食品介绍">
                        <span>{{ props.row.description }}</span>
                      </el-form-item>
                      <el-form-item label="餐馆地址">
                        <span>{{ props.row.restaurant_address }}</span>
                      </el-form-item>
                      <el-form-item label="食品评分">
                        <span>{{ props.row.rating }}</span>
                      </el-form-item>
                      <el-form-item label="食品分类">
                        <span>{{ props.row.category_name }}</span>
                      </el-form-item>
                      <el-form-item label="月销量">
                        <span>{{ props.row.month_sales }}</span>
                      </el-form-item>
                    </el-form>
                  </template>
                </el-table-column> -->
        <el-table-column label="domidx" sortable fixed prop="name">
        </el-table-column>
        <el-table-column label="Name" prop="description"> </el-table-column>
        <el-table-column label="NodeType" width="150px" prop="rating">
        </el-table-column>
        <el-table-column label="consIdx" prop="rating"> </el-table-column>
        <el-table-column label="consName" prop="rating"> </el-table-column>
        <el-table-column label="orbitIdx" prop="rating"> </el-table-column>
        <el-table-column label="phsIdx" prop="rating"> </el-table-column>
        <el-table-column label="phsIdx" prop="rating"> </el-table-column>
        <el-table-column label="orbitPara_a" prop="rating"> </el-table-column>
        <el-table-column label="OrbitPara_e" prop="rating"> </el-table-column>
        <el-table-column label="orbitPara_i" prop="rating"> </el-table-column>
        <el-table-column label="orbitPara_W" prop="rating"> </el-table-column>
        <el-table-column label="orbitPara_w" prop="rating"> </el-table-column>
        <el-table-column label="considx" width="160">
          <template slot-scope="scope">
            <el-button size="small" @click="handleEdit(scope.row)"
              >编辑</el-button
            >
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
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
      <el-dialog title="修改食品信息" v-model="dialogFormVisible">
        <el-form :model="selectTable">
          <el-form-item label="食品名称" label-width="100px">
            <el-input v-model="selectTable.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="食品介绍" label-width="100px">
            <el-input v-model="selectTable.description"></el-input>
          </el-form-item>
          <el-form-item label="食品分类" label-width="100px">
            <el-select
              v-model="selectIndex"
              :placeholder="selectMenu.label"
              @change="handleSelect"
            >
              <el-option
                v-for="item in menuOptions"
                :key="item.value"
                :label="item.label"
                :value="item.index"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="食品图片" label-width="100px">
            <el-upload
              class="avatar-uploader"
              :action="baseUrl + '/v1/addimg/food'"
              :show-file-list="false"
              :on-success="handleServiceAvatarScucess"
              :before-upload="beforeAvatarUpload"
            >
              <img
                v-if="selectTable.image_path"
                :src="baseImgPath + selectTable.image_path"
                class="avatar"
              />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </el-form>
        <el-row style="overflow: auto; text-align: center">
          <el-table
            :data="specs"
            style="margin-bottom: 20px"
            :row-class-name="tableRowClassName"
          >
            <el-table-column prop="specs" label="规格"> </el-table-column>
            <el-table-column prop="packing_fee" label="包装费">
            </el-table-column>
            <el-table-column prop="price" label="价格"> </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="small"
                  type="danger"
                  @click="deleteSpecs(scope.$index)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <el-button
            type="primary"
            @click="specsFormVisible = true"
            style="margin-bottom: 10px"
            >添加规格</el-button
          >
        </el-row>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="updateFood">确 定</el-button>
        </div>
      </el-dialog>

      <el-dialog title="添加规格" v-model="specsFormVisible">
        <el-form :rules="specsFormrules" :model="specsForm">
          <el-form-item label="规格" label-width="100px" prop="specs">
            <el-input v-model="specsForm.specs" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="包装费" label-width="100px">
            <el-input-number
              v-model="specsForm.packing_fee"
              :min="0"
              :max="100"
            ></el-input-number>
          </el-form-item>
          <el-form-item label="价格" label-width="100px">
            <el-input-number
              v-model="specsForm.price"
              :min="0"
              :max="10000"
            ></el-input-number>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="specsFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="addspecs">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    </el-tab-pane>
    

  </el-tabs>

  </div>
</template>

<script>
import headTop from "../components/headTop";
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
      value1:'',
      checked:true,
      baseUrl,
      baseImgPath,
      restaurant_id: null,
      labelWidth : '100px',
      city: {},
      offset: 0,
      limit: 20,
      color1:'',
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
      tabPosition: 'bottom',
      checkList:[],
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

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {
  width: 100%;
}

.sub-setting{
  width:15%;
}

.el-form--inline .descClass div.el-input{
  width:920px;
}


</style>
