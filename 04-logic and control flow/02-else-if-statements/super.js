const d = new Date(10, 30, 2022, 8, 0, 0);
const hour = d.getHours();


console.log(hour);


if (hour < 12){
    console.log('Good morning');
}else if ( hour < 18 ) {
    console.log('Good afternoon');
}
else{
    console.log('Goodnight');
}

// Nested if 

if (hour === 12){
    console.log('Good morning');

        if (hour === 6){
            console.log('wale up');
            
        }
}
else if ( hour < 18 ) {
    console.log('Good afternoon');
}
else{
    console.log('Goodnight');

    if(hour >= 20){
        console.log('zzzzz');
        
    }
}

if (hour >= 7  && hour < 15){
    console.log('it is work time');
}

if (hour === 6 || hour === 20){
    console.log('brush your teeth');   
}