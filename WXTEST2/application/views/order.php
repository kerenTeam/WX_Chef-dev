<style>
   
</style>
<body>
  <!-- header -->
  <header data-am-widget="header" am-header-fixed class="am-header am-header-default topform">
    <div class="am-header-left am-header-nav">
      <a href="javascript:" onclick="javascript:history.go(-1);">
        <i class="am-header-icon am-icon-chevron-left"></i>
      </a>
    </div>
    <h1 class="am-header-title">
    支付订单
    </h1>
  </header>
  <form action="<?php echo site_url('home/payOrder')?>" method="post"> 

    <div class="am-list-news-bd">
      <ul class="am-list odl">
<?php foreach ($booking as $k => $value): ?>
          <li class="am-g am-list-item-dated">
          <a href="javascript:" class="am-list-item-hd "><?php echo $value['foodname'];?> <span class="am-fr gray">X <?php echo $postBooking[$value['foodid']];?></span></a>
          <span class="am-list-date ath"><i class="am-icon-cny cc"></i><?php echo $value['foodprice'] * $postBooking[$value['foodid']]; $pricetotal[] = $value['foodprice'] * $postBooking[$value['foodid']];?> </span>
          <!-- 发送到order数据 -->
           <!--------------------这里是我的foodID------------------------>
          <input type="hidden" name="foodid[]" value="<?php echo $value['foodid'];?> ">
           <!--------------------这里是我的numbers------------------------>
          <input type="hidden" name="numbers[]" value="<?php echo $postBooking[$value['foodid']];?>">
          <!-- 发送到order数据 END-->
        </li>
<?php endforeach ?>
        <li class="am-g am-list-item-dated">
          <a href="javascript:" class="am-list-item-hd">服务费</a>
          <span class="am-list-date ath"><i class="am-icon-cny">60</span>
        </li>
        <li class="am-g am-list-item-dated">
          <a href="javascript:" class="am-list-item-hd">服务员</a>
          <span class="am-list-date ath"><i class="am-icon-cny">160</span>
        </li>  
        <li class="am-g am-list-item-dated">
          <a href="javascript:" class="am-list-item-hd red">订单总计</a>
          <span class="am-list-date ath"><i class="am-icon-cny red"><?php echo array_sum($pricetotal);?></i></span>
        </li>  

      </ul>
     </div>
         <hr data-am-widget="divider" style="" class="am-divider am-divider-dashed" />
   <!-- <div class="am-shadow am-margin-vertical-sm">
      <p class="htit"><span class="am-icon-usd red"> </span> 支付方式</p>
      <div class="am-g pay am-cf">

        <label class="am-checkbox am-success am-u-sm-6">
          <input type="checkbox" class="v" name="radio10" value="" data-am-ucheck> 会员卡
        </label>
        <label class="am-checkbox am-success am-u-sm-6 wxradio">
          <input type="checkbox" class="zk" name="radio10" value="" data-am-ucheck> 现金
        </label>
      </div>
      <div class="am-g pay am-cf">
        <label class="am-checkbox am-success am-u-sm-6">
          <input type="checkbox" class="zk fp" name="radio10" value="" data-am-ucheck> 饭票
        </label>
        <label class="am-checkbox am-success am-u-sm-6 wxradio">
          <input type="checkbox" class="zk" name="radio10" value="" data-am-ucheck> 积分
        </label>
      </div>
      <div class="red am-text-sm am-margin-left-sm zkt">亲，选择饭票、现金、积分支付可享受折扣优惠哦！</div>
    </div>-->
    

    
    <div class="am-shadow am-margin-vertical-sm fpa2">
      <?php $_SESSION['openid'] = 18081322659;

            if (!empty($_SESSION['phone']))
            { $UserCoupon = file_get_contents(POSTAPI."API_UserCoupon?UserPhone=".$_SESSION['openid']);
            }else if(!empty($_SESSION['openid']))
            {$UserCoupon = file_get_contents(POSTAPI."API_UserCoupon?UserPhone=".$_SESSION['phone']);  } if (!empty($UserCoupon)) 
            { $UserCoupondata = json_decode(json_decode($UserCoupon));  }

            if ($UserCoupondata == 0): ?>
            <a href="javascript:;" disabled class="am-cf adc">饭票已经用光了哦<span class="am-fr am-icon-xs red">无可用饭票 </span></a>
      <?php else: ?>
             <?php //var_dump($UserCoupondata); ?>
               <a class="am-cf adc fclick">饭票可用3张<span class="am-fr am-icon-xs red">选择 <span class="am-icon-angle-down"></span></span></a>
       <div class="am-list-news-bd" id="fpc" style="display: none">
      <ul class="am-list odl"> 
          <li class="am-g am-list-item-dated">
           <a href="javascript:" class="am-list-item-hd "><img src="skin/img/fp.png" alt="饭票"> 主题套餐</a> 
           <span class="am-list-date ath"> <i class="am-icon-cny">20</i></span>
          </li> 
          <li class="am-g am-list-item-dated">
           <a href="javascript:" class="am-list-item-hd "><img src="skin/img/fp.png" alt="饭票"> 主题套餐</a> 
           <span class="am-list-date ath"> <i class="am-icon-cny">50</i></span>
          </li> 
          <li class="am-g am-list-item-dated">
           <a href="javascript:" class="am-list-item-hd "><img src="skin/img/fp.png" alt="饭票"> 主题套餐</a> 
           <span class="am-list-date ath"> <i class="am-icon-cny">100</i></span>
          </li> 
      </ul>
     </div>
              <!--------------------这里是我的优惠劵ID------------------------>
             <input type="hidden" name="UserCouponId" value="<?php echo $UserCoupondata[0]['couponid'];?>">
            

      <?php endif ?>
              <!--------------------这里是我的个人ID------------------------>
      <input type="hidden" name="UserPhone" value="<?php  if (!empty($_SESSION['phone'])) { echo $_SESSION['phone']; } else { echo $_SESSION['openid']; } ?>">
      
      <?php $integral = json_decode(file_get_contents(POSTAPI."API_User?dis=jf&UserPhone=".$_SESSION['phone']));?>
      <a href="javascript:;" class="am-cf adc">积分<span class="am-fr am-icon-xs red">200积分已抵用 <span class="am-icon-cny">30</span></span></a>
      <a href="javascript:;" class="am-cf adc">应付金额<span class="am-fr am-icon-xs am-icon-cny red">10</span></a>

    </div>
    
     <div class="am-shadow am-margin-vertical-sm fpa" style="display: none;">
      <p class="htit"><span class="am-icon-gift red"> </span> 饭票(满300可用)<span class="am-fr">2张可选</span> </p>
      <!-- 有饭票时 -->
      <a href="<?php echo site_url('home/card')?>" class="am-cf adc"><img src="skin/img/qu.png" alt=""> 饭票 <span class="am-icon-cny red">30</span><span class="am-icon-angle-right am-fr  am-icon-sm"></span></a>
      <!-- 没有饭票时 -->
      <a href="javascript:;" class="am-cf adc"><img src="skin/img/qu.png" alt=""> 饭票 <span class="red">未使用</span> <span class="am-icon-angle-right am-fr  am-icon-sm"></span></a>
    </div>
     <hr data-am-widget="divider" style="" class="am-divider am-divider-dashed" />

     <div class="am-shadow am-margin-vertical-sm">
      <p class="htit sad"><span class="am-icon-map-marker red"></span> 服务地址</p>

      <!-- 未添加地址这显示 -->
      <div class="am-list-news-bd">
       
           <!-- unset($_COOKIE['phone']);  -->
          <?php  if (empty($_COOKIE['phone']) && empty($_COOKIE['openid'])): ?>  
           <a href="<?php echo site_url('home/address2')?>" class="am-cf adc">添加服务地址 <span class="am-icon-angle-right am-fr  am-icon-sm"></span></a>
          <?php else: ?> 
                 <!-- 已添加过地址 -->
                 <ul class="am-list odl">
                 <?php 
                      if (!empty($_COOKIE['phone']))
                      { $foods = file_get_contents(POSTAPI."API_MenberAddress?dis=default&value=".$_COOKIE['phone']);
                      }else if(!empty($_COOKIE['openid']))
                      {$foods = file_get_contents(POSTAPI."API_MenberAddress?dis=default&value=".$_COOKIE['openid']);} 
                      if (!empty($foods)) { $food = json_decode(json_decode($foods));  }

                      if (!empty($food)): ?>
                      <li class="am-g am-list-item-dated lpt2">
                        <a href="<?php echo site_url('home/address2')?>" class="am-list-item-hd "> <?php echo $food[0]->address; ?><br>
                        <?php echo $food[0]->name; ?><br>
                        <?php echo $food[0]->userphone; ?>
                        <!--------------------这里是服务地址ID------------------------>
                        <input type="hidden" name="memberaddressid" value="<?php echo $food[0]->memberaddressid;?>">
                        <span class="am-list-date"><i class="am-icon-angle-right am-icon-sm"></i></span></a>
                      </li>
                 <?php endif ?>
                 </ul>  
          <?php endif ?>

        </div>
       
      </div>
      
      <!-- <a href="<?php echo site_url('home/payOrder')?>" class="am-u-sm-12 am-btn bgreen os">下一步</button> -->
      <button type="button" class="am-u-sm-12 am-btn bgreen os" id="pay">支付</button>
      
    </form>
    <!-- 支付方式弹框 -->
    <div class="tkp" style="display: none">
    </div>
    <div class="am-shadow fpa payway" style="display: none">
      <p class="htit sad red"><span class="am-icon-usd"></span> 支付方式</p>
      <a href="<?php echo site_url('home/paySuccess')?>" class="am-cf adc">会员卡支付 <span class="am-icon-angle-right am-fr  am-icon-xs"></span></a>
      <a href="<?php echo site_url('home/paySuccess')?>" class="am-cf adc">Apple Pay <span class="am-icon-angle-right am-fr  am-icon-xs"></span></a>
      <a href="<?php echo site_url('home/paySuccess')?>" class="am-cf adc">微信支付<span class="am-icon-angle-right am-fr  am-icon-xs"></span></a>
      <a href="<?php echo site_url('home/paySuccess')?>" class="am-cf adc">支付宝支付<span class="am-icon-angle-right am-fr  am-icon-xs"></span></a>
      <a href="<?php echo site_url('home/paySuccess')?>" class="am-cf adc">线下支付<span class="am-icon-angle-right am-fr  am-icon-xs"></span></a>
    </div>
    
  </body>
 <script src="skin/js/jquery.min.js"></script>
<script src="skin/js/amazeui.min.js"></script>
 <script>
     
      $(function(){
         // 弹出支付选项弹框
         $('#pay').click(function() {
          $('body').css('overflow-y','hidden');
          $('.tkp,.payway').fadeIn(400);
        });
         //隐藏弹框
         $('.tkp').click(function() { 
          $('body').css('overflow-y','auto');
          $('.tkp,.payway').fadeOut(400); 
        });
         //点击选项后隐藏弹框并调用支付接口
         $('.payway a').click(function() {
           $('.tkp,.payway').fadeOut(400);
           
         });

        $('.fclick').click(function() {
          console.log('.fclick');
           $('#fpc').slideToggle(400);          
        });
        $('#fpc li').click(function() {
          $('#fpc').slideUp(400);
          $('.fclick').html('饭票<span class="am-fr am-icon-xs red">'+$(this).find('.am-list-item-hd').text()+'<span class="am-icon-cny">'+$(this).find('.am-icon-cny').html()+'</span></span>');
        });
     
      })

    </script>

</html>