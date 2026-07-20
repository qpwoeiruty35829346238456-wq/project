const cities = {
 cairo: ["Nasr City", "Heliopolis", "Maadi", "New Cairo", "Shubra", "Helwan", "Ain Shams", "Mokattam", "Zamalek", "Downtown", "El Marg"],
 giza: ["6th of October", "Sheikh Zayed", "Dokki", "Mohandessin", "Haram", "Faisal", "Agouza", "Badrashin", "Al Saf", "Atfih", "Al Ayat", "Kerdasa"], 
 alex: ["Montaza", "Sidi Gaber", "Smouha", "Agami", "Borg El Arab", "Amreya", "Miami", "Raml", "Moharam Bek", "Al Gomrok"],
 dakahlia: ["Monsoura", "Mit Ghamr", "Talkha", "Bilqas", "Sherbin", "Dekernes", "Aga", "Sinbillawin"],
 red_sea: ["Hurghada", "Safage", "El Quseir", "Marsa Alam", "Ras Ghareb"],
 beheira: ["Damanhour", "Kafr El Dawwar", "Rashid", "Edko", "Abu Hummus", "Kom Hamada", "Itay El Barud"],
 fayoum: ["Fayoum", "Tamiya", "Sinnuris", "Ibsheway", "Youssef El Seddik"],
 gharbia: ["Tanta", "El Mahalla El Kubra", "Kafr El Zayat", "Zefta", "Samanoud", "Basyoun"],
 ismailia: ["Ismailia", "Fayed", "Qantara West", "Qantara East", "Abu Suwir"],
 monufia: ["Shibin El kom", "Menouf", "Ashmoun", "Quesna", "Tala", "El Bagour"],
 minya: ["Minya", "Mallawi", "Samalut", "Maghagha", "Bani Mazar", "Abu Qurqas"],
 qalyubia: ["Banha", "Shubra El Kheima", "Qalyub", "Khanka", "Obour", "Qanater", "Kafr Shukr"],
 new_valley: ["Kharga", "Dakhla", "Farafra", "Baris"],
 suez: ["Suez", "Ain Sokhna", "Arbaeen", "Ganayen"],
 aswan: ["Aswan", "Kom Ombo", "Edfu", "Daraw", "Nasr El Nuba"],
 asyut: ["Asyut", "Abnub", "Dayrout", "Manfalut", "El Qusiya", "Abu Tig"],
 beni_suef: ["Beni Suef", "Al Wasta", "Naser", "Biba", "Ehnasia", "Somosta"],
 port_said: ["Port Said", "Port Fouad"],
 damietta: ["Damietta", "Ras El Bar", "Faraskur", "Kafr Saad", "Zarqa"],
 sharqia: ["Zagazig", "10th of Ramadan", "Belbeis", "Abu Hammad", "Faqous", "Abu Kabir", "Hehya", "Minya El Qamh"],
 south_sinai: ["Sharm El Sheikh", "Dahab", "Taba", "El Tor", "Nuweiba", "Saint Catherine"],
 kafr_el_sheikh: ["Kafr El Sheikh", "Desouk", "Baltim", "Metoubes", "Sidi Salem", "Qallin"],
 matrouh: ["Marsa Matrouh", "El Alamein", "Siwa", "El Dabaa", "Sidi Barrani", "El Hamam"],
 luxor: ["Luxor", "Armant", "Esna", "El Tod"],
 qena: ["Qena", "Nag Hammadi", "Qus", "Dishna", "Farshut", "Abu Tesht"],
 north_sinai: ["Arish", "Sheikh Zuweid", "Rafah", "Bir El Abd", "Nakhl"],
 sohag: ["Sohag", "Girga", "Tahta", "Akhmim", "El Maragha", "El Balyana"]
};
const govSelect = document.getElementById("governorate");
const citySelect = document.getElementById("city");
govSelect.addEventListener("change" , function(){
    const selectedGov = govSelect.value;
    const lang = localStorage.getItem("selectedLang") || "en";
    const citiesList = lang === "ar" ? citiesAr[selectedGov] : cities[selectedGov]
    const originalList = cities[selectedGov];
    citySelect.innerHTML = '<option value = "" disabled selected hidden>Select city</option>'
    for (let i = 0; i < citiesList.length; i++) {
    citySelect.innerHTML += '<option value = "' + citiesList[i] + '">' + citiesList[i] + '</option>'
    }
})