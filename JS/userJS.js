var btn=document.getElementsByTagName("button")[0];
var inputs=document.getElementsByTagName("input");
var title=document.getElementsByClassName("title");
btn.onclick=function(){
// input中为空
//debugger;
	var bizOrderNo=inputs[0].value;
	var agentMobile=inputs[1].value;
	fn_clean();
	if(bizOrderNo==""){
		title[0].style.color="#f31036";
	}
	if(agentMobile==""){
		title[1].style.color="#f31036";
	}
	function fn_clean(){
		title[0].style.color="";
		title[1].style.color="";
	}
	//debugger;
	//新办用户
	//税号：91410108MA3X69CC48
	//电话：18603837703
	//延期用户
	//bizOrderNo:410116581714940,
	//agentMobile:15232012021
	var bizOrderNo = $("#sbh").val();
	var agentMobile = $("#number").val();
	var params = {
		bizOrderNo:bizOrderNo,
		agentMobile:agentMobile
	}
//input中不为而空

	if(agentMobile!==""&bizOrderNo!==""){
		$.ajax({
			type:'post',
			url: 'http://218.28.192.119:8081/xxh/http/selectTapplyByParam.do',
			//async: false,
			//data:jsonStr,
			//processData: false,
			contentType:"application/json",
			cache:false,
			data:params,
			dataType:'jsonp',
			error:function(){
					alert("请求失败");
				},
			success:function(data){
				debugger;
				// encodeURI 编码(汉字防乱码)
                window.location.assign(encodeURI(location.href));
            // 业务申请页面
				var bizOrderNo = $("#sbh").val();//申请单号
				var com_name=data.data.com_name;//单位名称
				var biz_order_time=data.data.biz_order_time;//申请时间
				var msg=data.msg;//业务办理状态
			//详情页面
				var tax_reg_no=data.data.tax_reg_no;//统一社会代码号
				var agent=data.data.agent;//经办人姓名
				var agent_mobile=data.data.agent_mobile;//经办人电话
				var biz_total_cost=data.data.biz_total_cost;//业务费用
				var mail_status=data.data.mail_status;//邮寄状态
				var courier_firm_name=data.data.courier_firm_name;//快递公司
				var courier_order_no=data.data.courier_order_no;//快递单号
				var invoice_acquire_status=data.data.invoice_acquire_status;//发票领取状态
				var dzfp_flag=data.data.dzfp_flag;//发票类型
			//查询链接
				if(data.data.biz_type==1){
					window.location.href="xbshenqing.html?bizOrderNo="+bizOrderNo
						+"&com_name="+com_name
						+"&biz_order_time=" + biz_order_time
						+"&tax_reg_no="+tax_reg_no
						+"&agent="+agent
						+"&agent_mobile="+agent_mobile
						+"&biz_total_cost="+biz_total_cost
						+"&msg="+msg
						+"&mail_status="+mail_status
						+"&courier_firm_name="+courier_firm_name
						+"&courier_order_no="+courier_order_no
						+"&invoice_acquire_status="+invoice_acquire_status
						+"&dzfp_flag="+dzfp_flag
						;
				}else if(data.data.biz_type==2){
					window.location.href="yqshenqing.html?bizOrderNo="+bizOrderNo
						+"&com_name="+com_name
						+"&biz_order_time=" + biz_order_time
						+"&tax_reg_no="+tax_reg_no
						+"&agent="+agent
						+"&agent_mobile="+agent_mobile
						+"&biz_total_cost="+biz_total_cost
						+"&msg="+msg
						+"&dzfp_flag="+dzfp_flag
						;
				}else{
					window.location.href="bgshenqing.html?bizOrderNo="+bizOrderNo
						+"&com_name="+com_name
						+"&biz_order_time=" + biz_order_time
						+"&tax_reg_no="+tax_reg_no
						+"&agent="+agent
						+"&agent_mobile="+agent_mobile
						+"&biz_total_cost="+biz_total_cost
						+"&msg="+msg
						+"&dzfp_flag="+dzfp_flag
						;
				}
			}
		})
	}
};