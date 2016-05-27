
<?php  
defined('BASEPATH') OR exit('No direct script access allowed');
/**
 * @Author: Harris-Aaron
 * @Date:   2016-05-25 11:28:01
 * @Last Modified by:   Harris-Aaron
 * @Last Modified time: 2016-05-25 11:50:59
 */



class orderWxPay extends CI_Controller{
	
    function __construct()
	{
        parent::__construct();
        $this->load->helper('post_helper');
    
	}

    public function orderpay($value='')
    {
        if($_POST){
            echo "<pre>";
            //var_dump($_POST);
            $foodid = $this->input->post('foodid');
            $numbers = $this->input->post('numbers');
            if($foodid){
                $foodOrder = array_combine($foodid,$numbers);
                $foodJson = array();
                foreach ($foodOrder as $fid => $fnums)
                { $foodJson[] = "{'FoodId':"."'".$fid."'".","."'FoodNumber':"."'".$fnums."'"."}"; }
            }else{
                $foodJson = '[]';
            }
          
            // 伴餐
            if($this->input->post('eleg')){
                $foodJsondata['DinnerId'] = $this->input->post('eleg');
            }else{
                $foodJsondata['DinnerId'] = '';
            }
            // 服务男
            if($this->input->post('boy')){
                $foodJsondata['manWaiter'] = $this->input->post('boy');
            }else{
                $foodJsondata['manWaiter'] = 0;
            }
            // 服务员女
            if($this->input->post('girl')){
                $foodJsondata['wumenWaiter'] = $this->input->post('girl');
            }else{
                $foodJsondata['wumenWaiter'] = 0;
            }
            // 所有菜品、
            $foodJsondata['poorderentry'] = $foodJson;
           // echo "<pre>";
            // 庆典id
            if($this->input->post('cereid')){
                $foodJsondata['CeleId'] = $this->input->post('cereid');
                // 庆典详情
                if(isset($_SESSION['ceremoney'])){
                     $cele = $_SESSION['ceremoney']['celeentry'];
                     $celearr = array();
                     foreach($cele as $k=>$v){
                        foreach($v as $key=>$val){
                            $celearr[] = $val;
                        }
                     }
                     $arr = array_no_cere($celearr);
                     $c = array();
                     foreach($arr as $k=>$v){
                        $c[] = $v;
                     }
                     $foodJsondata['celeentry'] = $c;
                }else{
                     $foodJsondata['celeentry'] = '[]';
                }
            }else{
                $foodJsondata['CeleId'] = '';
                $foodJsondata['celeentry'] = '[]';
            }
            
              
            // 手机
            $foodJsondata['UserPhone'] =$_SESSION['phone'];
            // 应付金额
            $foodJsondata['MoneyAll'] = $this->input->post('yfje');
            // 是否使用积分
            if($this->input->post('jifen')){
                 $foodJsondata['Integral'] = '1';
            }else{
                $foodJsondata['Integral'] = 0;
            }
          
            // 优惠卷
            if( $this->input->post('couponid')){
                $foodJsondata['UserCouponId'] = $this->input->post('couponid');
            }else{
                $foodJsondata['UserCouponId'] = '';
            }
            // 用餐时间
            if( $this->input->post('time')){
                $foodJsondata['AppointmentTime'] = $this->input->post('riqi').' '. $this->input->post('time');
            }else{
                $foodJsondata['AppointmentTime'] = 0;
            }
            // 地址
            $foodJsondata['MenberAddressId'] = $this->input->post('memberaddressid');
            // 支付方式
            $foodJsondata['PaymentMethod'] =  $this->input->post('PaymentMethod');


            $OrderAllData = str_replace('"{"','{"',str_replace('"}"','"}',str_replace('}"]','}]',str_replace('["{','[{',str_replace("'",'"',json_encode($foodJsondata))))));

            var_dump($OrderAllData);
            exit;
            //得到金额
            $isOrderOk=curl_post(POSTAPI.'API_Poorder?dis=dd',$OrderAllData);
            // $_SESSION['rePayData'] = json_decode(str_replace(']"',']',str_replace('"[','[',str_replace('\"','"',$isOrderOk))),TRUE);
            
              var_dump($isOrderOk);
            exit;
            $this->load->view('order/payOrder');
           

        }
    }


}