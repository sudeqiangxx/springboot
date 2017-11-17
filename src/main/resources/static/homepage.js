/**
 * Created by sudeqiang on 2017/10/19.
 */
var x=1;
'hello ,world';
var y=1;var z=1;
if(2>1){
    x=1;
    y=2;
    z=3;
}
alert('hello,我是小强，我开始学习js了')
var s='hello, world';
s.length;
var s='Hello, world!';
s[0];
s[6];
var arr=[1,2,3];
arr.length;
arr.length=6;
arr;
arr.length=2;
arr;
var arrs=['A','B'];
arrs.join(',').toJSON()
var xiaoming={
    name:'小明',
    birth:1990

}
var m=new Map();
var  s=new Set();
function abs(x) {
    if (x>0){
        return x;
    }else {
        return-x;
    }
}

var sutdents={
    name:'小明',
    birth:1990,
    age:function () {
        var y=new Date().getFullYear();
        alert(this.name+'今年'+y-this.birth+'岁了！')
        return y-this.birth;
    }
}
function pow(x) {
    return x*x;
}
var arrsd=[1,2,3,4,5];arr.map(pow)

 function a(x) {
    return x*x;

}

function Student(name) {
    this.name=name;
    this.hello=function(){
        alert("Hello,"+this.name+'!')
    }
}

function setss() {
    'user strict';
//可调整浏览器窗口大学试试
    //alert('window inner size:'+window.innerWidth+'x'+window.innerHeight);

    //location.reload();
    document.title='小强官网';
    document.images.namedItem("ssdff");


}


function getpinformation() {
    var p=document.getElementById('pids');
    //设置文本为abc
    p.innerHTML='ABC';
    //设置HTML
    p.innerHTML='ABC <span style="color: red">ABC</span>XYZ';
    //
}
function getp() {
    var p=document.getElementById('pids');
    p.innerText='<script>alert("Hi")</script>';

}
function setcss() {
    var p=document.getElementById('pids');
    p.innerHTML='我是强哥';
    p.style.color='#ff0000';
    p.style.fontSize='20px';
    p.style.paddingTop='2em';

}

function setdivp() {
    var js=document.getElementById('js');
    var list=document.getElementById('lsit');
    list.appendChild(js);

}

function setemail() {
    var input=document.getElementById('email');
    alert(input.value);
    var request= new XMLHttpRequest();
    request.onreadystatechange=function () {
        if(request.readyState==4){
            //成功，通过responseText拿到响应文本：
            return
        }
    }
    input.onmous
}

function canvasedo() {
    var canvas=document.getElementById('test-canvas');
    var ctx=canvas.getContext('2d');
    var gl=canvas.getContext('webgl');
    ctx.clearRect(0, 0, 200, 200); // 擦除(0,0)位置大小为200x200的矩形，擦除的意思是把该区域变为透明
    ctx.fillStyle = '#dddddd'; // 设置颜色
    ctx.fillRect(10, 10, 130, 130); // 把(10,10)位置大小为130x130的矩形涂色
// 利用Path绘制复杂路径:
    var path=new Path2D();
    path.arc(75, 75, 50, 0, Math.PI*2, true);
    path.moveTo(110,75);
    path.arc(75, 75, 35, 0, Math.PI, false);
    path.moveTo(65, 65);
    path.arc(60, 65, 5, 0, Math.PI*2, true);
    path.moveTo(95, 65);
    path.arc(90, 65, 5, 0, Math.PI*2, true);
    ctx.strokeStyle = '#0000ff';
    ctx.stroke(path);
}
$('ul.lang li.lang-javascript'); // [<li class="lang-javascript">JavaScript</li>]
$('div.testing li.lang-javascript');
var a=$('#link');
a.on('click',function () {
   alert("hello ,我被点击了")
});




