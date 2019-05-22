/*
**  TRUE -- Manifesto of TRUE Software Engineering
**  Copyright (c) 2019 Dr. Ralf S. Engelschall <http://engelschall.com/>
**  Licensed under CC-BY-NC-ND 4.0 <https://creativecommons.org/licenses/by-nc-nd/4.0/>
*/

$(document).ready(function () {
    var selectLang = function (lang) {
        $("*[lang]").css("display", "none")
        $("*[lang='" + lang + "']").css("display", "block")
        $("span[lang='" + lang + "']").css("display", "inline")
        $(".icon-lang").removeClass("active")
        $("#icon-lang-" + lang).addClass("active")
    }
    $(".langs .icon-lang").click(function (ev) {
        var lang = $(ev.target).attr("id").replace(/^icon-lang-/, "")
        selectLang(lang)
    })
    selectLang("en")
})

