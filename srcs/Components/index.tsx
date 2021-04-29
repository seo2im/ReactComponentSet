import ContextMenu from './ContextMenu/ContextMenu'
import ScrollSpy from './ScrollSpy/ScrollSpy'
import LoadScroll from './LoadScroll/LoadScroll'
import DarkMode from './DarkMode/DarkMode'
import StopWatch from './StopWatch/StopWatch'
import Tab from './Tab/Tab'

export { ContextMenu, ScrollSpy, LoadScroll, DarkMode, StopWatch }
export default [
    { name: 'ContextMenu', comp: ContextMenu },
    { name: 'ScrollSpy', comp: ScrollSpy },
    { name: 'LoadScroll', comp: LoadScroll },
    { name: 'StopWatch',  comp: StopWatch },
    { name: 'Tab', comp: Tab },
]
