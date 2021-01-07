export default function sleep(_ms){
    let oldDate = Date.now();
    while(Date.now() - oldDate <= _ms);
    return (Date.now() - oldDate);
}