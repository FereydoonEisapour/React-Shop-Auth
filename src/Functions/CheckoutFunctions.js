// * Format card Date  12/23 
function cardDateFormater(value) {
    return value = value.replace(
        /^([1-9]\/|[2-9])$/g, '0$1/' // 3 > 03/
    ).replace(
        /^(0[1-9]|1[0-2])$/g, '$1/' // 11 > 11/
    ).replace(
        /^([0-1])([3-9])$/g, '0$1/$2' // 13 > 01/3
    ).replace(
        /^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2' // 141 > 01/41
    ).replace(
        /^([0]+)\/|[0]+$/g, '0' // 0/ > 0 and 00 > 0
    ).replace(
        /[^\d\/]|^[\/]*$/g, '' // To allow only digits and `/`
        //  /[^0-9]/g, ''
    ).replace(
        /\/\//g, '/' // Prevent entering more than 1 `/`
    );
}
// *  Format Card Number    1234 5678 9101 1111
function cardNumberFormater(value) {
    let v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    let matches = v.match(/\d{4,16}/g);
    let match = (matches && matches[0]) || ''
    let parts = []
    for (let i = 0, len = match.length; i < len; i += 4) {
        parts.push(match.substring(i, i + 4))
    }

    if (parts.length) {
        return parts.join(' ')
    } else {
        return value
    }
}
// * Find card number type 
function masker(value) {
    let data = ''
    let mask = [
        {
            mask: '0000 000000 00000',
            regex: '^3[47]\\d{0,13}',
            cardtype: 'american express',
            color: 'green'
        },
        {
            mask: '0000 0000 0000 0000',
            regex: '^(?:6011|65\\d{0,2}|64[4-9]\\d?)\\d{0,12}',
            cardtype: 'discover',
            color: 'purple'
        },
        {
            mask: '0000 000000 0000',
            regex: '^3(?:0([0-5]|9)|[689]\\d?)\\d{0,11}',
            cardtype: 'diners',
            color: 'orange'
        },
        {
            mask: '0000 0000 0000 0000',
            regex: '^(5[1-5]\\d{0,2}|22[2-9]\\d{0,1}|2[3-7]\\d{0,2})\\d{0,12}',
            cardtype: 'mastercard',
            color: 'lightblue'
        },
        {
            mask: '0000 000000 00000',
            regex: '^(?:2131|1800)\\d{0,11}',
            cardtype: 'jcb15',
            color: 'red'
        },
        {
            mask: '0000 0000 0000 0000',
            regex: '^(?:35\\d{0,2})\\d{0,12}',
            cardtype: 'jcb',
            color: 'red'
        },
        {
            mask: '0000 0000 0000 0000',
            regex: '^(?:5[0678]\\d{0,2}|6304|67\\d{0,2})\\d{0,12}',
            cardtype: 'maestro',
            color: 'yellow'
        },
        {
            mask: '0000 0000 0000 0000',
            regex: '^4\\d{0,15}',
            cardtype: 'visa',
            color: 'lime'
        },
        {
            mask: '0000 0000 0000 0000',
            regex: '^62\\d{0,14}',
            cardtype: 'unionpay',
            color: 'cyan'
        },
        {
            mask: '0000 0000 0000 0000',
            regex: '',
            cardtype: 'Unknown',
            color: ''

        }
    ]
    let regFind = null
    function setReg(mask, value) {
        for (let i = 0; i < 10; i++) {
            let re = new RegExp(mask[i].regex);
            if (value.match(re) != null) {
                regFind = mask[i]
                return data = [regFind.cardtype, regFind.color]
            }
        }
    }
    setReg(mask, value)
    return data
}
export { cardNumberFormater, cardDateFormater, masker }