<template>
    <el-header class="header" height="110">
         <el-row :gutter="20" class="titlebar">
            <el-col :span="20"><div class="grid-content bg-purple">【水龙头】运力调度中心总平台 v0.5.2</div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple titlebtn"> 
                <div class="btnitem"  ><img src="../assets/close.png" alt="" @click="close"/></div>    
                 <div class="btnitem" ><img src="../assets/max.png" alt=""  @click="max"/></div> 
                <div class="btnitem" > <img src="../assets/min.png" alt=""  @click="min"/></div>
            </div></el-col>
        </el-row>
        <div class="operatorbar">
           
            <div class="menuitem hover">
                    <router-link to="area">
                    <img src="../assets/menuicons/global.png" />
                    <b>区域分析</b>
                    </router-link>
            </div>
           
            <div class="menuitem">
                <img src="../assets/menuicons/stock.png" />
                <b>库存情况</b>
            </div>
            <div class="menuitem">
                <img src="../assets/menuicons/order.png" />
                <b>订单中心</b>
            </div>
             <div class="menuitem">
                <img src="../assets/menuicons/report.png" />
                <b>报表分析</b>
            </div>
            <div class="menuitem">
                <img src="../assets/menuicons/config.png" />
                <b>参数配置</b>
            </div>
            <div class="menuitem">
                <img src="../assets/menuicons/admin.png" />
                <b>系统管理</b>
            </div>
        </div>
    </el-header> 
</template>
<script>
export default {
     name: 'header-bar',
     data(){
         return {}
     },
     methods:{
        min(){
            console.log('min')
            this.$electron.ipcRenderer.send('window-min');      
        },
        max(){
            console.log('max')
            this.$electron.ipcRenderer.send('window-max');
        },
        close(){
            console.log('close')
            this.$electron.ipcRenderer.send('window-close');
        } 
    }
}
</script>
<style>
      .titlebar{  
        color:#fff;
        font-weight: bold;
        font-family: '微软雅黑';
        font-size:14px; 
        margin-top:3px;
        }
     .titlebtn{ 
        -webkit-app-region: no-drag;
     }
     .titlebtn .btnitem{
         height:22px;
         width:22px;
         float: right  ;
         margin-right:5px;
         border:1px solid #ccc;
     }
     .titlebtn .btnitem:hover{background:blue;}
     .titlebtn .btnitem img{width:100%;}
     .operatorbar{margin-left:8px;margin-top:9px;}
     .operatorbar .menuitem{ width:85px;height:65px;float:left;margin-left:5px;text-align: center;}
     .operatorbar .menuitem img{ width:45px;height:40px; }
     .operatorbar .menuitem:hover{background:rgba(253, 253, 253, 0.4); border-radius: 5px; }
     .operatorbar .menuitem.hover{background:rgba(253, 253, 253, 0.4); border-radius: 5px; }
     .operatorbar .menuitem b{font-size:12px;color:#fff;text-align: center;display: block;font-family: '微软雅黑'; }
</style>