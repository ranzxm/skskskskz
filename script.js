var cf1,cf2,jw1;
const nama = ["default"];
var namaDil = ["kontol", "memek", "pepek", "babi", "anjing", "anj", "bbi", "kntl", "mmk", "k0nt0l","m3m3k", "m3mek", "mek", "mem3k", "k0ntol", "kont0l", "njir", "anjir", "4njir", "anj1r", "4nj1r", "kw0ntol", "kw0nt0l", "kwont0l"];
var namaDilLen = namaDil.length;

function namaKotor() {
	for(let i= 0; i < namaDilLen; i++) {
		if (nama[0].toLowerCase() === namaDil[i]) {
			alert("nama yang kamu masukkan sepertinya tidak benar");
			kenalan();
		}
	}
	
}

function kenalan() {
	nama[0] = prompt("kenalan dulu, nama kamu siapa?".toLowerCase());
	namaKotor();
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
	document.getElementById("pesan").innerHTML = "sampai jumpa dilain waktu, mungkin belum jodoh :)";
}
