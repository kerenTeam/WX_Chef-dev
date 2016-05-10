<?php
defined('BASEPATH') OR exit('No direct script access allowed');
/**
* 
*/
class chef extends CI_Controller
{
	
	function __construct()
	{
		parent::__construct();
		$this->load->helper('post_helper');
		$this->load->library('session');
		$this->load->view('header');
	}
	//厨师管理订单页面
	public function index()
	{	

		$chef = file_get_contents(POSTAPI.'API_User?Account='.$_SESSION['username']);
		$data['gh'] = substr(strstr($chef,'+'),1,4);
		$ch = substr($chef,0,-6);
		$data['chef'] = json_decode(json_decode($ch.'"'),true);
		
		$this->load->view('chef/chefManage',$data);
	}
	//厨师订单详情
	public function chefOrder()
	{
		if($_GET){
			$id = $_GET['id'];
			$poorder = file_get_contents(POSTAPI.'API_Poorder?dis=xq&UserPhone='.$id);
			var_dump($poorder);
			$data['poorder'] = json_decode(json_decode($poorder),true);

			$this->load->view('chef/chefOrder',$data);
		}

	}

	// 厨师确认订单
	public function chefConfirm()
	{
		if($_GET){
			$data['POOrderId'] = $_GET['poorderid']; 
			$data['State'] = $_GET['state'];
			$poojson = json_encode($data);  
			$poorderok = curl_post(POSTAPI.'API_Poorder?dis=state',$poojson);
			if($poorderok == '"1"'){
				redirect('chef/index');
			}
		}
	}
}


?>