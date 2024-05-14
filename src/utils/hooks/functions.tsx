
export const calcVW = (value: string | number, windowWidth: number, mobileValue?: number) => {
    const mediaValue = windowWidth <= 576 && mobileValue ? mobileValue : value
    let num = 0.000520833333;
    if (windowWidth <= 576) {
        num = 0.003125
    }
    if (typeof mediaValue == 'string') {
        const newValue = mediaValue.replace('px', '')
        return Number(newValue) * num * windowWidth + 'px'
    } else {
        return Number(mediaValue) * num * windowWidth
    }
}