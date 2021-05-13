import ContextMenu from './ContextMenu/ContextMenu'
import ScrollSpy from './ScrollSpy/ScrollSpy'
import LoadScroll from './LoadScroll/LoadScroll'
import DarkMode from './DarkMode/DarkMode'
import StopWatch from './StopWatch/StopWatch'
import Tab from './Tab/Tab'
import AnalogClock from './AnalogClock/AnalogClock'
import Carousel from './Carousel/Carousel'
import ToggleButton from './ToggleButton/ToggleButton'
import ChipsUi from './ChipsUI/ChipsUI'
import DropdownMenu from './DropdownMenu/DropdownMenu'
import Modal from './Modal/Modal'

export { ContextMenu, ScrollSpy, LoadScroll, DarkMode, StopWatch, AnalogClock, Carousel, ToggleButton, ChipsUi, DropdownMenu, Modal }
export default [
    { name: 'ContextMenu', comp: ContextMenu },
    { name: 'ScrollSpy', comp: ScrollSpy },
    { name: 'LoadScroll', comp: LoadScroll },
    { name: 'StopWatch',  comp: StopWatch },
    { name: 'Tab', comp: Tab },
    { name: 'AnalogClock', comp: AnalogClock },
    { name: 'Carousel', comp: Carousel },
    { name: 'ToggleButton', comp: ToggleButton },
    { name: 'ChipsUi', comp: ChipsUi },
    { name: 'DropdownMenu', comp: DropdownMenu },
    { name: 'Modal', comp: Modal },
]
