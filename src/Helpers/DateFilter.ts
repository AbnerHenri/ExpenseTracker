export const getCurrentMonth = () => {
    let Now = new Date()
    return `${Now.getFullYear()} - ${Now.getMonth() + 1}`
}