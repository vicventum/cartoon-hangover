import { rootStyles, header } from "./utilities/variables"

addEventListener('DOMContentLoaded', headerHeight)
addEventListener('resize', headerHeight)

function headerHeight() {
    const heightComputed = getComputedStyle(header).height
    console.log(heightComputed)
    rootStyles.setProperty('--header-height', heightComputed)
}