export const ARTICLE_BLOG = {
  id: 1,
  title: "Best Practices for Preventing Object Mutation in JavaScript",
  description:
    "Mutation adalah mengubah value dari property di dalam suatu object. Object merupakan bagian dari tipe data non-primitive values yang memiliki sifat mutable atau bisa di ubah isi dari object tersebut. Penjelasan tipe data ini sudah lengkap ada di artikel JavaScript Primitive Values & Non-Primitive Values (Object References). Jika kita melakukan mutation langsung di suatu data object tersebut, maka akan terjadi hal yang fatal terhadap data asli nya. Selain method di atas, berikut beberapa method di javascript yang mengembalikan salinan object baru dan tidak mengembalikan salinan object baru. Method yang mengembalikan salinan object baru : Array.prototype.splice() Array.prototype.slice() Array.prototype.concat() Array.prototype.filter() Method yang tidak mengembalikan salinan object baru : Array.prototype.pop() Array.prototype.push() Array.prototype.unshift() Untuk detail pembahasan tentang beberapa method ini akan di buat bagian terpisah agar artikel ini tidak terlalu panjang 😂 Kesimpulan : Bahwa mutation object di javascript akan merusak isi dari object asli nya. Sebagai alternatif ada beberapa method yang bisa digunakan seperti Object.assign(), spread syntax, dan membuat object baru . Sekian, terima kasih.",
};