export const formatCurrency = (num: number): string => {
    return num.toFixed(2)
}

export const toPercentage = (num: number): string => {
    return `${(num * 100).toFixed(2)}%`
}
