let MouseC = document.getElementById('SpecifInfo');

function DescView(M_POS) {
	MouseC.style.left = M_POS.clientX + "px";
	MouseC.style.top = M_POS.clientY + "px";
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