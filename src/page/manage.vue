<template>
	<div class="manage_page fillcontain">
		<el-row style="height: 100%;">
	  		<el-col :span="2"  style="background-color: #545c64; height:100%">
				<el-menu :default-active="defaultActive" style="min-height: 100%;" 
				background-color="#545c64"   text-color="#fff"
  active-text-color="#ffd04b" router>
					<el-menu-item index="manage"><i class="el-icon-menu"></i>首页</el-menu-item>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-document"></i>目标系统</template>
						
						<el-menu-item index="SATList">卫星</el-menu-item>
						<el-menu-item index="GSList">关口站</el-menu-item>
						<el-menu-item index="UEList">终端</el-menu-item>
						<el-menu-item index="LnkList">链路</el-menu-item>
						<el-menu-item index="TrafficList">业务</el-menu-item>
						<el-menu-item index="ParaSimuList">仿真</el-menu-item>
						
					</el-submenu>
					<el-menu-item index="manage"><i class="el-icon-data-line"></i>图表展示</el-menu-item>
				<el-button  plain type="primary"  size="small" style="position:absolute;left:30px;bottom:10px">性能评估</el-button>
				</el-menu>
			</el-col>
			<el-col :span="22" style="height: 100%;overflow: auto;">
				<keep-alive>
				    <router-view></router-view>
				</keep-alive>
			</el-col>
		</el-row>
  	</div>
</template>

<script>
    export default {
		computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
			}
		},
    }
</script>


<style lang="less" scoped>
	@import '../style/mixin';

	.el-submenu .el-menu-item{
		min-width:100px
	}
</style>
