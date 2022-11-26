<%@ page language="java" isELIgnored="false" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<link type="text/css" rel="stylesheet" href="css/style.css">
<script src="js/jquery.js"></script>
<script src="js/common.js"></script>
<script src="js/AjaxRequest.js"></script>
<div class="header">
	<!-- 视频 -->
	<video class="header_video" id="header_video" loop controls autoplay muted>
		您的浏览器暂不支持HTML5 video 标签
		<source src="video/spsc_3.mp4">
	</video>
	
	<!-- 视频按钮 -->
	<div class="play_btn_box">
		<span class="videoBtn" id="videoBtn"></span>
		<img src="images/btn_text.png">
	</div>
	
	<!-- 主导航 -->
	<div class="nav">		
		<div><img src="images/nav.png"><span>MENU</span></div>
		<ul>
			<li><a href="#">HomePage</a></li>
			<li><a href="#">Diary</a></li>
			<li><a href="#">Write something</a></li>
			<li><a href="#" id="regBtn">Register</a></li>
			<li><a href="#" id="loginBtn">Login</a></li>
		</ul>
	</div>
	
	<!-- 页眉标题文本 -->
	<div class="ap_text">
		<p class="title">Summer Diary</p>
		<p class="content">Enjoy the summer in the forest,the wind and the sun.</p>
	</div>
	
	<!-- 根据隐含对象 sessionScope 中的 username 是否有值，决定是否在页面中加入欢迎 div -->
	<c:if test="${sessionScope.username != null }">
		<!--  -->
		<div class="ap_welcome">
			<!-- 获取当前时间（小时） -->
			<c:set var="hours">
				<%=new java.util.Date().getHours() %>
			</c:set>
			<!-- 根据小时时间，输出欢迎语句 -->
			<c:choose>
				<c:when test="${hours>=6 && hours<11}"><span>Good morning，</span></c:when>
				<c:when test="${hours>=11 && hours<17}"><span>Good afternoon，</span></c:when>
				<c:otherwise><span>Good evening，</span></c:otherwise>
			</c:choose>
			<!-- 输出用户名，为空时输出" " 字符串 -->
			<b>${sessionScope.username }</b>
			<!-- 点击按钮跳转到 UserServlet，参数为action，值为exit -->
			<a href="UserServlet?action=exit"></a>
		</div>
	</c:if>	
</div>