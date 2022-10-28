function colormode(toggle) {
    document.querySelector('.navbar').style.backgroundColor = (toggle) ? 'black':'#0478d9';
    document.querySelector('footer').style.backgroundColor = (toggle) ? 'black':'#0478d9';
};

var toggled = true;
const switcher = document.querySelector('.trocaCor');
switcher.addEventListener('click',function() {
   colormode(toggled);
   toggled = !toggled;
});
