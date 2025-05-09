// eslint-disable-next-line
Date.prototype.getAmPm = function () {
    if (this.getHours() >= 12) { return 1 }; // pm
    return 0; // am
}

export const locale = {
    en: {
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September ', 'October', 'November', 'December'],
        ampm: ['am', 'pm']
    },
    km: {
        month: ['មករា', 'កុម្ភៈ', 'មីនា', 'មេសា', 'ឧសភា',
            'មិថុនា', 'កក្កដា', 'សីហា', 'កញ្ញា', 'តុលា', 'វិច្ឆិកា', 'ធ្នូ'],
        ampm: ['ព្រឹក', 'ល្ងាច']
    }
};

export const toLocaleNumber = (num, lang, zeroPadding) => {
    if (typeof num !== 'number') return null;

    const numInteger = parseInt(num);
    let numString = numInteger.toString();

    if (zeroPadding > 0 && numString.length < zeroPadding) {
        numString = '0' + numString;
    }

    // support only khmer
    if (lang !== 'km') { return numString };

    let khmerNumber = '';
    const numbersKhmer = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];

    for (var i = 0; i < numString.length; i++) {
        khmerNumber += numbersKhmer[parseInt(numString[i])];
    }

    return khmerNumber;
};

export const formatFullKhDate = (d, lang) => {
    let formattedDate = null;
    let hours = d.getHours();
    if (hours > 12) { hours -= 12; };
    formattedDate = 'ថ្ងៃទី' + toLocaleNumber(d.getDate(), lang, 2)
        + ' ខែ'
        + locale[lang]['month'][d.getMonth()]
        + ' ឆ្នាំ'
        + toLocaleNumber(d.getFullYear(), lang);

    return formattedDate;
};