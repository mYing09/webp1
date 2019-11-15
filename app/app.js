// 加载app.less
require('../less/app.less');

let img = require('../img/duoyun.png');
console.log('img ==> ',img);

window.onload = function(){

    let person = ['kevin','mark','iven'];

    let ul = document.createElement('ul');

    person.map(v => {
        let li = this.document.createElement('li');
        li.textContent = v;
        ul.appendChild(li);
    })

    document.body.appendChild(ul);

    // 创建图片对象
    let image = new Image();

    image.src = img;

    // if(/^data:image\/[A-Za-z]+;base64/){
    //     // 该图片就是base64
    //     image.src = img;
    // }else{
    //     image.src = './build/' + img;
    // }

    document.getElementById('icon').appendChild(image);
}