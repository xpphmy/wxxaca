var btn=document.getElementsByTagName("button")[0];
	btn.onclick=function(){
	 var Request = new Object();
	   Request = GetRequest();
	   var flag1=Request["bizOrderNo"];
	   var flag2=Request["com_name"];
	   var flag3=Request["biz_order_time"];
	   var flag4=Request["msg"];
	   var flag5=Request["tax_reg_no"];
	   var flag6=Request["agent"];
	   var flag7=Request["agent_mobile"];
	   var flag8=Request["biz_total_cost"];
	   var flag13=Request["dzfp_flag"];//发票类型
	window.location.href="yqxiangqing.html?bizOrderNo="+flag1
		+"&com_name="+flag2
		+"&biz_order_time="+flag3
		+"&msg="+flag4
		+"&tax_reg_no="+flag5
		+"&agent="+flag6
		+"&agent_mobile="+flag7
		+"&biz_total_cost="+flag8
		+"&dzfp_flag="+flag13
		;
	};