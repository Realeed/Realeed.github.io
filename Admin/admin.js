addEventListener("DOMContentLoaded", () => {
    document.body.style.visibility = 'hidden';
    function makeVis() {
        document.body.style.visibility = 'visible';
    }
    setTimeout(makeVis, 500);
    const searchBut = document.getElementById('menusearch');
    const searchImg = document.getElementById('searchImg');
    const bagBut = document.getElementById('menubag');
    const bagImg = document.getElementById('bagImg');
    searchBut.onmouseenter = () => {
        searchImg.src = '../data/searchwh.png';
    }
    searchBut.onmouseleave = () => {
        searchImg.src = '../data/search.png';
    }
    bagBut.onmouseenter = () => {
        bagImg.src = '../data/bagwh.png';
    }
    bagBut.onmouseleave = () => {
        bagImg.src = '../data/bag.png';
    }
    const searchbar = document.createElement('input');
    searchbar.placeholder = 'Search casessouel.com';
    searchbar.style.height = '26px';
    searchbar.style.outline = 'none';
    searchbar.style.borderRadius = '2px';
    searchbar.style.fontSize = '16px';
    searchbar.style.border = 'none';
    searchbar.style.marginTop = '3px';
    searchbar.style.paddingLeft = '7px';
    searchbar.style.backgroundColor = 'rgb(40, 40, 40)';
    searchbar.style.color = 'rgb(220, 220, 220)';
    searchbar.spellcheck = false;
    searchbar.autofocus = true;
    const menu = document.getElementsByClassName('menu');
    window.onscroll = () => {
        document.getElementById('menu').style.backgroundColor = 'rgb(40, 40, 40, 0.85)';
        if (window.pageYOffset == 0) {
            document.getElementById('menu').style.backgroundColor = 'rgb(40, 40, 40)';
        }
    }
    searchBut.onclick = () => {
        menu[0].animate([{ opacity: '1' }, { opacity: '0' }], 400);
        menu[1].animate([{ opacity: '1' }, { opacity: '0' }], 350);
        menu[2].animate([{ opacity: '1' }, { opacity: '0' }], 300);
        menu[3].animate([{ opacity: '1' }, { opacity: '0' }], 250);
        menu[4].animate([{ opacity: '1' }, { opacity: '0' }], 200);
        menu[5].animate([{ opacity: '1' }, { opacity: '0' }], 150);
        menu[6].animate([{ opacity: '1' }, { opacity: '0' }], 100);
        menu[7].animate([{ opacity: '1' }, { opacity: '0' }], 50);
        function opac0() {
            menu[0].style.visibility = 'hidden';
        }
        setTimeout(opac0, 390);

        function opac1() {
            menu[1].style.visibility = 'hidden';
        }
        setTimeout(opac1, 340);

        function opac2() {
            menu[2].style.visibility = 'hidden';
        }
        setTimeout(opac2, 290);

        function opac3() {
            menu[3].style.visibility = 'hidden';
        }
        setTimeout(opac3, 240);

        function opac4() {
            menu[4].style.visibility = 'hidden';
        }
        setTimeout(opac4, 190);

        function opac5() {
            menu[5].style.visibility = 'hidden';
        }
        setTimeout(opac5, 140);

        function opac6() {
            menu[6].style.visibility = 'hidden';
        }
        setTimeout(opac6, 90);
        function opac7() {
            menu[7].style.visibility = 'hidden';
        }
        setTimeout(opac7, 40);
        function search() {
            for (let i = 0; i < 8; i++) {
                menu[i].style.display = 'none';
            }
            if (window.pageYOffset > 0) {
                window.scroll(0, 0);
            }
            const searchtab = document.getElementById('searchtab');
            searchtab.style.display = 'block';
            searchtab.animate([{ height: '0px' }, { height: '110px' }], 200);
            searchtab.style.height = '110px';
            function sbuts() {
                for (let i = 0; i < 3; i++) {
                    document.getElementsByClassName('sbuts')[i].style.visibility = 'visible';
                }
            }
            setTimeout(sbuts, 200);
            document.getElementById('stxt').style.display = 'block';
            document.getElementById('stxt').animate([{ opacity: '0' }, { opacity: '0.5' }], 300)
            document.getElementById('stxt').style.opacity = '0.5';
            document.body.style.overflowY = 'hidden';
            const searchim = document.createElement('img');
            searchim.src = '../data/search.png';
            searchim.style.width = '25px';
            searchim.style.marginBottom = '-6px';
            document.getElementById('menu').appendChild(searchim);
            document.getElementById('menu').appendChild(searchbar);
            searchbar.onkeydown = key => {
                if (key.code == 'Escape') {
                    document.body.style.overflowY = 'visible';
                    document.getElementById('stxt').style.display = 'none';
                    searchtab.style.display = 'none';
                    for (let i = 0; i < 3; i++) {
                        document.getElementsByClassName('sbuts')[i].style.visibility = 'hidden';
                    }
                    searchim.animate([{ marginLeft: '34%' }, { marginLeft: '60%' }], 200);
                    function searchan() {
                        searchim.style.display = 'none';
                        closeSearch.style.display = 'none';
                        searchbar.style.display = 'none';
                        for (let i = 0; i < 8; i++) {
                            menu[i].style.display = 'inline';
                        }
                    }
                    setTimeout(searchan, 200);
                    menu[0].animate([{ opacity: '0' }, { opacity: '1' }], 400);
                    menu[1].animate([{ opacity: '0' }, { opacity: '1' }], 410);
                    menu[2].animate([{ opacity: '0' }, { opacity: '1' }], 420);
                    menu[3].animate([{ opacity: '0' }, { opacity: '1' }], 430);
                    menu[4].animate([{ opacity: '0' }, { opacity: '1' }], 440);
                    menu[5].animate([{ opacity: '0' }, { opacity: '1' }], 450);
                    menu[6].animate([{ opacity: '0' }, { opacity: '1' }], 460);
                    menu[7].animate([{ opacity: '0' }, { opacity: '1' }], 470);
                    function opac0() {
                        menu[0].style.visibility = 'visible';
                    }
                    setTimeout(opac0, 400);
                    function opac1() {
                        menu[1].style.visibility = 'visible';
                    }
                    setTimeout(opac1, 410);
    
                    function opac2() {
                        menu[2].style.visibility = 'visible';
                    }
                    setTimeout(opac2, 420);
    
                    function opac3() {
                        menu[3].style.visibility = 'visible';
                    }
                    setTimeout(opac3, 430);
    
                    function opac4() {
                        menu[4].style.visibility = 'visible';
                    }
                    setTimeout(opac4, 440);
    
                    function opac5() {
                        menu[5].style.visibility = 'visible';
                    }
                    setTimeout(opac5, 450);
    
                    function opac6() {
                        menu[6].style.visibility = 'visible';
                    }
                    setTimeout(opac6, 460);
                    function opac7() {
                        menu[7].style.visibility = 'visible';
                    }
                    setTimeout(opac7, 470);
                    searchbar.value = '';
                }
                for (let i = 0; i < document.getElementsByClassName('sbuts').length; i++) {
                    if (!(document.getElementsByClassName('sbuts')[i].innerHTML[0] == (key.code[3].toLowerCase())) && key.code != 'Backspace' && key.code != 'Enter' && key.code != 'Escape') {
                        document.getElementsByClassName('sbuts')[i].style.visibility = 'hidden';
                    }
                }
                for (let i = 0; i < document.getElementsByClassName('sbuts').length; i++) {
                    if (key.code == 'Backspace' && i > 0) {
                        document.getElementsByClassName('sbuts')[i-1].style.visibility = 'visible';
                    }
                }
                for (let i = 0; i < document.getElementsByClassName('sbuts').length; i++) {

                }
            }
            searchbar.style.display = 'inline';
            searchbar.animate([{ marginLeft: '90%', width: '5%' }, { marginLeft: '3px', width: '30%' }], 200);
            searchbar.style.marginLeft = '3px';
            searchbar.style.width = '30%';
            searchim.animate([{ marginLeft: '0' }, { marginLeft: '34%' }], 100);
            searchim.style.marginLeft = '34%';
            const closeSearch = document.createElement('button');
            closeSearch.innerHTML = '✕';
            closeSearch.style.backgroundColor = 'rgb(40, 40, 40)';
            closeSearch.style.fontSize = '17px';
            closeSearch.style.cursor = 'pointer';
            closeSearch.style.border = 'none';
            closeSearch.style.color = 'rgb(150, 150, 150)';
            closeSearch.onmouseenter = () => {
                closeSearch.style.color = 'rgb(220, 220, 220)';
            }
            closeSearch.onmouseleave = () => {
                closeSearch.style.color = 'rgb(150, 150, 150)';
            }
            function closeTime() {
                document.getElementById('menu').appendChild(closeSearch);
            }
            setTimeout(closeTime, 200);
            closeSearch.onclick = () => {
                document.body.style.overflowY = 'visible';
                document.getElementById('stxt').style.display = 'none';
                searchtab.style.display = 'none';
                for (let i = 0; i < 3; i++) {
                    document.getElementsByClassName('sbuts')[i].style.visibility = 'hidden';
                }
                searchim.animate([{ marginLeft: '34%' }, { marginLeft: '60%' }], 200);
                function searchan() {
                    searchim.style.display = 'none';
                    closeSearch.style.display = 'none';
                    searchbar.style.display = 'none';
                    for (let i = 0; i < 8; i++) {
                        menu[i].style.display = 'inline';
                    }
                }
                setTimeout(searchan, 200);
                menu[0].animate([{ opacity: '0' }, { opacity: '1' }], 400);
                menu[1].animate([{ opacity: '0' }, { opacity: '1' }], 410);
                menu[2].animate([{ opacity: '0' }, { opacity: '1' }], 420);
                menu[3].animate([{ opacity: '0' }, { opacity: '1' }], 430);
                menu[4].animate([{ opacity: '0' }, { opacity: '1' }], 440);
                menu[5].animate([{ opacity: '0' }, { opacity: '1' }], 450);
                menu[6].animate([{ opacity: '0' }, { opacity: '1' }], 460);
                menu[7].animate([{ opacity: '0' }, { opacity: '1' }], 470);
                function opac0() {
                    menu[0].style.visibility = 'visible';
                }
                setTimeout(opac0, 400);
                function opac1() {
                    menu[1].style.visibility = 'visible';
                }
                setTimeout(opac1, 410);

                function opac2() {
                    menu[2].style.visibility = 'visible';
                }
                setTimeout(opac2, 420);

                function opac3() {
                    menu[3].style.visibility = 'visible';
                }
                setTimeout(opac3, 430);

                function opac4() {
                    menu[4].style.visibility = 'visible';
                }
                setTimeout(opac4, 440);

                function opac5() {
                    menu[5].style.visibility = 'visible';
                }
                setTimeout(opac5, 450);

                function opac6() {
                    menu[6].style.visibility = 'visible';
                }
                setTimeout(opac6, 460);
                function opac7() {
                    menu[7].style.visibility = 'visible';
                }
                setTimeout(opac7, 470);
                searchbar.value = '';
            }
        }
        setTimeout(search, 300);
    }
    document.getElementById('imageInp').onchange = function loadFile(event) {
        let file = document.createElement('img');
        file.src = URL.createObjectURL(event.target.files[0]);
        file.style.webkitUserDrag = 'none';
        file.style.width = '500px';
        document.getElementById('imagePrev').appendChild(file);
        dragElement(file);
        return false;
    }
    document.getElementById('productDesc').onkeypress = () => {
        document.getElementById('descPrev').innerHTML = document.getElementById('productDesc').value;
    }
})