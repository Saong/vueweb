import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');
const home = r => require.ensure([], () => r(require('@/page/home')), 'home');
const addShop = r => require.ensure([], () => r(require('@/page/addShop')), 'addShop');
const addGoods = r => require.ensure([], () => r(require('@/page/addGoods')), 'addGoods');
const userList = r => require.ensure([], () => r(require('@/page/userList')), 'userList');
const shopList = r => require.ensure([], () => r(require('@/page/shopList')), 'shopList');
const SATList = r => require.ensure([], () => r(require('@/page/SATList')), 'SATList');
const GSList = r => require.ensure([], () => r(require('@/page/GSList')), 'GSList');
const UEList = r => require.ensure([], () => r(require('@/page/UEList')), 'UEList');
const LnkList = r => require.ensure([], () => r(require('@/page/LnkList')), 'LnkList');

const TrafficList = r => require.ensure([], () => r(require('@/page/TrafficList')), 'TrafficList');
const ParaSimuList = r => require.ensure([], () => r(require('@/page/ParaSimuList')), 'ParaSimuList');
const orderList = r => require.ensure([], () => r(require('@/page/orderList')), 'orderList');
const adminList = r => require.ensure([], () => r(require('@/page/adminList')), 'adminList');

const PathDelayChart = r => require.ensure([], () => r(require('@/page/PathDelayChart')), 'PathDelayChart');
const PathHopChart = r => require.ensure([], () => r(require('@/page/PathHopChart')), 'PathHopChart');
const SpeedChart = r => require.ensure([], () => r(require('@/page/SpeedChart')), 'SpeedChart');
const NetworkChart = r => require.ensure([], () => r(require('@/page/NetworkChart')), 'NetworkChart');
const TerminalChart = r => require.ensure([], () => r(require('@/page/TerminalChart')), 'TerminalChart');
const StationChart = r => require.ensure([], () => r(require('@/page/StationChart')), 'StationChart');
const UserLinkChart = r => require.ensure([], () => r(require('@/page/UserLinkChart')), 'UserLinkChart');
const FeedLinkChart = r => require.ensure([], () => r(require('@/page/FeedLinkChart')), 'FeedLinkChart');



const visitor = r => require.ensure([], () => r(require('@/page/visitor')), 'visitor');
const newMember = r => require.ensure([], () => r(require('@/page/newMember')), 'newMember');
const uploadImg = r => require.ensure([], () => r(require('@/page/uploadImg')), 'uploadImg');
const vueEdit = r => require.ensure([], () => r(require('@/page/vueEdit')), 'vueEdit');
const adminSet = r => require.ensure([], () => r(require('@/page/adminSet')), 'adminSet');
const sendMessage = r => require.ensure([], () => r(require('@/page/sendMessage')), 'sendMessage');
const explain = r => require.ensure([], () => r(require('@/page/explain')), 'explain');

const routes = [{
        path: '/',
        component: manage
    },
    {
        path: '/manage',
        component: manage,
        name: '',
        children: [{
            path: '',
            component: home,
            meta: [],
        }, {
            path: '/addShop',
            component: addShop,
            meta: ['目标系统', '添加商铺'],
        }, {
            path: '/addGoods',
            component: addGoods,
            meta: ['添加数据', '添加商品'],
        }, {
            path: '/userList',
            component: userList,
            meta: ['数据管理', '用户列表'],
        }, {
            path: '/shopList',
            component: shopList,
            meta: ['数据管理', '商家列表'],
        }, {
            path: '/SATList',
            component: SATList,
            meta: ['目标系统', '卫星'],
        }, {
            path: '/UEList',
            component: UEList,
            meta: ['目标系统', '终端'],
        }, {
            path: '/LnkList',
            component: LnkList,
            meta: ['目标系统', '链路'],
        }, {
            path: '/GSList',
            component: GSList,
            meta: ['目标系统', '关口站'],
        }, {
            path: '/TrafficList',
            component: TrafficList,
            meta: ['目标系统', '业务'],
        }, {
            path: '/ParaSimuList',
            component: ParaSimuList,
            meta: ['目标系统', '仿真'],
        }, {
            path: '/PathDelayChart',
            component: PathDelayChart,
            meta: ['图表展示', '时延'],
        }, {
            path: '/PathHopChart',
            component: PathHopChart,
            meta: ['图表展示', '跳数'],

        }, {
            path: '/SpeedChart',
            component: SpeedChart,
            meta: ['图表展示', '跳数'],

        }, {
            path: '/NetworkChart',
            component: NetworkChart,
            meta: ['图表展示', '跳数'],
        }, {
            path: '/TerminalChart',
            component: TerminalChart,
            meta: ['图表展示', '跳数'],
        }, {
            path: '/StationChart',
            component: StationChart,
            meta: ['图表展示', '跳数'],
        }, {
            path: '/FeedLinkChart',
            component: FeedLinkChart,
            meta: ['图表展示', '跳数'],
        }, {
            path: '/UserLinkChart',
            component: UserLinkChart,
            meta: ['图表展示', '跳数'],
        }]
    }
]

export default new Router({
    routes,
    strict: process.env.NODE_ENV !== 'production',
})