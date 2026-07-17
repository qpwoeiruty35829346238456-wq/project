function setLanguage(lang) {
document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];   
})
document.querySelectorAll("#governorate option[value]").forEach(opt => {
    const val = opt.value;
    if(governorates[lang][val]){
        opt.textContent = governorates[lang][val];
    }
})
    document.documentElement.lang = lang;
document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
localStorage.setItem("selectedLang" , lang);
const langSelect = document.getElementById("lang");
if(langSelect) {
    langSelect.value = lang;
}
}
const langSelect = document.getElementById("lang");
if(langSelect) {
    langSelect.addEventListener("change" , function(){
        setLanguage(this.value);
    })
}
setLanguage(localStorage.getItem("selectedLang") || "en")