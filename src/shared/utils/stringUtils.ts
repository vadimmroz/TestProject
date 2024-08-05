export const capitalize = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export const truncate = (str: string, maxLength: number): string => {
    return str.length > maxLength ? str.slice(0, maxLength) + '...' : str
}
