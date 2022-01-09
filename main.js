window.onload = function(){
    let pager = "cookies";
    document.getElementById(pager).classList.add('viewer')
}
var parags = document.querySelectorAll('aside p');
parags.forEach((element, index, arr) => {
    element.style.color = "lightgray";
    element.onclick = function(){
        document.querySelectorAll('.content .page').forEach(element => {
            element.classList.remove('viewer');
            
        });
        let viewKey = element.className;
        var order = index;
        document.getElementById(viewKey).classList.add('viewer')
        parags.forEach(item => {
            item.style.color = "lightgray";
        })
        parags[order].style.color = "indianred"
        window.scrollTo(0, 0);
    }
});

$(".arrays").click(function(){
    $(".arrays-methods").slideToggle();
});

$(".strings").click(function(){
    $(".string-methods").slideToggle();
});

$(".fileSystem").click(function(){
    $(".fileSystem-units").slideToggle();
});

$(".super_globals").click(function(){
    $(".global").slideToggle();
});

$(".cookies").click(function(){
    $(".cookie_section").slideToggle();
})

$("._SESSION").click(function(){
    $(".session_section").slideToggle();
})

$(".misc_functions").click(function(){
    $(".misc_section").slideToggle();
})

$(".filters").click(function(){
    $(".filters_section").slideToggle();
});

$(".dateTime").click(function(){
    $(".date_section").slideToggle();
});

function opna() {
    window.open('C:/xampp/htdocs/PHP_Course/test')
}




/* 
<h4></h4>
<fieldset>
    <legend><h5>Syntax:</h5></legend>
    <pre><code></code></pre>
</fieldset><br>
 */