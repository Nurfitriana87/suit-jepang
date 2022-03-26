let tanya = true;
while (tanya) {
  //pake value truthy falsy
  //menangkap pilihan player
  let player = prompt("Pilih : Gunting, Batu, Kertas");

  //menangkap pilihan computer
  //menangkap atau mengenerate bilangan random
  let computer = Math.random();

  if (computer < 0.34) {
    computer = "gunting";
  } else if (computer >= 0.34 && computer < 0.67) {
    computer = "batu";
  } else {
    computer = "kertas";
  }
  // console.log(computer);

  let hasil = "";
  //tentukan rules
  if (player == computer) {
    alert("seri");
  } else if (player == "gunting") {
    //rules untuk player pilih gunting
    // if (computer == 'Batu') {
    //     hasil ='Menang!'
    // } else {
    //     hasil ='Kalah'
    // }
    //bikin bentuk operator ternary
    hasil = computer == "batu" ? "Kalah!" : "Menang!";
  } else if (player == "batu") {
    //rules untuk player pilih batu
    hasil = computer == "kertas" ? "kalah!" : "menang!";
  } else if (player == "kertas") {
    hasil = computer == "gunting" ? "kalah!" : "menang!";
  } else {
    hasil = "memasukan pilihan yang salah!";
  }

  //tampilkan hasilnya
  alert(`Kamu pilih ${player}, aku pilih ${computer} jadi kamu ${hasil}`);
  tanya = confirm("mau main lagi?");
}

alert("makasih sudah main ^-^");
