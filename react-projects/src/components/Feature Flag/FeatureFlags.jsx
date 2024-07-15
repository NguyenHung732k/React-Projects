import React, { useContext } from 'react'
import Accordion from '../Accordion/Accordion'
import ChangeTheme from '../Change Theme/ChangeTheme'
import ImagesSlider from '../Images Slider/ImagesSlider'
import LoadMore from '../Load More/LoadMore'
import Modal from '../Modal/Modal'
import OutsideClick from '../Outside Click/OutsideClick'
import QRCodeGenerator from '../QR Code Generator/QRCodeGenerator'
import RandomColor from '../Random Color/RandomColor'
import WindowResize from '../Resize Window/WindowResize'
import ScrollIndicator from '../Scroll Indicator/ScrollIndicator'
import ScrollToSection from '../Scroll To Section/ScrollToSection'
import ScrollToTop from '../Scroll To Top/ScrollToTop'
import SearchAutocomplete from '../Search Autocomplete/SearchAutocomplete'
import StarRating from '../Star Rating/StarRating'
import Tabs from '../Tabs/Tabs'
import LoginForm from '../Login Form/LoginForm'
import SignUpForm from '../Sign Up/SignUpForm'
import ColorPalette from '../Color Palette/ColorPalette'
import StopWatch from '../Stopwatch/StopWatch'
import ToDo from '../To Do/ToDo'
import NewsApp from '../News/NewsApp'
import QuizApp from '../Quiz/QuizApp'
import WordGame from '../Word Game/WordGame'
import Country from '../Country Information/Country'
import ProgressTracker from '../Progress Tracker/ProgressTracker'
import EventCountdown from '../Event Countdown/EventCountdown'

import { FeatureFlagsContext } from './context/FeatureFlagGlobalState'


const FeatureFlags = () => {

    const { loading, enabledFlags } = useContext(FeatureFlagsContext)

    const componentsToRender = [
        {
            key: "showAccordion",
            component: <Accordion />
        },

        {
            key: "showChangeTheme",
            component: <ChangeTheme />
        },

        {
            key: "showImagesSlider",
            component: <ImagesSlider />
        },

        {
            key: "showLoadMore",
            component: <LoadMore />
        },

        {
            key: "showModal",
            component: <Modal />
        },

        {
            key: "showOutsideClick",
            component: <OutsideClick />
        },

        {
            key: "showQRCode",
            component: <QRCodeGenerator />
        },

        {
            key: "showRandomColor",
            component: <RandomColor />
        },

        {
            key: "showResizeWindow",
            component: <WindowResize />
        },

        {
            key: "showScrollIndicator",
            component: <ScrollIndicator />
        },

        {
            key: "showScrollToSection",
            component: <ScrollToSection />
        },

        {
            key: "showScrollToTop",
            component: <ScrollToTop />
        },

        {
            key: "showSearchAutocomplete",
            component: <SearchAutocomplete />
        },

        {
            key: "showStarRating",
            component: <StarRating />
        },

        {
            key: "showTabs",
            component: <Tabs />
        },

        {
            key: "showLoginForm",
            component: <LoginForm />
        },

        {
            key: "showSignUp",
            component: <SignUpForm />
        },

        {
            key: "showColorPalette",
            component: <ColorPalette />
        },

        {
            key: "showStopWatch",
            component: <StopWatch />
        },

        {
            key: "showToDo",
            component: <ToDo />
        },

        {
            key: "showNewsApp",
            component: <NewsApp />
        },

        {
            key: "showQuizApp",
            component: <QuizApp />
        },

        {
            key: "showWordGame",
            component: <WordGame />
        },

        {
            key: "showCountryInfo",
            component: <Country />
        },

        {
            key: "showProgressTracker",
            component: <ProgressTracker />
        },

        {
            key: "showEventCountdown",
            component: <EventCountdown />
        },
    ]

    const checkEnabledFlags = (getCurrentKey) => {
        return enabledFlags[getCurrentKey]
    }

    if (loading) return <h1>Loading data ! Please wait</h1>

    return (
        <div>
            {componentsToRender.map((componentItem) =>
                checkEnabledFlags(componentItem.key) ? componentItem.component : null
            )}
        </div>
    )
}

export default FeatureFlags