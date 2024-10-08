let x;
let d = new Date();

x = d.toString();

x = d.getTime();
x = d.valueOf();

x = d.getFullYear();

x = d.getMonth() + 1;

x = d.getDate();

x = d.getDay();

x = d.getHours();

x = d.getMinutes();

x = d.getSeconds();

x = d.getMilliseconds();

x = `${d.getFullYear()} ${d.getMonth()} ${d.getDate()}`


x = Intl.DateTimeFormat('en-US').format(d)
x = Intl.DateTimeFormat('en-GB').format(d)
x = Intl.DateTimeFormat('default').format(d)

x = Intl.DateTimeFormat('default', { month: 'long' }).format(d);

x = d.toLocaleString('default', { month: 'short'});

x = d.toLocaleString('default', { 
    month: 'long',
    weekday: 'long',
    year: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'America/Los_Angeles',
});


console.log(x);