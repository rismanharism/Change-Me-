# Change-Me-
(1) Change Me!

Learning Competencies

Mampu mengakases array multidimensi menggunakan nested loop. Mampu membuat object literal sesuai dengan data (key dan value) yang diinginkan.
Directions
RESTRICTION Hanya boleh menggunakan built-in function untuk menambahkan atau mengurangi data dalam array, seperti .shift(), unShift(), push(), dan pop().

Diberikan sebuah function changeMe yang menerima satu parameter berupa array multidimensi dimana array tersebut berisi value (pasti berurut dari kiri ke kanan) First Name, Last Name, Gender dan Birth Year.

Fungsi ini akan menampilkan object literal yang memiliki property firstName, lastName, gender dan age.

Nilai age didapatkan dari tahun sekarang dikurangi tahun lahir. Jika tahun lahir tidak diisi atau tahun lahir lebih besar dibandingkan tahun sekarang maka age akan berisi 'Invalid Birth Year'.

Contoh jika arr inputan adalah

[['Ogata', 'Rizu', 'female', 1995], ['John', 'Doe', 'male', 2000]]

dan tahun sekarang adalah 2022,
maka output:

1. Ogata Rizu: { firstName: 'Ogata', lastName: 'Rizu', gender: 'female', age: 27 }
2. John Doe: { firstName: 'John', lastName: 'Doe', gender: 'male', age: 22 }