
export const calcVW = (value: string | number) => {
    if (typeof value == 'string') {
        const newValue = value.replace('px', '')
        return Number(newValue) * 0.000520833333 * window.innerWidth + 'px'
    } else {
        return Number(value) * 0.000520833333 * window.innerWidth
    }
}