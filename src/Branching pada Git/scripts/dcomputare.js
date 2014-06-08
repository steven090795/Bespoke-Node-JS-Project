document.onkeydown = checkKey;
themes = [
            'cube',
            'classic',
            'coverflow',
            'concave',
            'carousel'
        ];
keypresson = 0;
function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        keypresson++;
        if(keypresson>4)
        {
            keypresson = 0;            
        }
        document.getElementById("#main").className = themes[keypresson];
        // up arrow
    }
    else if (e.keyCode == '40') {
        keypresson--;
        if(keypresson<0)
        {
            keypresson = 4;            
        }
        document.getElementById("#main").className = themes[keypresson];
        // down arrow
    }
}
