
//function to convert a number when passed
const decToBin = (() => {
    
    //function to get and to return the result
    function getNbrToConvertFn (decNbr) {
        let binaryNbr = toConvertToBinFn (parseInt(decNbr));
        binaryNbr = parseInt(binaryNbr.join(''));
        return binaryNbr;
    }

    //function to do the conversion
    function toConvertToBinFn (toBin) {
        let binaryResult = [];
        const quotient = parseInt(Math.floor(toBin/2));
        if (quotient !== 1 && quotient !== 0) {
            let result = toConvertToBinFn(quotient);
            result = result.concat(toBin%2);
            return result;
        }
        else {
            binaryResult.push(quotient,Math.round(toBin%2));
            return binaryResult;
        }
    }
    return {getNbrToConvertFn}
})()






//function to deal with events and DOM
const DOMFn = (() => {
    document.getElementById('submitButton').value = `Convert \n (ctrl + Enter)`;
    const passInputNbrFn = e => {
        e.preventDefault();
        if (!document.getElementById('inputtedNbr').value) {
            window.alert('Please Insert A Value');
        }
        else {
            const decimalNbr = document.getElementById('inputtedNbr').value;
            document.getElementById('inputtedNbr').value = '';
            const binaryNbr = decToBin.getNbrToConvertFn(parseInt(decimalNbr));
            document.getElementById('inputtedDecimalDisplay').innerText = `${decimalNbr}`;
            document.getElementById('outputtedBinaryDisplay').innerText = `${binaryNbr}`;
        }
    }

    return {passInputNbrFn} 
})()



//global event listener
document.getElementById('submitButton').addEventListener('click',DOMFn.passInputNbrFn);
document.addEventListener('keydown',e => {
    if (e.ctrlKey && e.key === 'Enter') {
        DOMFn.passInputNbrFn(e);
    }
});

