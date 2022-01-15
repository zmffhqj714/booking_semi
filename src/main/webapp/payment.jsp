<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Payment</title>
<script src="Resource/payment.js"></script>
<link rel="stylesheet" type="text/css" href="Resource/payment.css" />
</head>
<body>
	<article>
		${data}
	</article>
	<!-- <div class = "list"> <span class = "menuQty">메뉴 * 수량</span> <span class = "price">총 가격 : </span></div> -->
	<div>
		<input type="button" id="checkPay" value="결제 확인" onClick="insertNcheck(${srcode})" />
	</div>

</body>
</html>