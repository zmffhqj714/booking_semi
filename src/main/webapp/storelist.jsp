<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="Resource/storelist.js"></script>
<script src="Resource/resource.js"></script>
<link rel="stylesheet" type="text/css" href="Resource/storeList.css" />
<style>
</style>
</head>
<body onLoad="getstorelist('${srcode}')">
	<article>
		<div id = "top">
			<span>${cucode}(${cuname})</span>  <span> <input type="button" class="btn"
				value="로그아웃" onClick="logout1()" />
			</span>
		</div>
		<div>
			<span style="overflow: scroll;" id="list"></span>
		</div>
	</article>
</body>


<script>
	function goStore(soCode) {
		const data = "soCode=" + encodeURIComponent(soCode);

		goMenu('Menu', data)
	}

	/*function goMenu(action, data) {
		const form = document.getElementsByName("login")[0];
		const soCode = document.getElementsByName("soCode")[0];
		for (let index = 0; index < userData.length; index++) {
			if (!isEmpty(userData[index])) {
				alert(userData[index]);
				return;
			}
		}
		form.append();
		form.submit();
	}*/
</script>
</html>