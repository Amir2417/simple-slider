const Images = [
    'images/pic-1.jpg',
    'images/pic-2.jpg',
    'images/pic-3.jpg',
    'images/pic-4.jpg',
    'images/pic-5.jpg',
    'images/pic-6.jpg',
    'images/pic-7.jpg',
    'images/pic-8.jpg',
    'images/pic-9.jpg'
];

let count = 0;
const src = document.getElementById('Img');
setInterval(() => {
    if (count >= Images.length){
        count =0;
    }
    
    const Img= Images[count];
    src.setAttribute('src',Img);
    count++;
},3000);