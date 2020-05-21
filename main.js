// sticky navbar
// auto highlight navbar
// auto scroll smoothly
// menu
// auto hide aside
// gabless slides
// loading animation
// animate when scroll

setTimeout(function () {
	siteWelcome.classList.remove('active')
}, 1000)

window.onscroll = function () {
	if (window.scrollY > 0) {
		topNavBar.classList.add('sticky')
	} else {
		topNavBar.classList.remove('sticky')
	}
}

window.onload = function () {
	let liTags = document.querySelectorAll('nav.menu > ul > li')
	for (let i = 0; i < liTags.length; i++) {
		liTags[i].onmouseenter = function (x) {
    x.currentTarget.classList.add('active')
      // let bro = li.childNodes[3]
			// bro.classList.add('active')
		}
		liTags[i].onmouseleave = function (x) {
    x.currentTarget.classList.remove('active')
      // let bro = li.childNodes[3]
			// bro.classList.remove('active')
		}
	}

	// 点击topNavBar上面链接跳转到对应模块
	let aTags = document.querySelectorAll('nav.menu > ul > li > a')
	for(let i=0; i<aTags.length; i++) {
		aTags[i].onclick = function(x) {
			x.preventDefault()
			let a = x.currentTarget
			let href = a.getAttribute('href')
			let element = document.querySelector(href)  // href 就是 '#siteAbout'
			let top = element.offsetTop
			window.scrollTo(0, top - 80)
		}
	}
}
