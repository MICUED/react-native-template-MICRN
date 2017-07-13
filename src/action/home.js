import * as HomeType from "./type/homeType.js"

export const show = () => {
    return {
        type: HomeType.SHOW
    }
}

export const hide = () => {
    return {
        type: HomeType.HIDE
    }
}
