
export const calcVW = (value: string | number, windowWidth = window.innerWidth, mobileValue?: number) => {
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

export const calcVWP = (value: string | number, windowWidth = window.innerWidth, mobileValue?: number) => {
    const mediaValue = windowWidth <= 576 && mobileValue ? mobileValue : value
    let num = 0.000520833333;
    if (windowWidth <= 576) {
        num = 0.003125
    }
    return Math.round(Number(mediaValue) * num * windowWidth)
}

export const calcVWD = (value: string | number, windowWidth = window.innerWidth, mobileValue?: number) => {
    const mediaValue = windowWidth <= 576 && mobileValue ? mobileValue : value
    let num = 1920 / windowWidth;
    if (windowWidth <= 576) {
        num = 0.003125
    }
    return Math.round(Number(mediaValue) * 1920 / windowWidth)
}