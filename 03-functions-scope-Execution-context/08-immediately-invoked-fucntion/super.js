
(function() {
const user = 'brad';
console.log(user);
const hello = () => {
    console.log('Hello from IFFI')
}
hello();
})

(function (name){
    console.log('hello' + name);
})('shawn');


(function hello(){
    console.log('Hello');
    4
})