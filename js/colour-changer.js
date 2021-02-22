const changer = document.querySelector(".colour-changer input")
const bodyTag = document.querySelector("body")

changer.addEventListener("input", function (){
	bodyTag.style.backgroundColor = changer.value

	const color = chroma(changer.value)


	if (color.luminance() < 0.1) {
		bodyTag.classList.add("dark")
	} else {
		bodyTag.classList.remove("dark")
	}

})