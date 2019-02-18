//对ul隐藏的设计
function ul() {
    var select = $('#phone_first');
    var sum = 0;
    select.onclick = function () {
        if (sum == 0) {
            $('#imgs').style.transform = 'rotateZ(180deg)';
            $('ul')[0].style.display = 'block';
            sum++;
        } else {
            $('ul')[0].style.display = 'none';
            $('#imgs').style.transform = 'rotateZ(360deg)';
            sum = 0;
        }
    }

    var lis = $('ul')[0].children;
    var span = $(".phone_one");
    var text = $('#shu');
    for (let i = 0; i < lis.length; i++) {
        lis[i].onmouseover = function () {
            this.style.background = "#dddddd";
        }
        lis[i].onmouseout = function () {
            this.style.background = "#ffffff";
        }
        lis[i].onclick = () => {
            text.innerHTML = span[i].innerHTML;
            $('ul')[0].style.display = 'none';
            $('#imgs').style.transform = 'rotateZ(360deg)';
        }
    }
}

//验证滑块那块·
function huadong_box() {
    var qu = $('.huadong_qu')[0];
    var huadong_box = $('.huadong_box')[0];
    huadong_box.addEventListener("touchmove", function(e) {
        var e = e || window.event;
 var offsetX = e.touches[0].clientX- huadong_box.offsetWidth;
        huadong_box.style.left = offsetX + "px";
        console.log(offsetX);
        if(offsetX<0){
            huadong_box.style.left = 0 + 'px';
        }
        if (offsetX >= 263) {
            huadong_box.style.left = 263 + 'px';
            huadong_box.innerHTML = '√';
            $('#text').innerHTML = '验证通过';
            $('#smill').style.display = 'none';
            qu.style.cssText = "background:#706565;font-size:16px;color:#ffffff;text-align:center;"
            clearTimeout(team);
        }  
    })
}


//文字上面那个小光标
function hua_kuai() {
    // var x = 0;
    team = setTimeout(huabiao, 150);

    function huabiao() {
        team = setTimeout(huabiao, 150);
        var guangbiao = $('#smill');
        var left = parseFloat(guangbiao.style.left);
        // console.log(left)
        // var top1 = parseInt(guangbiao.style.top);
        var x = left + 0.16;
        // var y = top1 + 0.16;
        // console.log(x)
        guangbiao.style.left = x + 'rem';
        // guangbiao.style.top = y + 'rem';
        if (x > 1.2) {
            clearTimeout(team);
            x = 0;
            team = setTimeout(huabiao, 150);
            guangbiao.style.left = x + 'rem';
        }
    }
}

function $(str) {
    if (str.charAt(0) == "#") {
        return document.getElementById(str.substring(1));
    } else if (str.charAt(0) == ".") {
        return document.getElementsByClassName(str.substring(1));
    } else {
        return document.getElementsByTagName(str);
    }
}