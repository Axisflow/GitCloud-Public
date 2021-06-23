var adsContent = ['AD', '<iframe title=\"Advertisement\" width=\"450\" height=\"450\" src=\"https://cysh-cc.github.io/"></iframe>', '<img src=\"memo-high\\cysh-logo.png\" />', '<iframe width=\"560\" height=\"315\" src=\"https://www.youtube-nocookie.com/embed/QX94dyVeC9I?controls=0\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>'];

function showAD(linkto) {
    var dt = new Date();

    var content = '<title>Advertisement</title><div style=\"background-color: #151515;color: #e5e5e5;display: flex;align-items: center;justify-content: center;width: 100%;height: 100%;\"><p style=\"position: absolute;top: 12.5px;\">廣告</p>' + adsContent[dt.getMilliseconds() % adsContent.length] + '<a href=\"' + linkto + '\" style=\"position: absolute;bottom: 25px;color: #e5e5e5;font-size: 30px;\">GO!</a></div>';
    document.write(content);
}