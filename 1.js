function changeMe(arr) {
    if (arr.length === 0) {
      console.log('');
    }
  
    for (i = 0; i < arr.length; i++) {
      let data = arr[i];
      let namaDepan = data[0];
      let namaBelakang = data[1];
      let jenisKelamin = data[2];
      let tahunLahir = data[3];
      let tahunSekarang = 2022;
  
      let profil = {
        firstName: '',
        lastName: '',
        gender: '',
        age: 0
      }
  
      profil['firstName'] = namaDepan;
      profil['lastName'] = namaBelakang;
      profil['gender'] = jenisKelamin;
      if (tahunLahir === undefined) {
        profil.age = 'Invalid Birth Year';
      } else {
        profil['age'] = tahunSekarang - tahunLahir;
      }
  
      console.log(`${i+1}. ${profil['firstName']} ${profil['lastName']}:`);
      console.log(profil);
    }
  }
  
  //do not change the code below
  let inputArr = [["Christ", "Evans", "Male", 1982], ["Robert", "Downey", "Male"]];
  changeMe(inputArr);
  
  //1. Ogata Rizu: { firstName: 'Ogata', lastName: 'Rizu', gender: 'female', age: 27 }