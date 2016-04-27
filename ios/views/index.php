<style type="text/css">
            .per{padding: 20px; border-bottom: 1px dotted #d3d3d3;}
            .title{font-weight:bold; color:#39f;}
            .nodata{display:none; height:32px; line-height:32px; text-align:center; color:#999; font-size:14px;}
            .nodata img{width:25px;}
            h2.tip{margin:20px;font-size: 18px}
        </style>
<body>
 

<!-- 注册弹框 -->
<?php if(!isset($_SESSION['phone'])):?>

<div class="tk">
  <div class="tkcontent">
    <span><img class="closetk" src="skin/img/closetk.png" alt="大厨到家"></span>
    <img src="skin/img/tk.png" class="renote" alt="大厨到家">
    <div class="tktxt">
      <div class="am-text-sm">亲，你还没有注册哟！注册即可享优惠</div>
      <a class="rega" href="<?php echo site_url('home/register')?>">立即注册</a>
      <p class="am-text-xs">已注册，直接<a class="red" href="<?php echo site_url('home/login2')?>"> 登录</a></p>
    </div>
  </div>
</div>
<?php endif;?>
<!-- banner -->
<div data-am-widget="slider" class="am-slider am-slider-default" data-am-slider='{}' >
  <ul class="am-slides">


    <li class="clone" aria-hidden="true" style="width: 372px; float: left; display: block;">
      <a href="http://www.krfer.com/WXTEST2/index.php/home/registgift"><img src="skin/img/banner1.png" class="am-img-responsive card" alt="3" draggable="false"></a>
       
    </li>
        <li class="" style="width: 372px; float: left; display: block;">
      <a href="http://www.krfer.com/WXTEST2/index.php/home/partyServ"><img src="skin/img/banner3.png" class="am-img-responsive card" alt="1" draggable="false"></a>
       
    </li>
      <li style="width: 372px; float: left; display: block;" class="am-active-slide">
      <a href="http://www.krfer.com/WXTEST2/index.php/home/backmoney"><img src="skin/img/banner2.png" class="am-img-responsive card" alt="2" draggable="false"></a>
       
    </li>
      <li style="width: 372px; float: left; display: block;">
      <a href="http://www.krfer.com/WXTEST2/index.php/home/registgift"><img src="skin/img/banner1.png" class="am-img-responsive card" alt="3" draggable="false"></a>
       
    </li>
    <li class="clone" aria-hidden="true" style="width: 372px; float: left; display: block;">
      <a href="http://www.krfer.com/WXTEST2/index.php/home/partyServ"><img src="skin/img/banner3.png" class="am-img-responsive card" alt="1" draggable="false"></a>
       
    </li>

<?php 
/*
    <?php foreach($banners as $val):?>
    <li>
      <a href="<?=site_url($val['url']);?>"><img src="<?=$val['thumb']?>" class="am-img-responsive card" alt="<?=$val['title']?>"></a>
       
    </li>
    <?php endforeach;?>
    */

 ?>
  </ul>
</div>
<!-- 菜品 -->
<ul class="am-gallery am-avg-sm-2 am-avg-md-2 am-avg-lg-4 am-gallery-default am-shadow veg" data-am-gallery="{ pureview: true }" >
  <li>
    <a href="<?php echo site_url('home/cailan')?>">
      <div class="am-gallery-item bred">
        <img src="skin/img/menu.png" alt="大厨到家"/>
        <h3 class="am-gallery-title">点菜</h3>
      </div>
    </a>
  </li>
  <li>
    <a href="<?php echo site_url('home/cailan')?>#fe7ad9a9-1bec-4929-b160-85f9a784f527">
      <div class="am-gallery-item byellow">
        <img src="skin/img/fork.png" alt="大厨到家"/>
        <h3 class="am-gallery-title">套餐</h3>
      </div>
    </a>
  </li>
  <li>
    <a href="<?php echo site_url('home/party')?>">
      <div class="am-gallery-item bgreen">
        <img src="skin/img/food.png" alt="大厨到家"/>
        <h3 class="am-gallery-title">宴会定制</h3>
      </div>
    </a>
  </li>
  <li>
    <a href="<?php echo site_url('home/cailan')?>#d4599ab9-5dbf-4faa-aa79-d8b46d61f887">
      <div class="am-gallery-item bblue">
        <img src="skin/img/tea.png" alt="大厨到家"/>
        <h3 class="am-gallery-title">燕鲍翅</h3>
      </div>
    </a>
  </li>
</ul>
<!-- 热销 -->
<div class="am-g am-shadow hot">
  <p class="htit"><img src="skin/img/fire.png" alt=""> 特色服务</p>
  <div class="am-u-sm-4">
    <a href="<?php echo site_url('home/vipCard')?>" class="am-thumbnail">
      <img class="am-circle" src="skin/img/vip.png"/>
      <p class="purple">会员</p>
    </a>
  </div>
  <div class="am-u-sm-4">
    <a href="<?php echo site_url('home/custom')?>" class="am-thumbnail">
      <img class="am-circle" src="skin/img/kf.png"/>
      <p class="sc">客服</p>
    </a>
  </div>
  <div class="am-u-sm-4">
    <a href="<?php echo site_url('home/priceSearch')?>" class="am-thumbnail">
      <img class="am-circle" src="skin/img/cj.png"/>
      <p class="pink">菜价查询</p>
    </a>
  </div>
  
</div>
<div class="am-shadow">
  <p class="htit"><span class="am-icon-eye yellow"></span> 实时菜价<a href="<?php echo site_url('home/priceSearch')?>" class="am-fr am-text-xs gray">更多》</a></p>
  <div class="d1" id="div1" onmouseover="clearInterval(timer)" onmouseout="timer=setInterval(mar,30)">
    <span class="div2" id="div2"> 

<?php if(!empty($caijia)):?>
    <?php foreach($caijia as $val):?>
    <a href="<?php echo site_url('home/price?id=').$val->foodmarketid."&name=".$val->name;?>"><?=$val->name?> <?=$val->price;?>元/<?=$val->unit;?></a> 
    <?php endforeach;?>
<?php endif;?>
     </span><span id="div3" class="div2"></span>
  </div>
  <div>
  </div>
</div>
<div class="am-g life">
  <p class="htit am-shadow"><img src="skin/img/heart.png" alt=""> 精品生活</p>
</div>
<!-- 图文加载 -->
    <div class="container am-shadow">
      <div class="am-g life">
            <div class="demo">
                <div id="lists"> 

                </div> 
                <div class="nodata"></div>
            </div>   </div> 
    </div>
<!-- footer -->
<div data-am-widget="navbar" class="am-navbar am-cf am-navbar-default nav-bot">
  <ul class="am-navbar-nav am-cf am-avg-sm-4 am-shadow">
    <li >
      <a href="<?php echo site_url('home/index')?>" class="active">
        <span class=""><img src="skin/img/home2.png" alt=""></span>
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
      <a href="<?php echo site_url('home/search')?>">
        <span class=""><img src="skin/img/ss.png" alt=""></span>
        <span class="am-navbar-label">搜索</span>
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
<script src="skin/js/jquery.min.js"></script>
<script src="skin/js/amazeui.min.js"></script>

<script type="text/javascript">
var i=1
  $(function(){
    $('.closetk').bind('click', function() {
       $('.tk').css('display','none');
      // $('.tk').fadeOut('400');
    })
   //加载
     var totalpage = 6; //总页数，防止超过总页数继续滚动
                var winH = $(window).height(); //页面可视区域高度 

                $(window).scroll(function() {
                    if (i < totalpage) { // 当滚动的页数小于总页数的时候，继续加载
                        var pageH = $(document.body).height();
                        var scrollT = $(window).scrollTop(); //滚动条top 
                        var aa = (pageH - winH - scrollT) / winH;
                        if (aa < 0.01) {
                           getJson(i)
                        }
                    } else { //否则显示无数据
                        showEmpty();
                    }
                });
                getJson(0); //加载第一页


  });

            function getJson(page) {
                $(".nodata").show().html("<img src='http://www.sucaihuo.com/Public/images/loading.gif'/>");
                $.getJSON("<?=site_url('home/quality');?>", {page: i}, function(json) {
                  console.log(json);
                    if (json) {
                        var str = "";
                        $.each(json, function(index, array) {
                            var str = "<figure> <a href='<?php echo site_url('home/lifeInfo?id=');?>";
                            var str = str + array['boutiqueid']+"'><img src='<?php echo IP;?>" + array['backgoungimg'] + "'><figcaption>" + array['name'] + "<br><span class='am-text-sm'>"+ array['abstract'] + "</span></figcaption></a></figure>";
                            $("#lists").append(str);
                        });
                       setTimeout(function(){ $(".nodata").hide();},50000);
                    } else {
                       showEmpty();
                    }
                });
                i++;
            }
            function showEmpty() {
               setTimeout(function(){  $(".nodata").show().html("别滚动了，已经到底了。。。");},10000);
            }


var s,s2,s3,timer;
function init(){
s=getid("div1");
s2=getid("div2");
s3=getid("div3");
s3.innerHTML=s2.innerHTML;
timer=setInterval(mar,30)
}
function mar(){
if(s2.offsetWidth<=s.scrollLeft){
s.scrollLeft-=s2.offsetWidth;
}else{s.scrollLeft++;}
}
function getid(id){
return document.getElementById(id);
}
window.onload=init;
</script>

</body>
</html>