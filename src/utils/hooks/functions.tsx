
export const calcVW = (value: string | number, mobileValue?: number) => {
    const mediaValue = window.innerWidth <= 576 && mobileValue ? mobileValue : value
    let num = 0.000520833333;
    if (window.innerWidth <= 576) {
        num = 0.003125
    }
    if (typeof mediaValue == 'string') {
        const newValue = mediaValue.replace('px', '')
        return Number(newValue) * num * window.innerWidth + 'px'
    } else {
        return Number(mediaValue) * num * window.innerWidth
    }
}