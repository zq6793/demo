function fn() {
    var html = ['index.html', 'next_one.html', 'next_two.html', 'next_three.html', 'next_four.html',
            'five.html', 'six.html', 'seven.html'
    ];
    var uls = document.getElementsByClassName('left')[0].children;
    var lis = uls[1].children;
    for (let i = 1; i < 9; i++) {
            lis[i].onmouseover = function(){
                    this.style.cssText = " cursor: pointer;color:red;"
            }
            lis[i].onmouseout = function(){
                    this.style.cssText = " cursor: pointer;color:#7f9bcc;"
            }
            lis[i].onclick = function () {
                    location.href = html[i-1];
            }
    }
}