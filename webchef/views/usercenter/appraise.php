
    <div class="center">
      <div class="personal clear">
          <div class="per-pl">
            <div class="per-nav">
              <h1><a href="<?=site_url('usercenter/personal');?>">我的主页</a></h1>
            </div>
            <div class="per-nav">
              <h1>订单中心</h1>
              <ul>
                  <li><a href="<?=site_url('usercenter/myorder');?>">我的订单</a></li>
                  <!-- <li><a href="<?=site_url('home/collection');?>">我的收藏</a></li> -->
               <!--    <li><a href="<?=site_url('usercenter/appraise');?>" class="active">我的评价</a></li>
                  <li><a href="<?=site_url('usercenter/back');?>">我的退款</a></li> -->
              </ul>
            </div>
            <div class="per-nav">
              <h1>我的账户</h1>
              <ul>
                  <!-- <li><a href="<?=site_url('home/balance');?>">我的余额</a></li> -->
                  <li><a href="<?=site_url('usercenter/coupon');?>">优惠劵</a></li>
                  <li><a href="<?=site_url('usercenter/member');?>">会员卡</a></li>
              </ul>
            </div>
            <div class="per-nav per-last">
              <h1>设置</h1>
              <ul>
                  <li><a href="<?=site_url('usercenter/userInfo');?>">个人信息</a></li>
                  <li><a href="<?=site_url('usercenter/address');?>">收货地址</a></li>
              </ul>
            </div>
          </div>
          <div class="per-pr">
              
              
              <!--  评价 -->
              <div class="appraise">
                  <div class="crr-tit clear">
                    <ul>
                        <li class="active">我的评价</li>
                    </ul>
                  </div>
                  <div class="per-basket">
                      <!-- 没有订单的时候 -->
                          <!-- <p><img src="skin/img/clz.png"> 您的菜篮子空空的哦，现在就去 <a href="javascript:;">订餐</a> 吧~</p> -->
                        <table class="am-table am-table-striped am-table-hover middle">
                        <tbody>
                            <tr class="per-table">
                                <!-- <td class="old-food"><img src="skin/img/orderimg_03.png"></td> -->
                                <td>
                                    <p>订单号:25644448557</p>
                                    <h2>尖椒回锅肉 (X1) <span class="hcolor">￥32</span></h2>
                                    <h2>尖椒回锅肉 (X1) <span class="hcolor">￥32</span></h2>
                                    <h2>尖椒回锅肉 (X1) <span class="hcolor">￥32</span></h2>
                                </td>
                                <td>
                                    <p>提交时间:2016-05-23</p>
                                    <p>预约时间:2016-05-23</p>
                                </td>
                                <td><span class="grey">好评</span></td>
                                <td><a href="<?=site_url('order/info');?>" class="am-btn am-btn-danger am-radius">再来一单</a>
                                <a href="javascript:;" class="am-btn am-btn-warning am-radius">删除</a></td>
                            </tr>
                          </tbody>
                          </table>
              </div>
              <!-- 足迹 -->
              <div class="per-ctt">
                  <div class="crr-tit clear">
                    <ul>
                        <li class="active">美食足迹</li>
                    </ul>
                  </div>
                  <ul class="am-avg-sm-4 footmarks">
                      <li>
                        <a href="<?=site_url('order/info');?>">
                          <div class="footmark">
                          
                              <img src="skin/img/orderimg_03.png">
                              <h2>回锅肉</h2>
                              <span class="index-num"><i></i></span>

                          </div>
                        </a>
                      </li>
                      <li>
                        
                        <a href="<?=site_url('order/info');?>">
                          <div class="footmark">
                          
                              <img src="skin/img/orderimg_03.png">
                              <h2>回锅肉</h2>
                              <span class="index-num"><i></i></span>

                          </div>
                        </a>
                      </li>
                      <li>
                        
                        <a href="<?=site_url('order/info');?>">
                          <div class="footmark">
                          
                              <img src="skin/img/orderimg_03.png">
                              <h2>回锅肉</h2>
                              <span class="index-num"><i></i></span>

                          </div>
                        </a>
                      </li>
                      <li>
                        
                        <a href="<?=site_url('order/info');?>">
                          <div class="footmark">
                          
                              <img src="skin/img/orderimg_03.png">
                              <h2>回锅肉</h2>
                              <span class="index-num"><i></i></span>

                          </div>
                        </a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      </div>
  </div>


<script src="skin/js/jquery.min.js"></script>