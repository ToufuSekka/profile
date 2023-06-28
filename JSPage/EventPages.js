let MouseC = document.getElementById('SpecifInfo');

function DescView(M_POS) {
	var LocX = M_POS.clientX + document.documentElement.scrollLeft;
	var LocY = M_POS.clientY + document.documentElement.scrollTop;
	MouseC.style.left = LocX + "px";
	MouseC.style.top = LocY + "px";
	MouseC.style.display = "block";
}

function DescPopping(M_POS, HTMLDataLink) {
	var FullLink = "DescriptionPage/" + HTMLDataLink + ".html";
	DescView(M_POS);
	MouseC.innerHTML = '<object type="text/html" data="' + FullLink + '"></object>';
}

function DescHide() {
	MouseC.style.display = "none";
}