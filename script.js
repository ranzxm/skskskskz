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
	kenalan();
}



cf1 = confirm("boleh minta waktunya seumur hidup?");

if (cf1 === true ) {
	kenalan();
	while (nama === "") {
		namaKosong();
	}
	while (nama === null) {
		namaNull();
	}
	alert("hai " + nama + " salam kenal, kenalin nama aku franss ");
	alert("ehh, kamu kemarin ultah ya?");
	alert("pibesdey !!");
	alert("kamu mau hadiah?")
	if (cf2 == "mau") {

	}
	
} else {
	document.getElementById("pesan").innerHTML = "sampai jumpa dilain waktu, mungkin belum jodoh :)"
}