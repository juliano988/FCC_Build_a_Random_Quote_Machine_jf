export default function avoidRepeatedNum(_oldNum, _maxNum) {
    const oldNum = _oldNum;
    const maxNum = _maxNum;
    const newNum = Math.floor(Math.random() * maxNum);
    let finalNum = newNum;

    while (oldNum === finalNum) {
        finalNum = Math.floor(Math.random() * maxNum);
    }
    return finalNum;
}