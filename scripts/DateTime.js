const showDateTime = () => {
    const dateTime = document.getElementById('data_hora');
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    const year = date.getFullYear();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let greetings;

    /* Greetings */
    if(hour >= 0 && hour <= 11) greetings = 'Bom dia';
    else if(hour >= 12 && hour < 18) greetings = 'Boa tarde';
    else greetings = 'Boa noite';

    if(day < 10) day = '0' + day;
    if(hour < 10) hour = '0' + hour;
    if(minute < 10) minute = '0' + minute;
    if(month < 10) month = '0' + month;

    dateTime.innerText = `${greetings}! ${day}/${month}/${year} - ${hour}:${minute}`;
}

setInterval(showDateTime, 1000);