<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>checkPayment</title>
<script src="Resource/payment.js"></script>
<link rel="stylesheet" type="text/css" href="Resource/checkPayment.css" />
</head>
<body>
	
	<article>
	${data}
	</article>
	
	<!--  <div id = "top">
	<span class = storeName>
	매장이름
	</span>
	</div>
	<div class = "date">
	{od_date}에 {cu_name}님이 {st_name}으로 결제하였습니다.
	</div>
	<div class = "orders">
	주문내역
	<span class = "nameQty">
	상품이름 * 상품수량
	</span>
	</div><div class = "stores"><span id = "info">
	매장정보</span>
	<span class = "number">
	연락처 : 
	</span>
	<span class = "address">
	주소 : 
	</span>
	</div>-->

	<div>
		<input type="button" id="home" value="HOME" onClick="home()" />
	</div>

</body>
</html>