/*
**  TRUE -- Manifesto of TRUE Software Engineering
**  Copyright (c) 2019 Dr. Ralf S. Engelschall <http://engelschall.com/>
**  Licensed under CC-BY-NC-ND 4.0 <https://creativecommons.org/licenses/by-nc-nd/4.0/>
*/

$(document).ready(function () {
    var page = "manifesto"
    var lang = "en"
    var updateHash = function () {
        var hash = "#" + page + "-" + lang
        if (window.location.hash !== hash)
            window.location.hash = hash
    }
    var selectPage = function () {
        $(".content > .page").css("display", "none")
        $(".content > .page.page-" + page).css("display", "block")
        $(".header .page").removeClass("active")
        $(".header .page-" + page).addClass("active")
        updateHash()
    }
    var selectLang = function () {
        $("*[lang]").css("display", "none")
        $("*[lang='" + lang + "']").css("display", "block")
        $("span[lang='" + lang + "']").css("display", "inline")
        $(".header .icon-lang").removeClass("active")
        $(".header .icon-lang-" + lang).addClass("active")
        updateHash()
    }
    $(".header a").click(function (ev) {
        ev.preventDefault()
    })
    $(".header .pages .page").click(function (ev) {
        page = $(ev.target).attr("class").replace(/^.*page-([a-z]+).*$/, "$1")
        selectPage()
    })
    $(".header .langs .icon-lang").click(function (ev) {
        lang = $(ev.target).attr("class").replace(/^.*icon-lang-([a-z]+).*$/, "$1")
        selectLang()
    })
    var m
    if ((m = window.location.hash.match(/^#(manifesto|tenets|about)-(en|de)$/)) !== null) {
        page = m[1]
        lang = m[2]
    }
    selectPage(page)
    selectLang(lang)
})

