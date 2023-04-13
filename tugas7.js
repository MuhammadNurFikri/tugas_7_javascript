let tinggi = [165, 170, 175, 180, 160, 163, 172, 168, 170, 173];

// perulangan biasa
console.log("Tinggi badan (perulangan biasa):");
for (let i = 0; i < tinggi.length; i++) {
  console.log(tinggi[i]);
}

// perulangan for off
console.log("Tinggi badan (perulangan for off):");
for (let t of tinggi) {
  console.log(t);
}