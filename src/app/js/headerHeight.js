import { rootStyles, header } from "./utilities/variables"

addEventListener('DOMContentLoaded', headerHeight)
addEventListener('resize', headerHeight)

function headerHeight() {
    const heightComputed = getComputedStyle(header).height
    rootStyles.setProperty('--header-height', heightComputed)
}