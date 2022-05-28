var cf1,cf2,nama;

function kenalan() {
	nama = prompt("kenalan dulu, nama kamu siapa?");
}

function namaKosong() {
	alert("nama kamu isi dong, gaboleh dikosongin :(");
	kenalan();
}

function namaNull() {
	alert("jangan dicancel dong, tadi katanya boleh minta waktunya :(")
	kondisiNama();
}
function kondisiNama(){
	kenalan();
	while (nama === "") {
		namaKosong();
	}
	while (nama === null) {
		namaNull();
	}
}



cf1 = confirm("boleh minta waktunya seumur hidup?");

if (cf1 === true ) {
	kondisiNama();
	alert("hai " + nama + " salam kenal, kenalin nama aku franss ");
	alert("ehh, kamu kemarin ultah ya?");
	alert("pibesdey !!");
	var jw1 = prompt("kamu mau hadiah?");
	if (jw1 === "mau") {
		window.location.href = "https://youtu.be/iik25wqIuFo";
	}
} else {
	document.getElementById("pesan").innerHTML = "sampai jumpa dilain waktu, mungkin belum jodoh :)"
}
