
<?php  
defined('BASEPATH') OR exit('No direct script access allowed');
/**
 * @Author: Harris-Aaron
 * @Date:   2016-05-25 11:28:01
 * @Last Modified by:   Harris-Aaron
 * @Last Modified time: 2016-05-27 18:28:52
 */

// if (DeBug == 1) {
//     //报告所有错误
//     error_reporting(E_ALL);
// } else if (DeBug == 0) {
//     //禁用错误报告
//     error_reporting(0);
// } else {
//     //报告运行时错误
//     error_reporting(E_ERROR | E_WARNING | E_PARSE);
// }

class WxPay extends CI_Controller{
	function __construct()
	{
        parent::__construct();
        // * 引入config配置项
        // $this->config->load('wechat');
        // $options = $this->config->item('wechat');
        // $options['logcallback'] = 'logdebug';
        // * 引入自定义lib
        $this->load->library('WxPayApi');
        $this->load->library('NativePay'); 
        $this->load->helper('post_helper');
        $this->load->view('header'); 
	}

    function nativePay()
    {   
        //$data['ceredetails']=curl_post(POSTAPI.'API_Poorder?dis=dd',$OrderAllData);//返回总价
        //$this->load->view('shopcar/pay',$data);
		$this->load->view('shopcar/pay');
	}

    function isOk()
    {   
        //$data['ceredetails']=curl_post(POSTAPI.'API_Poorder?dis=dd',$OrderAllData);//返回总价
        //$this->load->view('shopcar/pay',$data);
        $this->load->view('shopcar/isOk');
    }


}