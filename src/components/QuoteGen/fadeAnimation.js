export default function fadeAnimation(_id, _ms) {
    const time = _ms
    const id = _id;
    document.getElementById(id).setAttribute('class', 'fade')
    document.getElementById(id).setAttribute('style', 'animation-play-state: running');
    function pause() {
        return document.getElementById(id).setAttribute('style', 'animation-play-state: paused');
    }
    setTimeout(pause, time);
}