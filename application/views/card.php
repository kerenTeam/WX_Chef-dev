<body>
  <header data-am-widget="header" class="am-header am-header-default topform">
    <div class="am-header-left am-header-nav">
      <a href="javascript:" onclick="javascript:history.go(-1);">
        <i class="am-header-icon am-icon-chevron-left"></i>
      </a>
    </div>
    <h1 class="am-header-title">
    我的饭票
    </h1>
    
  </header>
  <!-- 无饭票 -->


<!--   <div class="cardno">
    <img  class="am-block" src="skin/img/nocard.jpg" alt="">
    暂无可用饭票
  </div> -->



  <!-- 可用饭票 --> 
  <div class="am-list-news-bd">
    <ul class="am-list acr">
    <?php if(!empty($cards)):?>
      <?php foreach($cards as $val):?>
      <li class="am-g">
        <a href="javascript:"><img src="skin/img/card1.png" alt=""></a>
      </li>
    <?php endforeach;?>
      
    <?php else:?>
      <li class="am-g">
        你还没有饭票！
      </li>
    <?php endif;?>
    </ul>
  </div>
  <!-- 失效饭票 -->
<!--   <h3 class="am-text-center">失效饭票</h3>
  <div class="am-list-news-bd">
    <ul class="am-list acr">
      <li class="am-g">
        <a href="javascript:"><img src="skin/img/cardo.png" alt=""></a>
      </li>
    </ul>
  </div> -->
</body>
</html>