addEventListener("DOMContentLoaded", () => {
    let imgCounter = 0;
    document.getElementById('imageInp').onchange = function loadFile(event) {
        document.getElementById('prevProdbut').disabled = false;
        document.getElementById('prevProdbut').style.cursor = 'pointer';
        document.getElementById('addProdbut').disabled = false;
        document.getElementById('addProdbut').style.cursor = 'pointer';
        for (let i = 0; i < 2; i++) {
            document.getElementsByClassName('buybut')[i].style.visibility = 'visible';
        }
        if (imgCounter == 0) {
            document.getElementById('imagePrev').src = URL.createObjectURL(event.target.files[0]);
            document.getElementsByClassName('imageOptbut')[imgCounter].style.borderColor = 'rgb(40, 90, 255)';
            document.getElementsByClassName('imageOptbut')[imgCounter].style.borderWidth = '2px';
        }
        if (!(imgCounter >= 7)) {
            document.getElementsByClassName('imageOpt')[imgCounter].src = URL.createObjectURL(event.target.files[0]);
            document.getElementsByClassName('imageOptbut')[imgCounter].style.visibility = 'visible';
            document.getElementById('imagePrev').style.display = 'inline';
            let marg = -650;
            document.getElementById('descPrevtab').style.marginTop = (marg /*- imgCounter * 1*/) + 'px';
            document.getElementById('imageOpttab').style.visibility = 'visible';
        } else {
            alert('Cannot insert more than 7 photos!');
        }
        if (imgCounter < 7) {
            imgCounter++;
        }
        return false;
    }
    for (let i = 0; i < 7; i++) {
        document.getElementsByClassName('imageOptbut')[i].onmouseenter = function () {
            for (let j = 0; j < 7; j++) {
                if (document.getElementsByClassName('imageOptbut')[j].style.borderWidth == '2px') {
                    document.getElementsByClassName('imageOptbut')[j].style.borderWidth = '1px';
                    document.getElementsByClassName('imageOptbut')[j].style.borderColor = 'black';
                }
            }
            document.getElementsByClassName('imageOptbut')[i].style.borderWidth = '2px';
            document.getElementsByClassName('imageOptbut')[i].style.borderColor = 'rgb(40, 90, 255)';
            document.getElementById('imagePrev').src = document.getElementsByClassName('imageOpt')[i].src;
        }
    }
    document.getElementById('imgprevdiv').onmouseenter = () => {
        for (let i = 0; i < 2; i++) {
            document.getElementsByClassName('imgToggle')[i].style.visibility = 'visible'
            document.getElementsByClassName('imgToggle')[i].animate([{ opacity: '0' }, { opacity: '1' }], 400)
            document.getElementsByClassName('imgToggle')[i].style.opacity = '1'
        }
    }
    document.getElementById('imgprevdiv').onmouseleave = () => {
        for (let i = 0; i < 2; i++) {
            document.getElementsByClassName('imgToggle')[i].animate([{ opacity: '1' }, { opacity: '0' }], 300)
            document.getElementsByClassName('imgToggle')[i].style.opacity = '0'
        }
    }
    for (let i = 0; i < 2; i++) {
        document.getElementsByClassName('imgToggle')[i].onmouseenter = () => {
            if (i == 0) {
                document.getElementsByClassName('arrows')[0].src = '../data/leftwh.png'
            } else {
                document.getElementsByClassName('arrows')[1].src = '../data/rightwh.png'
            }
            
            
        }
        document.getElementsByClassName('imgToggle')[i].onmouseleave = () => {
            if (i == 0) {
                document.getElementsByClassName('arrows')[0].src = '../data/left.png'
            } else {
                document.getElementsByClassName('arrows')[1].src = '../data/right.png'
            }
        }
    }
    
    document.getElementsByClassName('imgToggle')[0].onclick = function () {
        for (let i = 0; i < imgCounter + 1; i++) {
            if (document.getElementsByClassName('imageOptbut')[i].style.borderWidth == '2px' && i > 0) {
                document.getElementsByClassName('imageOptbut')[i].style.borderWidth = '1px';
                document.getElementsByClassName('imageOptbut')[i].style.borderColor = 'black';
                document.getElementsByClassName('imageOptbut')[i - 1].style.borderWidth = '2px';
                document.getElementsByClassName('imageOptbut')[i - 1].style.borderColor = 'rgb(40, 90, 255)';
                document.getElementById('imagePrev').src = document.getElementsByClassName('imageOpt')[i - 1].src;
                return
            }
        }
    }
    document.getElementsByClassName('imgToggle')[1].onclick = function () {
        for (let i = 0; i < imgCounter + 1; i++) {
            if (document.getElementsByClassName('imageOptbut')[i].style.borderWidth == '2px' && i < imgCounter - 1) {
                document.getElementsByClassName('imageOptbut')[i].style.borderWidth = '1px';
                document.getElementsByClassName('imageOptbut')[i].style.borderColor = 'black';
                document.getElementsByClassName('imageOptbut')[i + 1].style.borderWidth = '2px';
                document.getElementsByClassName('imageOptbut')[i + 1].style.borderColor = 'rgb(40, 90, 255)';
                document.getElementById('imagePrev').src = document.getElementsByClassName('imageOpt')[i + 1].src;
                return
            }
        }
    }
    document.getElementById('productHeader').onkeyup = () => {
        document.getElementById('headerPrev').innerHTML = document.getElementById('productHeader').value;
    }
    document.getElementById('productDesc').onkeyup = () => {
        document.getElementById('descPrev').innerHTML = document.getElementById('productDesc').value;
    }
    document.getElementById('productPrc').onkeyup = () => {
        document.getElementById('prcPrev').innerHTML = document.getElementById('productPrc').value;
    }
    document.getElementById('prevProdbut').onclick = () => {
        window.scrollTo(0, document.body.scrollHeight);

    }
    let imgArr = [];
    let counter = 0;
    document.getElementById('optImage').onchange = function loadFile(event) {
        let optImg = document.createElement('img');
        optImg.src = URL.createObjectURL(event.target.files[0]);
        optImg.style.width = '40px';
        let optBut = document.createElement('button');
        optBut.style.marginLeft = '20px';
        optBut.style.marginTop = '20px';
        optBut.style.paddingTop = '5px';
        optBut.style.cursor = 'pointer';
        optBut.style.backgroundColor = 'white';
        optBut.style.borderWidth = '1px';
        optBut.appendChild(optImg);
        document.getElementById('opttd').appendChild(optBut);
        imgArr[counter] = optBut;
        for (let i = 0; i < imgArr.length; i++) {
            imgArr[i].onclick = () => {
                for (let j = 0; j < imgArr.length; j++) {
                    if (imgArr[j].style.borderWidth == '2px') {
                        imgArr[j].style.borderColor = 'black';
                        imgArr[j].style.borderWidth = '1px';
                    }
                }
                imgArr[i].style.borderColor = 'rgb(40, 90, 255)';
                imgArr[i].style.borderWidth = '2px';
            }
        }
        counter++;
        return false;
    }
    document.getElementById('addcartbut').onclick = function () {
        function delayAlert() {
            alert('This feature will be available soon!')
        }
        setTimeout(delayAlert, 400)
    }
})