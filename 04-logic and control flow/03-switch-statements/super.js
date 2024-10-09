const d = new Date(10, 30, 2022, 8, 0, 0);
const month = d.getMonth();
const hour = d.getHours()


switch (month){
    case 1:
    console.log('it is januray');
    break;
    case 2:    
    console.log('it is february');
    breakl
    case 3:
    console.log(' it is match');
    break;
    default:       
    console.log('it i snot january february or match');    
}


switch (true){
    case hour < 12:
    console.log('Good morning');
    break;
    case hour < 18:    
    console.log('Good afternoon');
    break
    default:       
    console.log('Good night');    
}

