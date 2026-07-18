let box_data = document.getElementById("box_data")
let offers = JSON.parse(localStorage.getItem("offers") || "[]");
function renderOffers() {
   const lang = localStorage.getItem("selectedLang") || "en";
   box_data.innerHTML = offers.map((o , i)=>
   "<div class='offer_box'>" +
   "<button class = 'delete' onclick = 'del(" + i + ")'>🗑</button><br>" +
   "<span class = 'size'>" +
   "store type: " + o.store_type + "<br>" +
   "shop name: " + o.shop_name + "<br>" +
   "phone number: " + o.phone + "<br>" +
   "whatsapp number: " + o.whatsapp + "<br>" +
   "salary: " + o.salary + "<br>" +
   "governorate: " + (governorates[lang][o.governorate] || o.governorate) + "<br>" +
   // "governorate: " + o.governorate + "<br>" +
   "city: " + o.city + "<br>" +
   "</span>" +
   "</div>"
 ).join("");
}function del(i) {
offers.splice(i , 1);
localStorage.setItem("offers" , JSON.stringify(offers));
renderOffers();
}
renderOffers();