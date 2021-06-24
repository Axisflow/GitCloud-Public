function showABOUT() {
    document.getElementsByTagName('body')[0].innerHTML += "<section id=\"about-me\" style=\"position:fixed;margin:50%;background-color:rgba(0,0,0,0.5);padding:5px;border-radius:25px;color:white;\"><p style=\"text-align:center;\">About Me<\/p><p style=\"position:absolute;right:10px;top:10px;margin:0;color:red;\" onclick=\"setTimeout(close_about_me ,1)\">\uFF38<\/p><iframe src=\"memo-high\\donate.htm\" style=\"border-radius: 25px;height:400px;width:450px;\"><\/iframe><\/section>";
}

function close_about_me(){
    document.getElementById('about-me').remove();
}