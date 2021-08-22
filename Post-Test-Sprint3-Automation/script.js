//deklarasi elemen paragraf
const p = document.getElementsByTagName('p')

//deklarasi background container
const bgCont = document.getElementById('container')



//Button 1 digunakan untuk merubah warna background semua paragraph
const t1 = document.getElementById('buttonSatu')   //membuat variabel buttonSatu
t1.addEventListener('click',function(){    
    for(let i = 0; i <= p.length; i++){
        p[i].style.backgroundColor ='brown'   // background berubah menjadi coklat
    }
})

//Button 2 digunakan untuk merubah warna background color dan warna text button "Dua"
const t2 = document.getElementById('buttonDua')
t2.addEventListener('click',function(){
    t2.style.backgroundColor='grey'
    t2.style.color='blue'
})

//Button 3 digunakan untuk merubah font-family dan warna text semua paragraph
const t3 = document.getElementById('buttonTiga')
t3.addEventListener('click',function(){
    for(i = 0; i <= p.length; i++){
        p[i].style.fontFamily = 'Roman'
        p[i].style.color ='white'
    }
})

//Button 4 digunakan untuk merubah font-size semua paragraph
const t4 = document.getElementById('buttonEmpat')
t4.addEventListener('click',function(){
    for (i = 0;i<p.length;i++){
        p[i].style.fontSize='32px'
    }
})

//Button5 digunakan untuk merubah container background-color
const t5 = document.getElementById('buttonLima')
t5.addEventListener('click',function(){
    bgCont.style.backgroundColor = 'yellow'
})

//Button6 digunakan untuk merubah tag "p" pada class p1 menjadi "h2"
const t6 = document.getElementById('buttonEnam')
const sectionA = document.getElementById('a')
t6.addEventListener('click',function(){
//	const sectionA = document.getElementById('a')
	const p1 = sectionA.querySelector('p')
	const h2 = document.createElement('h2')
	const teksBaru = document.createTextNode('Monggo Pinarak')
	h2.appendChild(teksBaru)
	sectionA.replaceChild(h2,p1)   
})

//Button7 digunakan untuk menambahkan satu nama mentor baru dan menghapus nama mentor pertama
const t7 = document.getElementById('buttonTujuh')
t7.addEventListener('click',function(){
    const ul = document.querySelector('section#b ul')
//    const li = document.querySelector('li')
    const MentorBaru = document.createElement('li')
    const teksMentorBaru = document.createTextNode('Andika-Mentor Baru')
    MentorBaru.appendChild(teksMentorBaru)
    ul.appendChild(MentorBaru)
    const li = document.getElementsByTagName('li')[0]
    ul.removeChild(li)
})

//Button 8 digunakan untuk mengganti text judul "DOOJOBOX.id" menjadi "Post Test"
const t8 = document.getElementById('buttonDelapan')
t8.addEventListener('click',function(){
	const judul = document.getElementById('judul')
	judul.innerHTML='Post Test'
})

//Button 9 digunakan untuk menghapus link
const t9 = document.getElementById('buttonSembilan')
t9.addEventListener('click',function(){
	const hapusLink = document.getElementsByTagName('a')[0]
	sectionA.removeChild(hapusLink)
})

//Button 10 digunakan untuk menambah link ke github masing masing
const t10 = document.getElementById('buttonSepuluh')
t10.addEventListener('click',function(){
    const ahref = document.createElement('a')
    const linkBaru = document.createTextNode('Untuk masuk ke Github Nanda S., silahkan pada klik link berikut')
    ahref.appendChild(linkBaru)
    ahref.href = "https://github.com/dudusamidi/dojobox"
    sectionA.appendChild(ahref)
})
