let box_data = document.getElementById("box_data")
let offers = JSON.parse(localStorage.getItem("offers") || "[]");
function renderOffers() {
box_data.innerHTML = offers.map((o , i)=>
   "<div class='offer_box'>" +
   " <button class = 'delete' onclick = 'del(" + i + ")'>🗑</button><br>" +
   "<span class = 'size'>" +
   "store type: " + o.store_type + "<br>" +
   "shop name: " + o.shop_name + "<br>" +
   "phone number: " + o.phone + "<br>" +
   "whatapp number: " + o.whatapp + "<br>" +
   "salary: " + o.salary + "<br>" +
   "governorate: " + o.governorate + "<br>" +
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