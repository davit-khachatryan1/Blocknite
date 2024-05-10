
export const calcVW = (value: string | number) => {
    let num = 0.000520833333;
    if (window.innerWidth <= 576) {
        num = 0.003125
    }
    if (typeof value == 'string') {
        const newValue = value.replace('px', '')
        return Number(newValue) * num * window.innerWidth + 'px'
    } else {
        return Number(value) * num * window.innerWidth
    }
}