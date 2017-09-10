var text_header = document.getElementById("text_header");
function show_up_header(i)
{
    setTimeout(function () {
            text_header.style.opacity = i;
            i += 0.05;
            if(i<=i)
                show_up_header(i);
        }, 100);
}

show_up_header(0);