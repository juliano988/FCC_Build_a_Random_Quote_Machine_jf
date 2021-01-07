import bg0PC from '../../background/PC/bg0.jpg'
import bg1PC from '../../background/PC/bg1.jpg'
import bg2PC from '../../background/PC/bg2.jpg'
import bg3PC from '../../background/PC/bg3.jpg'
import bg4PC from '../../background/PC/bg4.jpg'
import bg5PC from '../../background/PC/bg5.jpg'
import bg6PC from '../../background/PC/bg6.jpg'
import bg7PC from '../../background/PC/bg7.jpg'
import bg8PC from '../../background/PC/bg8.jpg'
import bg9PC from '../../background/PC/bg9.jpg'

import bg0SP from '../../background/SP/bg0.jpg'
import bg1SP from '../../background/SP/bg1.jpg'
import bg2SP from '../../background/SP/bg2.jpg'
import bg3SP from '../../background/SP/bg3.jpg'
import bg4SP from '../../background/SP/bg4.jpg'
import bg5SP from '../../background/SP/bg5.jpg'
import bg6SP from '../../background/SP/bg6.jpg'
import bg7SP from '../../background/SP/bg7.jpg'
import bg8SP from '../../background/SP/bg8.jpg'
import bg9SP from '../../background/SP/bg9.jpg'

const PcArr = [bg0PC, bg1PC, bg2PC, bg3PC, bg4PC, bg5PC, bg6PC, bg7PC, bg8PC, bg9PC];
const SpArr = [bg0SP, bg1SP, bg2SP, bg3SP, bg4SP, bg5SP, bg6SP, bg7SP, bg8SP, bg9SP];

//"dkagsfagia" is just a random name.
//The "if" below was necessary for the app to work well on Chorome mobile browser.
//The code simply forces the browser to download all necessary images before the app runs.
if (window.innerWidth <= 768) {

    for (let i in SpArr) {
        document.body.appendChild(document.createElement("div")).setAttribute('id', 'dkagsfagia' + i);
        document.getElementById('dkagsfagia' + i).setAttribute('style', 'background-image: url(' + SpArr[i] + ')');
        document.getElementById('dkagsfagia' + i).setAttribute('display', 'none');
        
    }
} else {

    for (let i in PcArr) {
        document.body.appendChild(document.createElement("div")).setAttribute('id', 'dkagsfagia' + i);
        document.getElementById('dkagsfagia' + i).setAttribute('style', 'background-image: url(' + SpArr[i] + ')');
        document.getElementById('dkagsfagia' + i).setAttribute('display', 'none');
    }
}

export default function bgAnimation(_randNum) {
    const randNum = _randNum;

    if (window.innerWidth <= 768) {
        document.getElementById('project-body').setAttribute('style', 'background-image: url(' + SpArr[randNum] + ')');
    } else {
        document.getElementById('project-body').setAttribute('style', 'background-image: url(' + PcArr[randNum] + ')');
    }
    document.getElementById('project-body').setAttribute('class', 'bgImg' + randNum);
}