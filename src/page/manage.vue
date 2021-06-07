<template>
	<div class="manage_page fillcontain">
		<el-row style="height: 100%;">
	  		<el-col :span="2"  style="background-color: #545c64; height:100%">
				<el-menu :default-active="defaultActive" style="min-height: 100%;" 
				background-color="#545c64"   text-color="#fff"
  active-text-color="#ffd04b" router>
					
					<el-submenu index="1">
						<template slot="title"><i class="el-icon-document"></i>目标系统</template>
						
						<el-menu-item index="SATList">卫星</el-menu-item>
						<el-menu-item index="GSList">关口站</el-menu-item>
						<el-menu-item index="UEList">终端</el-menu-item>
						<el-menu-item index="LnkList">链路</el-menu-item>
						<el-menu-item index="TrafficList">业务</el-menu-item>
						<el-menu-item index="ParaSimuList">仿真</el-menu-item>
						
					</el-submenu>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-menu"></i>图表展示</template>
						<el-submenu index="3">
							<template slot="title"><i class="el-icon-data-line"></i>业务性能</template>
							<el-menu-item index="PathDelayChart">时延</el-menu-item>
							<el-menu-item index="PathHopChart">跳数</el-menu-item>
							<el-menu-item index="SpeedChart">传输速率</el-menu-item>
						</el-submenu>
						<el-submenu index="4">
							<template slot="title"><i class="el-icon-s-data"></i>吞吐量</template>
							<el-menu-item index="NetworkChart">整网</el-menu-item>
							<el-menu-item index="TerminalChart">终端</el-menu-item>
							<el-menu-item index="FeedLinkChart">卫星</el-menu-item>
							<el-menu-item index="StationChart">关口站</el-menu-item>
						</el-submenu>
					</el-submenu>
					<el-menu-item index="manage"><i class="el-icon-menu"></i>图表展示</el-menu-item>
					
				<el-button  plain type="primary"  size="small" style="position:absolute;left:30px;bottom:10px" @click="jumpTo">性能评估</el-button>
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
		methods: {
			jumpTo: function(){
				console.log("跳转")
				if (this.$store.state.ws) {
					this.$store.state.ws.send("#start#");
					console.log("向后台发送了消息")
				}
				window.open('http://124.16.138.10:8080/Apps/earth3.html','_blank')
			}
		}
    }
</script>


<style lang="less" scoped>
	@import '../style/mixin';

	.el-submenu .el-menu-item{
		min-width:100px
	}
</style>
