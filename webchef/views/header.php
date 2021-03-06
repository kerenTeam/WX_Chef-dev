<!DOCTYPE html>
<html>
<head>
	<title>大厨到家</title>
    <meta charset="utf-8">
  	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <base href="<?php echo base_url();?>webchef/" />
  	<meta name="description" content="">
  	<meta name="keywords" content="">
  	<!-- Set render engine for 360 browser -->
    <meta name="renderer" content="webkit">
    <!-- No Baidu Siteapp-->
    <meta http-equiv="Cache-Control" content="no-siteapp"/>
    <link rel="icon" type="image/png" href="skin/img/LOGO-ug_03.png">
    <link rel="stylesheet" href="skin/css/amazeui.min.css">
    <link rel="stylesheet" type="text/css" href="skin/css/home.css">
</head>
<body>
<div class="header">
    <div class="center">
      <ul class="clear">
        <li><a href="<?=site_url('home/index');?>">首页</a></li>
        <li><a href="<?=site_url('usercenter/personal');?>">我的订单</a></li>
        <!-- <li><a href="<?=site_url('home/recommend');?>">我的大厨</a></li> -->
        <li><a href="<?=site_url('home/help');?>">联系我们</a></li>
        <li><a href="<?=site_url('shopcar/car');?>">购物篮</a></li>
        <?php if(!isset($_SESSION['phone'])):?>
        <li><a href="<?=site_url('login/index');?>">登录</a>/<a href="<?=site_url('login/register');?>">注册</a></li>
        <?php else:?>
        <li><div  class="am-dropdown headerdown" data-am-dropdown>
            <a href="javascript:;" class="am-dropdown-toggle" data-am-dropdown-toggle><?=$_SESSION['phone'];?> <span class="am-icon-caret-down"></span></a>
            <ul class="am-dropdown-content">
              <li><a href="<?=site_url('usercenter/personal');?>"><i class="am-icon-home"></i> 我的主页</a></li>
              <li><a href="<?=site_url('usercenter/userInfo');?>"><i class="am-icon-user"></i> 个人信息</a></li>
              <li><a href="<?=site_url('usercenter/address');?>"><i class="am-icon-map-marker"></i>&nbsp;&nbsp;地址管理</a></li>
              <li class="am-divider"></li>
              <li><a href="<?=site_url('login/outlogin')?>"><i class="am-icon-power-off"></i> 退出登录</a></li>
            </ul>
        </div></li>
      <?php endif;?>
      </ul>
    </div>
  </div>
  <div class="content">
        <div class="content-tit clear">
          <!-- 指引 -->
        <div class="center">
          <ol class="am-breadcrumb am-margin-bottom-0">
          <li><a href="<?=site_url('home/home');?>">首页</a></li>
          <li class="am-active">个人中心</li>
        </ol>
        <ul class="clear">
                <li><a href="<?=site_url('home/add');?>">点菜</a></li>
                <li><a href="<?=site_url('order/custom');?>">宴席</a></li>
                <li><a href="<?=site_url('order/vegetable');?>">净菜</a></li>
                <li><a href="javascript:;">特色服务 <i class="am-icon-sort-desc"></i></a>
                  <div class="subMenu">
                    <a href="<?=site_url('service/service');?>" title="">服务</a>
                    <a href="<?=site_url('service/elegance');?>" title="">伴餐</a>
                    <a href="<?=site_url('service/ceremonyType');?>" title="">庆典</a>
                    <a href="<?=site_url('home/price');?>" title="">菜价</a>
                  </div>
                </li>
        </ul>
        </div>
        </div>