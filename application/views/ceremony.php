

<body> 

  <header data-am-widget="header" class="am-header am-header-default topform">
      <div class="am-header-left am-header-nav">
           <a href="<?php echo site_url('home/ceremonyType');?>">

                <i class="am-header-icon am-icon-chevron-left"></i>
          </a>
      </div>

      <h1 class="am-header-title">
          庆典
      </h1>
 
  </header>
  <!-- 顶部 -->
  <div class="welCus ceFixed">  
    <img src="<?=IP.$cereinfo[0]['backgroundimg'];?>" alt="">
    <div class="am-text-center backGround">
      <?=$cereinfo[0]['name'];?><br><span class="red am-icon-cny cefont"><?=$cereinfo[0]['price'];?></span><!-- <span class="gray lineTrough am-icon-cny">88888</span> -->
 
    </div>
  </div>
  <!-- content -->
    <section data-am-widget="accordion" class="am-accordion am-accordion-gapped sec-margin" data-am-accordion='{  }'>
      <dl class="am-accordion-item am-active am-margin-bottom-lg">
        <dt class="am-accordion-title">
         <span class="am-icon-list-ul"></span> 套餐描述
        </dt>
        <dd class="am-accordion-bd am-collapse am-in"> 
          <div class="am-accordion-content">
          <?=htmlspecialchars_decode($cereinfo[0]['describe']);?>
          </div>
        </dd>
      </dl>
      <?php foreach($details as $key=>$val):?>
      <dl class="am-accordion-item">
        <dt class="am-accordion-title">
         <span class="am-badge am-badge-danger am-round"><?=$key+1?></span> <?=$val['name'];?>
        </dt>
        <?php
        // 获取区域展示图
         $img = file_get_contents(POSTAPI.'API_details?celeid='.$id.'&categoryid='.$val['id'].'&dis=img');
          $imgs = json_decode(json_decode($img),true);
         ?>
        <dd class="am-accordion-bd am-collapse am-in"> 
          <div class="am-accordion-content welCus">
          <?php foreach($imgs as $v):?>
            <img src="<?=IP.$v['detailsimg'];?>" alt="">
           <?php endforeach;?>
          </div>
        </dd>
      </dl>
    <?php endforeach;?>
     
  </section>
<!-- 悬浮按钮 -->
<div class="goChose">
  <a href="<?php echo site_url('home/CeremonyChose?id=').$id;?>">选择</a>
</div>
 <!-- footer -->
<div data-am-widget="navbar" class="am-navbar am-cf am-navbar-default nav-bot">
  <ul class="am-navbar-nav am-cf am-avg-sm-5 am-shadow">
    <li >
      <a href="<?php echo site_url('home/index')?>">
        <span class=""><img src="skin/img/home1.png" alt=""></span>
        <span class="am-navbar-label">首页</span>
      </a>
    </li>
    <li>
      <a href="<?php echo site_url('home/cart')?>">
        <span class=""><img src="skin/img/clz.png" alt=""></span>
        <span class="am-navbar-label">菜篮子</span>
      </a>
    </li>
    <li>
      <a href="<?php echo site_url('home/find')?>"> 
        <span class="find">发现</span>
      </a>
    </li>
    <li>
      <a href="<?php echo site_url('home/customServ')?>">
        <span class=""><img src="skin/img/kf.png" alt=""></span>
        <span class="am-navbar-label">客服</span>
      </a>
    </li>
    <li>
      <a href="<?php echo site_url('home/ucent')?>">
        <span class=""><img src="skin/img/gr1.png" alt=""></span>
        <span class="am-navbar-label">我的</span>
      </a>
    </li>
  </ul>
</div>
</body>
<script src="skin/js/jquery.min.js"></script>
<script src="skin/js/amazeui.min.js"></script>
</html>
