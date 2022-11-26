<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>清爽夏日-日记网</title>

</head>
<body>	
	<!-- 页眉 -->
	<%@ include file="top.jsp" %>
	
	<!-- 日记栏展示：只有静态界面，待完善（同学们可以在此添加 js 焦点图效果） -->
	<div class="ap_section1">
		<div class="search">COOL SUMMER</div>
		<ul>
			<li><a href="#"><img src="images/ap_img1.jpg" width="300"></a></li>
			<li><a href="#"><img src="images/ap_img2.jpg" width="300"></a></li>
			<li><a href="#"><img src="images/ap_img3.jpg" width="300"></a></li>
			<li><a href="#"><img src="images/ap_img4.jpg" width="300"></a></li>
			<li><a href="#"><img src="images/ap_img5.jpg" width="300"></a></li>
		</ul>
	</div>
	
	<!-- 编辑日记：只有静态界面，待完善（此处用于日记的编辑，如：添加、修改、删除） -->
	<div class="ap_section2">
		<a class="as_left"><img src="images/ap_section2_img1.jpg"></a>
		<div class="as_right">
			<h4>From Asia, Maldives</h4>
			<h2>Exploring the Maldives</h2>
			<div class="p_box">
				<progress value="40" max="100">
					
				</progress>
				<a>next page</a>
				<span>4/10</span>
			</div>
			<div class="span_box">
				<span>From 256</span>
				<span>256 hotels</span>
			</div>
			<p>As Maldives couples honeymoon resort,this time of the year to the tourists can make you temporarily away from beyond count,the fast pace of city life,this is a richly endowed by nature easily,let you enjoy in the clear blue sea.</p>
			<a href="#" class="btn_learn"></a>
		</div>
	</div>
	<div class="middle_box"></div>
	
	<!-- 主体 -->
	<div class="main">
		<div class="main_c">
			<h4>Set off immediately</h4>
			<h2>Choose your destination</h2>
			<table class="main_tbl1">
				<tr>
					<td>Greece</td>
					<td>Maldives</td>
					<td>America</td>
					<td>Spain</td>
					<td>Italy</td>
					<td>Germany</td>
				</tr>
				<tr>
					<td colspan="6">
						<progress value="13" max="100"></progress>
					</td>
				</tr>
			</table>
			<table class="main_tbl2">
				<tr>
					<td>
						<a href="#">
							<b>Athens</b>
							<span>The capital and largest city of Greece;the name derives from the goddess of Athens.</span>
						</a>
					</td>
					<td>
						<a href="#">
							<b>Lamia</b>
							<span>The capital of Greece;the name derives from mythological figures.</span>
						</a>
					</td>
					<td>
						<a href="#">
							<b>Thessaloniki</b>
							<span>The largest port city and the two largest city,the capital of Thessaloniki.</span>
						</a>
					</td>
					<td>
						<a href="#">
							<b>Cuomo Tiny</b>
							<span>A town of northeast Greece,beautiful and peaceful,as if it were a paradise.</span>
						</a>
					</td>
				</tr>
				<tr>
					<td>
						<a href="#">
							<b>Ioannina</b>
							<span>One of the places passed by Greece in the 2008 Beijing olympics.</span>
						</a>
					</td>
					<td>
						<a href="#">
							<b>Corfu</b>
							<span>The second largest island in the lonian islands,is also the most shining pearl islands.</span>
						</a>
					</td>
					<td>
						<a href="#">
							<b>Mytilence</b>
							<span>The Greek Aegean Sea Lesbos southeast coast,is the capital of the island.</span>
						</a>
					</td>
					<td>
						<a href="#">
							<b>Patras</b>
							<span>A new back on the hill,west of the Gulf of Patras,Greece's third largest city.</span>
						</a>
					</td>
				</tr>
			</table>
		</div>
		<div class="bottom_box">
			<ul>
				<li>
					<a href="#">
						<img src="images/bottom_box_img1.jpg">
						<span>Love sea</span>
					</a>
				</li>
				<li>
					<a href="#">
						<img src="images/bottom_box_img2.jpg">
						<span>Love sea</span>
					</a>
				</li>
				<li>
					<a href="#">
						<img src="images/bottom_box_img3.jpg">
						<span>Love sea</span>
					</a>
				</li>
				<li>
					<a href="#">
						<img src="images/bottom_box_img4.jpg">
						<span>Love sea</span>
					</a>
				</li>
				<li>
					<a href="#">
						<img src="images/bottom_box_img5.jpg">
						<span>Love sea</span>
					</a>
				</li>
			</ul>
		</div>
	</div>

	<!-- 页脚 -->
	<%@ include file="foot.jsp" %>
	
</body>
</html>