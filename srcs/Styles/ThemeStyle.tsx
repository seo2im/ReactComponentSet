import { DefaultTheme } from 'styled-components'

export const dark: DefaultTheme = {
    bgColor: 'black',
    fontColor: 'white',
    compColor: 'white',
}

export const light: DefaultTheme = {
    bgColor: 'white',
    fontColor: 'black',
    compColor: 'black',
}
const Theme: {[key: string]: DefaultTheme} = {
    dark, light
}
export default Theme