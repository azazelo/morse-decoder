const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
     let art=expr.split('');
        let size=10;
        let sup=[];
        for(let i=0;i<art.length;i+=size){
            sup.push(art.slice(i,i+size))
        }
    function tar(antin){ 
        let sizen=2;
        let sap=[];
        for(let i=0;i<antin.length;i+=sizen){
        if(((antin.slice(i,i+sizen)).join(''))!=="00"){
            if(((antin.slice(i,i+sizen)).join(''))==="10"){
             sap.push('.')   
            }
            else if(((antin.slice(i,i+sizen)).join(''))==="11"){
            sap.push('-')
            }
            else{
            sap.push((antin.slice(i,i+sizen)).join(''))}
        }
    }
        return sap
    }
        let artic=sup.map((a)=>tar(a));
        let turin =artic.map((a)=>a.join(''));
        const MORSE_TABLE = {
        '.-':     'a',
        '-...':   'b',
        '-.-.':   'c',
        '-..':    'd',
        '.':      'e',
        '..-.':   'f',
        '--.':    'g',
        '....':   'h',
        '..':     'i',
        '.---':   'j',
        '-.-':    'k',
        '.-..':   'l',
        '--':     'm',
        '-.':     'n',
        '---':    'o',
        '.--.':   'p',
        '--.-':   'q',
        '.-.':    'r',
        '...':    's',
        '-':      't',
        '..-':    'u',
        '...-':   'v',
        '.--':    'w',
        '-..-':   'x',
        '-.--':   'y',
        '--..':   'z',
        '.----':  '1',
        '..---':  '2',
        '...--':  '3',
        '....-':  '4',
        '.....':  '5',
        '-....':  '6',
        '--...':  '7',
        '---..':  '8',
        '----.':  '9',
        '-----':  '0',
        '**********': ' '
    };
    let ares =turin.map((a)=>MORSE_TABLE[a]);
        return (ares.join(''))
}

module.exports = {
    decode
}
