const socials = ['Twitter', 'LinkedIn', 'Facebook', 'instagram'];


console.log(socials._proto_);


// socials.forEach(function (social) {
//      console.log(social);
// });




socials.forEach((social, index, arr) => { console.log(`${index}-${social}`, arr);});

function loSocials(social){
    console.log(social);
}


socials.forEach(loSocials);



const socialObjs = [
    { name: 'Twitter', url: 'https://twitter.com'},
    { name: 'Facebook', url: 'https://facebook.com'},
    { name: 'instgram', url: 'https://instagram.com'},
    { name: 'linkedin', url: 'https://linkedin.com'},
]

socialObjs.forEach((item) => {
    console.log(item.url);
    
})