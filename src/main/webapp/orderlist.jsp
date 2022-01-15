<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>관리자주문확인창</title>
<link rel="styLesheet" type="text/css" href="Resource/orderlist.css">
<script src="Resource/resource.js"></script>

</head>
<body>
	<div id="loginInfo">
		&ensp;<span id="srCode">${info[0].srCode}</span>${info[0].srName} 매장
		&emsp; <input type="button" class="btn" value="로그아웃"
			onClick="logout(${info[0].srCode})" />
	</div>

	<div id="getorder">
		<input type="date" id="date" class="btn" class="orderInfo" value=""
			min="2020-01-01" max="2022-12-31" />&ensp; <input type="button"
			class="btn" value="주문정보 불러오기"
			onClick="ClickOrderList('${info[0].srCode}')" />
	</div>

	<div id="list">${list}</div>

</body>

</html>