//<p id="demo" onclick="myFunction()">Click me to change my text
//color.</p>

//<script>
//function myFunction() {
//    document.getElementById("demo").style.color = "red";
//} 
//</script> 

// Deklarasi elemen paragraph dan mengembalikan htmlCollection elemen p
const paragraph = document.getElementsByTagName('p')

// ============================================================
//                  JAWABAN SOAL POST TEST
// ============================================================

// buttonSatu untuk merubah warna background semua paragraph
const button1 = document.getElementById('buttonSatu')   //membuat variable agar buttonSatu dapat dipanggil di event

button1.addEventListener('click',function(){    // membuat event untuk buttonSatu

    // karena sifatnya seperti array, namun ingin diterapkan ke semua elemen, maka menggunakan looping for
    for(let i = 0; i <= paragraph.length; i++){
        paragraph[i].style.backgroundColor ='darkseagreen'   // ubah bg jadi warna hijau muda
    }
})

// ============================================================

// buttonDua untuk merubah warna background color dan warna text button "Dua"
const button2 = document.getElementById('buttonDua')

button2.addEventListener('click',function(){
    button2.style.backgroundColor ='white'   // mengubah bg button 2
    button2.style.color ='green' //mengubah warna teks button 2
})

// ============================================================

// buttonTiga untuk merubah font-family dan warna text semua paragraph
const button3 = document.getElementById('buttonTiga')

button3.addEventListener('click',function(){
    for(let i = 0; i <= paragraph.length; i++){
        paragraph[i].style.fontFamily = 'Candara'
        paragraph[i].style.color ='darkgreen'
    }
})

// ============================================================

// buttonEmpat untuk merubah font-size semua paragraph
const button4 = document.getElementById('buttonEmpat')

button4.addEventListener('click',function(){
    for(let i = 0; i <= paragraph.length; i++){
        paragraph[i].style.fontSize ='18px'
    }
})

// ============================================================

// buttonLima untuk merubah container background-color
const button5 = document.getElementById('buttonLima')

button5.addEventListener('click',function(){
    const bgContainer = document.getElementById('container')
    bgContainer.style.backgroundColor = 'honeydew'
})

// ============================================================

// buttonEnam untuk merubah tag "p" pada class p1 menjadi "h2"
const button6 = document.getElementById('buttonEnam')
// deklarasi section dengan class = 'a'
const sectionA = document.getElementById('a')

button6.addEventListener('click',function(){
    const h2 = document.createElement('h2')
    const textNew = document.createTextNode('Selamat datang di DojoBox.id')
    const p1 = sectionA.getElementsByClassName('p1')[0]
    h2.appendChild(textNew) 
    sectionA.replaceChild(h2,p1)      
})

// ============================================================

// buttonTujuh untuk menambahkan satu nama mentor baru dan menghapus nama mentor pertama
const button7 = document.getElementById('buttonTujuh')

button7.addEventListener('click',function(){
    const newMentor = document.createElement('li')
    const textNewMentor = document.createTextNode('Andika')
    // deklarasi section dengan class = 'b'
    const sectionB = document.querySelector('#b ul')
    newMentor.appendChild(textNewMentor)
    sectionB.appendChild(newMentor)

    const deletedChild = document.getElementsByTagName('li')[0]
    sectionB.removeChild(deletedChild)
})

// ============================================================

// buttonDelapan untuk mengganti text judul "DOOJOBOX.id" menjadi "Post Test"
const button8 = document.getElementById('buttonDelapan')

button8.addEventListener('click',function(){
    
    const title = document.getElementById('judul')
    title.innerHTML='Post Test'
})

// ============================================================

// buttonSembilan untuk menghapus link
const button9 = document.getElementById('buttonSembilan')

button9.addEventListener('click',function(){
    const deleteLink = document.getElementsByTagName('a')[0]
    sectionA.removeChild(deleteLink)
})

// ============================================================

// buttonSepuluh untuk menambah link ke github masing masing
const button10 = document.getElementById('buttonSepuluh')

button10.addEventListener('click',function(){
    const linkGit = document.createElement('a')
    const textLinkNew = document.createTextNode('Klik di sini, untuk akses ke GitHub Qolby :D')
    linkGit.appendChild(textLinkNew)
    linkGit.href = "https://github.com/qolbyiskandar/dojobox"
    sectionA.appendChild(linkGit)
})