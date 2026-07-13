function setLanguage(lang) {
document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];   
})
    document.documentElement.lang = lang;
document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
localStorage.setItem("selectedLang" , lang);
}
document.getElementById("lang").addEventListener("change" , function(){
    setLanguage(this.value);
})
setLanguage(localStorage.getItem("selectedLang") || "en")