export default function disbleBtn(_id,_ms){
    const id = _id;
    const time = _ms;
    document.getElementById(id).setAttribute('disabled',null);
    function enableBtn(){
        return document.getElementById(id).removeAttribute('disabled');
    }
    setTimeout(enableBtn,time);
}