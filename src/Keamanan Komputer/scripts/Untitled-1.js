    var urlmenu = document.getElementById( 'menu1' );
    urlmenu.onchange = function() {
    window.open( this.options[ this.selectedIndex ].value, '_self');
    };