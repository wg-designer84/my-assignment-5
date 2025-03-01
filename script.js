// FOR CHANGING BACKGROUND COLORS
document.getElementById('bg-selector')
    .addEventListener('click', function(){
        const colors= ['#FFB6A3','#AEE2FF','#A7F3D0','#FFF7A3','#D8B4FE','#FFD8A8','#B5F5EC','#000000'];

        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        document.getElementById('body').style.background = randomColor;
    })