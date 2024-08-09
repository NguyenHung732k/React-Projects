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
import QuoteGenerator from '../Quote Generator/QuoteGenerator'
import EventCalendar from '../Event Calendar/EventCalendar'
import SurveyForm from '../Survey Form/SurveyForm'
import LocationFinder from '../Location Finder/LocationFinder'
import AvatarGenerator from '../Avatar Generator/AvatarGenerator'
import IPFinder from '../IP Address Information/IPFinder'
import Dictionary from '../Dictionary/Dictionary'
import RollDice from '../Roll Dice/RollDice'
import NumberBaseConverter from '../Number Base Converter/NumberBaseConverter'
import ShoppingCart from '../Shopping Cart/ShoppingCart'
import Invoice from '../Invoice Generator/Invoice'
import CardValidator from '../Card Validator/CardValidator'
import Dashboard from '../Dashboard/Dashboard'
import ECommerce from '../E-Commerce/pages/ECommerce'
import Game from '../Rock Paper Scissors/Game'
import Movie from '../Movie App/Movie'
import Parallax from '../Parallax/Parallax'
import CoinFlipping from '../Coin Flipping/CoinFlipping'
import BlogApp from '../Blog App/BlogApp'
import Recipe from '../Recipe App/Recipe'
import Calculator from '../Calculator/Calculator'
import FlashCard from '../Flash Card App/FlashCard'

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

        {
            key: "showQuotesGenerator",
            component: <QuoteGenerator />
        },

        {
            key: "showEventCalendar",
            component: <EventCalendar />
        },

        {
            key: "showSurvey",
            component: <SurveyForm />
        },

        {
            key: "showLocationFinder",
            component: <LocationFinder />
        },

        {
            key: "showAvatarGenerator",
            component: <AvatarGenerator />
        },

        {
            key: "showIPFinder",
            component: <IPFinder />
        },

        {
            key: "showDictionary",
            component: <Dictionary />
        },

        {
            key: "showRollDice",
            component: <RollDice />
        },

        {
            key: "showNumberBaseConverter",
            component: <NumberBaseConverter />
        },

        {
            key: "showShoppingCart",
            component: <ShoppingCart />
        },

        {
            key: "showInvoiceGenerator",
            component: <Invoice />
        },

        {
            key: "showCardValidator",
            component: <CardValidator />
        },

        {
            key: "showDashboard",
            component: <Dashboard />
        },

        {
            key: "showECommerce",
            component: <ECommerce />
        },

        {
            key: "showRockPaperScissors",
            component: <Game />
        },

        {
            key: "showMovie",
            component: <Movie />
        },

        {
            key: "showParallax",
            component: <Parallax />
        },

        {
            key: "showCoinFlipping",
            component: <CoinFlipping />
        },

        {
            key: "showBlogApp",
            component: <BlogApp />
        },

        {
            key: "showRecipe",
            component: <Recipe />
        },

        {
            key: "showCalculator",
            component: <Calculator />
        },

        {
            key: "showFlashCardApp",
            component: <FlashCard />
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