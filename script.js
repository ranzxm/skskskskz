var cf1,cf2,nama,jw1;

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
function kondisiNama() {
	kenalan();
	while (nama === "") {
		namaKosong();
	}
	while (nama === null) {
		namaNull();
	}
}

function pertanyaanHadiah() {
	jw1 = prompt("kamu mau hadiah? ketik mau/ga");
	mauHadiah();
}

function mauHadiah() {
	if (jw1 === "mau") {
		document.getElementById("rrjp").style.display = "inline";
	} else if (jw1 === "ga") {
		document.getElementById("pesan").innerHTML = "yaudah kalo gamau, byee!!";
	} else {
		alert("jawab dong mau/ga");
		pertanyaanHadiah();
	}

}


cf1 = confirm("boleh minta waktunya seumur hidup?");

if (cf1 === true ) {
	kondisiNama();
	alert("hai " + nama + " salam kenal, kenalin nama aku franss ");
	alert("ehh, kamu kemarin ultah ya?");
	alert("pibesdey !!");
	pertanyaanHadiah();
	mauHadiah();
	
	
} else {
	document.getElementById("pesan").innerHTML = "sampai jumpa dilain waktu, mungkin belum jodoh :)"
}
