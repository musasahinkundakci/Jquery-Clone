console.log(cu('#app').text('Selamlar').html());
console.log(cu('#app').html());
console.log(
    cu('#app')
        .css({
            fontSize: '50px',
            color: 'red',
        })
        .text()
);
console.log(
    cu('#app')
        .on('click', function () {
            console.log('clicked', this);
        })
        .text('Deenem')
        .text('Deneme2')
);
