<template> 
    <el-container id="app" :style="{'height':winHeight+'px'}">
      <header-bar></header-bar>
      <el-main class="main">
         <router-view></router-view>
      </el-main>
      <el-footer height="26"  class="footer">技术支持：贵州背篼帮科技公司（水龙头项目事业部）</el-footer>
    </el-container>
</template>

<script>
  import HeaderBar from './components/HeaderBar'
  export default {
    name: 'e-vue02',
    components:{
      HeaderBar
    },
    data(){
      return {
        winHeight:document.documentElement.clientHeight-2
      }
    },
    mounted(){
      window.onresize =()=>{
        this.winHeight = document.documentElement.clientHeight-2
      }

    }
  }
</script>

<style>
  html,div,body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body{
    background: transparent; 
    border:1px solid #bbb;
    border-bottom:none;
    border-radius:4px;
    overflow: hidden;
  }
  .el-header{
    padding:0 3px!important;
  }

  .header{
    -webkit-app-region: drag;
    background:url(./assets/back-3d.png);
    height:110px;
  }
  .main{
    overflow-x:hidden;
    background:#fff;
    margin:0!important;
    padding:2px!important;
  }

  .footer{
    background: rgb(139, 198, 228);
    text-align: center;
    font-size:14px;
    color:#fff;
    line-height: 26px;
  }
</style>
