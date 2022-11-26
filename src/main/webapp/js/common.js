$(document).ready(function(e) {
	/* 下拉导航（jQuery） */
	$(".nav ul").hide();									// 导航下拉隐藏
	$(".nav").hover(function(){								// 鼠标经过
		$(".nav ul").stop(false,true).slideDown();			// 下拉
	},function(){
		$(".nav ul").stop(false,true).slideUp();			

	});
	
	/* 点击按钮播放视频 */
	var header_video = document.getElementById("header_video");
	var videoBtn = document.getElementById("videoBtn");
	videoBtn.onclick = function(){
		if (header_video.paused) {											// 判定
																			// video
																			// 控件的播放状态
			this.style.backgroundImage = "url('images/pause.png')";
			header_video.play();											// 播放
		}else{
			this.style.backgroundImage = "url('images/play.png')";
			header_video.pause();											// 暂停
		}
	}
	
	/* 登录、注册模态框 */
	// 模态框
	var regBtn = document.getElementById('regBtn');							// 找到注册按钮
	oReg = null;
	oLogin = null;
	oBg = null;
	// 点击注册按钮时, 打开注册模态框
	regBtn.onclick = function(){											
		// 创建蒙版
		oBg = document.createElement('div');								// 创建一个Div（半透明蒙版：用于出现模态框时，遮挡底部元素）
		oBg.id = 'oBg';														// 给蒙版设置
																			// id
		oBg.style.width = window.innerWidth + 'px';							// 给蒙版设置宽（等同于窗口显示区的宽度。）
		oBg.style.height = document.body.offsetHeight + 'px';				// 给蒙版设置高（等同于整个文档的内容+内填充+边框的总高度）
		document.body.appendChild(oBg);										// 向Body中添加此蒙版
		
		// 创建注册模态框
		if(oReg){ return; }													// 如果注册模态框已存在，结束方法的执行
		oReg = document.createElement('div');								// 创建一个Div（注册面板，用于存放注册相关元素的容器）
		// console.log(oReg);
		oReg.id = 'oReg';													// 给注册面板设置
																			// id
		// 向注册面板中添加表单元素
		oReg.innerHTML = "<form action='' method='post' name='regForm'>\
		<h4 class='regTitle'>Summer Diary - Register</h4>\
		<table  cellpadding='10' cellspacing='0' id='regtbl'>\
			<tr height='60'><td width='18%'>Account：</td><td  width='36%'><input type='text' name='username' onblur='checkUser(this.value)' onfocus='showtips(this)'></td><td width='2%'><span class='star'>＊</span></td><td><span class='tips' id='usernametips'>用户名必须为6-16个字符，不能以数字开头，后面跟数字、字母、下划线、横杠，不能有特殊字符</span></td></tr>\
			<tr height='60'><td>Password：</td><td><input type='text' name='pwd1' onblur='checkPwd1(this)' onfocus='showtips(this)'></td><td><span class='star'>＊</span></td><td><span class='tips' id='pwdtips'> 至少6位，包括至少1个大写字母、1个小写字母、1个数字、1个特殊字符</span></td></tr>\
			<tr height='60'><td>Confirm Pass：</td><td colspan='3'><input type='text' name='pwd2' onblur='checkPwd2(this)'></td></tr>\
			<tr height='60'><td>E-mail：</td><td><input type='text' name='email' onblur='checkEmail(this)' onfocus='showtips(this)'></td><td><span class='star'>＊</span></td><td><span class='tips' id='emailtips'>数字、字母、下划线、横杠</span></td></tr>\
			<tr height='60'><td>Address：</td><td colspan='3'><select id='province' name='province' onchange='getCity(this.value)'></select><select id='city' name='city'></select></td></tr>\
			<tr height='60'><td>Question：</td><td><input type='text' name='question'  onblur='checkQuestion(this.value,this.form.answer.value)' onfocus='showtips(this)'></td><td colspan='2'><span class='tips' id='questiontips'>如：我的工作单位</span></td></tr>\
			<tr height='60'><td><span>Answer：</span></td><td><input type='text' name='answer' onblur='checkQuestion(this.form.question.value,this.value)' onfocus='showtips(this)'></td><td colspan='2' class='tips' id='answertips'>如：xx传媒有限公司</td></tr>\
			<tr height='100'><td colspan='4' style='text-align:center'><input type='button' onclick='save()'></td></tr>\
		</table>\
		<span id='closeregbtn'></span>\
		</form>\
		";
		document.body.appendChild(oReg);									// 向Body中添加此注册面板
		oReg.style.left = (window.innerWidth-oReg.offsetWidth)/2 + 'px';										// 设置注册面板的定位位置：横方向居中
		oReg.style.top = (window.innerHeight-oReg.offsetHeight)/2 + document.documentElement.scrollTop + 'px';	// 设置注册面板的定位位置：垂直方向居中（此处加上页面滚动的距离
																												// document.documentElement.scrollTop）
		// 延迟0.1秒，位置定位好之后，再进行缩放动画
		setTimeout(() => {
			oReg.style.transform = "scale(1)";
		}, 100);
		

		// 关闭按钮
		var closeregbtn = document.getElementById('closeregbtn');				// 找到关闭按钮
		closeregbtn.onclick = function(){										// 关闭按钮点击时
			oReg.style.transform = "scale(0)";									// 注册面板执行
																				// 放大or缩小动画
			oReg.style.opacity = "0";											// 注册面板透明度变为
																				// 0
			oBg.style.display = "none";											// 蒙版显示为无
			// 延迟1秒，待动画执行完毕后再到Body中移除 蒙版 和 注册面板。
			setTimeout(() => {
				document.body.removeChild(oReg);
				document.body.removeChild(oBg);
				oReg = null;													// 销毁注册面板对象
			}, 1000);
		}


		var usernametips = document.getElementById("usernametips");				// 找到
																				// 用户名提示
		var pwdtips = document.getElementById("pwdtips");						// 找到
																				// 密码提示
		var emailtips = document.getElementById("emailtips");					// 找到
																				// 邮箱提示
		var questiontips = document.getElementById("questiontips");				// 找到
																				// 修改密码提示
		var answertips = document.getElementById("answertips");					// 找到
																				// 答案提示
			
		// 获取省和直辖市，在两个select控件中加载 option 项
		getProvince();			
	}
	
	// 窗口发生滚动时
	window.onscroll = window.onresize = function(){
		// 注册面板保持居中
		if(oReg){
			oReg.style.left = (window.innerWidth-oReg.offsetWidth)/2 + 'px';
			oReg.style.top = (window.innerHeight-oReg.offsetHeight)/2 + document.documentElement.scrollTop + 'px';
		}		
	}
	
	
	var loginBtn = document.getElementById('loginBtn');					// 找到登录按钮
	
	// 点击登录按钮时, 打开登录模态框
	loginBtn.onclick = alert_login;

});

var flag_user=true;			// 记录用户是否合法
var flag_pwd=true;			// 记录密码是否合法
var flag_repwd=true;		// 确认密码是否通过
var flag_email=true;		// 记录E-mail地址是否合法
var flag_question=true;		// 记录密码提示问题是否输入
var flag_answer=true;		// 记录提示问题答案是否输入


/**
 * 功能：验证用户名
 * 
 * @param username
 * @returns
 */
function checkUser(username){
	var usernamePattern = /^[a-zA-Z_][\w-]{5,15}$/;		// 定义正则表达式对象，用户名必须为6-16个字符，不能以数字开头，后面跟数字、字母、下划线、横杠，不能有特殊字符
	if (username == "") {								// 用户名为空时
		usernametips.style.color = "#ca4341";			// 提示标签字体为红色
		usernametips.innerHTML = "用户名不能为空！";			// 提示内容为：用户名不能为空！
		flag_user = false;								// 用户名不合法
	}else{												// 不为空时
		if(usernamePattern.exec(username)){							// 验证正则表达式
			// 验证成功，则进行异步操作
			var loader = new net.AjaxRequest("UserServlet?action=checkUser&username=" + username + "&nocache=" + new Date().getTime(),deal,onerror,"GET");
			flag_user = true;
		}else{
			usernametips.style.color = "#ca4341";
			usernametips.innerHTML = "您输入的用户名格式有误！";
			flag_user = false;
		}
	}
}

/**
 * 功能：获取返回的检测结果
 * 
 * @returns
 */
function deal(){
	result = this.req.responseText;								// 获取返回的检测结果
	result=result.replace(/\s/g,"");								// 去除Unicode空白符
	var username = regForm.username.value;
	if(result=="1"){											// 当用户名没有被注册
		usernametips.style.color = "#218c74";
		usernametips.innerHTML= "恭喜您，&nbsp;【" + username + "】&nbsp;未被注册！";	    // 设置提示文字
		flag_user=true;		
	}else{												// 当用户名已经被注册
		usernametips.style.color = "#ca4341";
		usernametips.innerHTML=result;		// 设置提示文字
		flag_user=false;
	}	
}

/**
 * 功能：错误处理函数
 * 
 * @returns
 */
function onerror(){		// 错误处理函数
	alert("出错了");
}

/**
 * 功能：控件获取焦点时，显示用户名、密码、邮箱的输入提示
 * 
 * @param ele
 * @returns
 */
function showtips(ele){
	if (ele.name == "username") {
		usernametips.style.color = "#333";
		usernametips.innerHTML= "用户名必须为6-16个字符，不能以数字开头，后面跟数字、字母、下划线、横杠，不能有特殊字符";	    // 设置提示文字
	}else if (ele.name == "pwd1") {
		pwdtips.style.color = "#333";
		pwdtips.innerHTML= " 至少6位，包括至少1个大写字母、1个小写字母、1个数字、1个特殊字符";	    // 设置提示文字
	}else if (ele.name == "email") {
		emailtips.style.color = "#333";
		emailtips.innerHTML = "数字、字母、下划线、横杠";	
	}else if (ele.name == "question") {
		questiontips.style.color = "#333";
		questiontips.innerHTML = "如：我的工作单位";
	}else if (ele.name == "answer") {
		answertips.style.color = "#333";
		answertips.innerHTML = "如：xx传媒有限公司";
		
	}
	
}

/**
 * 功能：验证密码
 * 
 * @param pwd1
 * @returns
 */
function checkPwd1(pwd1){
	var pwdPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*?]).*$/;		//至少6位，包括至少1个大写字母、1个小写字母、1个数字、1个特殊字符
	if (pwd1.value == "") {
		pwdtips.style.color = "#ca4341";
		pwdtips.innerHTML = "密码不能为空！";
		flag_pwd = false;
	}else{
		if(!pwdPattern.exec(pwd1.value)){					
			pwdtips.style.color = "#ca4341";
			pwdtips.innerHTML = "您输入的密码格式有误！";
			flag_pwd = false;
		}else {
			pwdtips.style.color = "#333";
			pwdtips.innerHTML = "至少6位，包括至少1个大写字母、1个小写字母、1个数字、1个特殊字符";
			flag_pwd = true;
		}
	} 
}

/**
 * 功能：验证确认密码
 * 
 * @param pwd2
 * @returns
 */
function checkPwd2(pwd2){
	var pwdPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*?]).*$/;
	if (pwd2.value == "") {
		pwdtips.style.color = "#ca4341";
		pwdtips.innerHTML = "密码确认不能为空！";
		flag_repwd = false;
	}else{
		if(!pwdPattern.exec(pwd2.value)){					
			pwdtips.style.color = "#ca4341";
			pwdtips.innerHTML = "您输入的确认密码格式有误！";
			flag_repwd = false;
		}else {
			if (regForm.pwd1.value != regForm.pwd2.value) {					
				pwdtips.style.color = "#ca4341";
				pwdtips.innerHTML = "两次密码输入不一致！";
				flag_repwd = false;
			}else {
				pwdtips.style.color = "#333";
				pwdtips.innerHTML = "至少6位，包括至少1个大写字母、1个小写字母、1个数字、1个特殊字符";
				flag_repwd = true;
			}
		}
			
	}
}

/**
 * 功能：验证邮箱
 * 
 * @param email
 * @returns
 */
function checkEmail(email){
	var emailPattern = /^[\w-]+([\.[\w-]+)*@[\w-]+(\.[\w-]+)*(\.[a-zA-Z]{2,})$/;
	if (email.value == "") {
		emailtips.style.color = "#ca4341";
		emailtips.innerHTML = "密码邮箱不能为空！";
		flag_email = false;
	}else{
		if(!emailPattern.exec(email.value)){					
			emailtips.style.color = "#ca4341";
			emailtips.innerHTML = "您输入的邮箱格式有误！";
			flag_email = false;
		}else {
			emailtips.style.color = "#333";
			emailtips.innerHTML = "数字、字母、下划线、横杠";
			flag_email = true;
		}		
	}
}

/** ********************************************************************************************************** */
// 获取省份
function getProvince(){
	var loader = new net.AjaxRequest("UserServlet?action=getProvince&nocache=" + new Date().getTime(),deal_getProvince,onerror,"GET");
}
function deal_getProvince(){
	provinceArr = this.req.responseText.split(",");			// 将获取的省份名称字符串分割为数组
	for (var i = 0; i < provinceArr.length; i++) {			// 通过循环将数组中的省份名称添加到下拉列表中
		document.getElementById("province").options[i] = new Option(provinceArr[i],provinceArr[i]);
	}
	if (provinceArr[0]!="") {							
		getCity(provinceArr[0]);							// 获取市县
	}
}		
/** ********************************************************************************************************** */
// 获取市县
function getCity(selProvince){
	var loader=new net.AjaxRequest("UserServlet?action=getCity&parProvince="+selProvince+"&nocache="+new Date().getTime(),deal_getCity,onerror,"GET");
}
function deal_getCity(){
	cityArr=this.req.responseText.split(",");// 分割字符串
	document.getElementById("city").length=0;	// 清空下拉列表
	for(i=0;i<cityArr.length;i++){// 设置下拉列表框的列表项
		document.getElementById("city").options[i]=new Option(cityArr[i],cityArr[i]);
	}
}
/** ********************************************************************************************************** */
// 验证提示问题答案
function checkQuestion(str_q,str_a){
	if(str_q!="" && str_a==""){// 当密码提示问题不为空，而提示问题答案为空时
		answertips.style.color = "#ca4341"
		answertips.innerHTML="请输入提示问题答案！";// 设置提示信息
		flag_answer=false;
	}else if(str_q=="" && str_a !=""){// 当密码提示问题为空，而提示问题答案不为空时
		questiontips.style.color = "#ca4341"
		questiontips.innerHTML="请输入密码提示问题！";// 设置提示信息
		flag_question=false;
	}else{
		answertips.style.color = "#333"
		answertips.innerHTML="如：xx传媒有限公司";// 清空提示信息
		questiontips.style.color = "#333"
		questiontips.innerHTML="如：我的工作单位";// 清空提示信息
		flag_answer=true;
		flag_question=true;
	}
}
/** ********************************************************************************************************** */
// 保存用户注册信息
function save(){
	if(flag_user && flag_pwd && flag_repwd && flag_email && flag_question && flag_answer){	// 所有数据都符合要求时
		var param = "username=" + regForm.username.value +
					"&pwd=" + regForm.pwd2.value +
					"&email=" + regForm.email.value +
					"&question=" + regForm.question.value +
					"&answer=" + regForm.answer.value +
					"&city=" + regForm.city.value; 		// 组合参数
		var loader=new net.AjaxRequest("UserServlet?action=save&nocache="+new Date().getTime(),deal_save,onerror,"POST",param);
	}else{
		alert("您填写的注册信息不合法，请确认！");
		console.log(flag_user+"\n"+flag_pwd+"\n"+flag_repwd+"\n"+flag_email+"\n"+flag_question+"\n"+flag_answer);
	}
}
// 重置表单函数
function form_reset(form){
	form.reset();		// 重置表单
	getProvince();		// 获取省和直辖市
}
function deal_save(){
	alert(this.req.responseText);		// 弹出提示信息
	document.body.removeChild(oReg);	// 移除注册面板
	document.body.removeChild(oBg);		// 移除蒙版
	oReg = null;						// 销毁注册面板
	alert_login();						// 弹出登录面板
}

// 登录面板
function alert_login(){
	oLogin = document.createElement('div');
	// console.log(oLogin);
	oLogin.id = 'oLogin';
	oLogin.innerHTML = "<form action='' method='post' name='loginForm'>\
	<h4 class='loginTitle'>Summer Diary - Login</h4>\
	<table  cellpadding='10' cellspacing='0' id='logintbl'>\
		<tr height='60'><td width='28%'>Account：</td><td  width='36%'><input type='text' name='username' onblur='checkLoginUser(this.value)'></td><td width='2%'><span class='star'>＊</span></td><td><span class='tips' id='loginusernametips'>&nbsp;</span></td></tr>\
		<tr height='60'><td>Password：</td><td><input type='text' name='pwd' onblur='checkLoginPwd(this.value)'></td><td><span class='star'>＊</span></td><td><span class='tips' id='loginpwdtips'>&nbsp;</span></td></tr>\
		<tr height='100'><td colspan='4' style='text-align:center'><input type='button' onclick='loginSubmit(this.form)'></td></tr>\
	</table>\
	<span id='closeloginbtn'></span>\
	</form>\
	";
	document.body.appendChild(oLogin);
	oLogin.style.left = (window.innerWidth-oLogin.offsetWidth)/2 + 'px';
	oLogin.style.top = (window.innerHeight-oLogin.offsetHeight)/2 + document.documentElement.scrollTop + 'px';
	setTimeout(() => {
		oLogin.style.transform = "scale(1)";
	}, 100);

	oBg1 = document.createElement('div');
	oBg1.id = 'oBg1';
	oBg1.style.width = window.innerWidth + 'px';
	oBg1.style.height = document.body.offsetHeight + 'px';
	document.body.appendChild(oBg1);
	
	// 关闭按钮
	var closeloginbtn = document.getElementById('closeloginbtn');
	closeloginbtn.onclick = function(){
		oLogin.style.transform = "scale(0)";
		oLogin.style.opacity = "0";
		oBg1.style.display = "none";
		
		setTimeout(() => {
			document.body.removeChild(oLogin);
			document.body.removeChild(oLogin);
			oLogin = null;
		}, 1000);
	}
}
/**
 * 功能：验证登录用户名
 * 
 * @param username
 * @returns
 */
function checkLoginUser(username){
	if (username == "") {
		document.getElementById("loginusernametips").style.color = "#ca4341";
		document.getElementById("loginusernametips").innerHTML = "用户名不能为空！";
		return false;
	}else{
		document.getElementById("loginusernametips").style.color = "#333";
		document.getElementById("loginusernametips").innerHTML = "请输入用户名...";
		return true;
	}
}
/**
 * 功能：验证登录密码
 * 
 * @param pwd
 * @returns
 */
function checkLoginPwd(pwd){
	if (pwd == "") {
		document.getElementById("loginpwdtips").style.color = "#ca4341";
		document.getElementById("loginpwdtips").innerHTML = "密码不能为空！";
		return false;
	}else{
		document.getElementById("loginpwdtips").style.color = "#333";
		document.getElementById("loginpwdtips").innerHTML = "请输入密码...";
		return true;
	}
}

/**
 * 功能：登录提交
 * 
 * @param form2
 * @returns
 */
function loginSubmit(form2){
	if (checkLoginUser(form2.username.value) && checkLoginPwd(form2.pwd.value)) {
		var param="username="+form2.username.value+"&pwd="+form2.pwd.value; 	// 将登录信息连接成字符串，作为发送请求的参数
		var loader=new net.AjaxRequest("UserServlet?action=login",deal_login,onerror,"POST",encodeURI(param));
	}	
}
function deal_login(){
	/** ***************显示提示信息***************************** */
	var h=this.req.responseText;
	h=h.replace(/\s/g,"");	// 去除字符串中的Unicode空白
	alert(h);
	if(h=="登录成功！"){
		window.location.href="index.jsp";
	}else{
		loginForm.username.value="";// 清空用户名文本框
		loginForm.pwd.value="";// 清空密码文本框
		loginForm.username.focus();// 让用户名文本框获得焦点
	}
	
}
