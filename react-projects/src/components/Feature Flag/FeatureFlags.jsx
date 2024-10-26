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
import Gallery from '../Gallery/Gallery'
import Pomodoro from '../Pomodoro/Pomodoro'
import ContentCMS from '../CMS/ContentCMS'
import StockMarketTracker from '../Stock Market Tracker/StockMarketTracker'
import CRM from '../CRM/CRM'
import EventManagement from '../Event Management/EventManagement'
import Timeline from '../Timeline/Timeline'
import Home from '../Finance Tracker/pages/Home'
import Inventory from '../Inventory Management/Inventory'
import MarketPlace from '../Online Marketplace/pages/MarketPlace'
import BookManagement from '../Books Management/pages/BookManagement'
import AddressBook from '../Address Book/AddressBook'
import Checklist from '../Checklist/Checklist'
import BMICalculator from '../BMI Calculator/BMICalculator'
import BookTracker from '../Books Tracker/BookTracker'
import WatchList from '../Watch List/WatchList'
import MusicAlbum from '../Music Album Catalog/MusicAlbum'
import PasswordManager from '../Password Manager/PasswordManager'
import DragAndDrop from '../Drag And Drop/DragAndDrop'
import TicTacToe from '../Tic Tac Toe/TicTacToe'
import ToursApp from '../Tours App/ToursApp'
import ArtGallery from '../Art Gallery/ArtGallery'
import ItineraryPlanner from '../Travel Itinerary Planner/ItineraryPlanner'
import VirtualGarden from '../Virtual Garden Planner/VirtualGarden'
import ReactHookForm from '../React Hook Form/ReactHookForm'
import MarkdownPreviewer from '../Markdown Previewer/MarkdownPreviewer'
import UnitConverter from '../Unit Converter/UnitConverter'
import CurrencyConverter from '../Currency Converter/CurrencyConverter'
import PasswordGenerator from '../Password Generator/PasswordGenerator'
import FeedbackForm from '../Feedback Form/FeedbackForm'
import IngredientSubstituter from '../Ingredient Substituter/IngredientSubstituter'
import OnlinePoll from '../Online Poll/OnlinePoll'
import NotificationCenter from '../Notification Center/NotificationCenter'
import PhotoCollageEditor from '../Photo Collage Editor/PhotoCollageEditor'
import PersonalKnowledge from '../Personal Knowledge/PersonalKnowledge'
import VirtualStudyPlanner from '../Virtual Study Planner/VirtualStudyPlanner'
import BudgetGame from '../Budget Game/BudgetGame'
import BookmarkManagement from '../Bookmark Management/BookmarkManagement'
import TimezoneConverter from '../Timezone Converter/TimezoneConverter'
import TextGame from '../Text Adventure Game/TextGame'
import CharacterSheet from '../Game Character Sheet/CharacterSheet'
import HabitTracker from '../Habit Tracker/HabitTracker'
import FlashcardApp from '../Animated Flashcard/FlashcardApp'
import PaginationResult from '../Pagination/PaginationResult'
import DigitalDiary from '../Digital Diary/DigitalDiary'
import LookbookPage from '../Lookbook/LookbookPage'
import GameLeaderboard from '../Game Leaderboard/GameLeaderboard'
import TravelMemory from '../Travel Memory/TravelMemory'
import DonationTracker from '../Donation Tracker/DonationTracker'
import EcoFriendlyTip from '../Eco Friendly Tip/EcoFriendlyTip'
import VirtualMuseum from '../Virtual Museum/VirtualMuseum'
import VirtualWardrobe from '../Virtual Wardrobe/VirtualWardrobe'
import RoutePlanner from '../Travel Route Planner/RoutePlanner'
import BookExchange from '../Online Book Exchange/BookExchange'
import ModalResult from '../Animated Modal/ModalResult'
import VirtualTourGuide from '../Virtual Tour Guide/VirtualTourGuide'
import DigitalPhotoFrame from '../Digital Photo Frame/DigitalPhotoFrame'
import LightboxGallery from '../Lightbox Gallery/LightboxGallery'
import BookFinder from '../Book Finder/BookFinder'
import BookQuiz from '../Book Quiz/BookQuiz'
import FoodDelivery from '../Food Delivery/FoodDelivery'
import URLShortener from '../URL Shortener/frontend/URLShortener'
import PostcardCreator from '../Postcard Creator/PostcardCreator'
import MeditationApp from '../Meditation App/MeditationApp'
import Guestbook from '../Guestbook/Guestbook'
import ArtPortfolio from '../Art Portfolio/ArtPortfolio'

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

        {
            key: "showGallery",
            component: <Gallery />
        },

        {
            key: "showPomodoro",
            component: <Pomodoro />
        },

        {
            key: "showCMS",
            component: <ContentCMS />
        },

        {
            key: "showStockMarketTracker",
            component: <StockMarketTracker />
        },

        {
            key: "showCRM",
            component: <CRM />
        },

        {
            key: "showEventManagement",
            component: <EventManagement />
        },

        {
            key: "showTimeline",
            component: <Timeline />
        },

        {
            key: "showFinanceTracker",
            component: <Home />
        },

        {
            key: "showInventoryManagement",
            component: <Inventory />
        },

        {
            key: "showOnlineMarketplace",
            component: <MarketPlace />
        },

        {
            key: "showBooksManagement",
            component: <BookManagement />
        },

        {
            key: "showAddressBook",
            component: <AddressBook />
        },

        {
            key: "showChecklist",
            component: <Checklist />
        },

        {
            key: "showBMICalculator",
            component: <BMICalculator />
        },

        {
            key: "showChecklist",
            component: <Checklist />
        },

        {
            key: "showBooksTracker",
            component: <BookTracker />
        },

        {
            key: "showWatchList",
            component: <WatchList />
        },

        {
            key: "showMusicAlbumCatalog",
            component: <MusicAlbum />
        },

        {
            key: "showPasswordManager",
            component: <PasswordManager />
        },

        {
            key: "showDragAndDrop",
            component: <DragAndDrop />
        },

        {
            key: "showTicTacToe",
            component: <TicTacToe />
        },

        {
            key: "showToursApp",
            component: <ToursApp />
        },

        {
            key: "showArtGallery",
            component: <ArtGallery />
        },

        {
            key: "showItineraryPlanner",
            component: <ItineraryPlanner />
        },

        {
            key: "showVirtualGarden",
            component: <VirtualGarden />
        },

        {
            key: "showReactHookForm",
            component: <ReactHookForm />
        },

        {
            key: "showMarkdownPreviewer",
            component: <MarkdownPreviewer />
        },

        {
            key: "showUnitConverter",
            component: <UnitConverter />
        },

        {
            key: "showCurrencyConverter",
            component: <CurrencyConverter />
        },

        {
            key: "showPasswordGenerator",
            component: <PasswordGenerator />
        },

        {
            key: "showFeedbackForm",
            component: <FeedbackForm />
        },

        {
            key: "showIngredientSubstituter",
            component: <IngredientSubstituter />
        },

        {
            key: "showOnlinePoll",
            component: <OnlinePoll />
        },

        {
            key: "showNotificationCenter",
            component: <NotificationCenter />
        },

        {
            key: "showPhotoCollageEditor",
            component: <PhotoCollageEditor />
        },

        {
            key: "showPersonalKnowledge",
            component: <PersonalKnowledge />
        },

        {
            key: "showVirtualStudyPlanner",
            component: <VirtualStudyPlanner />
        },

        {
            key: "showBudgetGame",
            component: <BudgetGame />
        },

        {
            key: "showBookmarkManagement",
            component: <BookmarkManagement />
        },

        {
            key: "showTimezoneConverter",
            component: <TimezoneConverter />
        },

        {
            key: "showTextGame",
            component: <TextGame />
        },

        {
            key: "showCharacterSheet",
            component: <CharacterSheet />
        },

        {
            key: "showHabitTracker",
            component: <HabitTracker />
        },

        {
            key: "showAnimatedFlashcard",
            component: <FlashcardApp />
        },

        {
            key: "showPagination",
            component: <PaginationResult />
        },

        {
            key: "showDigitalDiary",
            component: <DigitalDiary />
        },

        {
            key: "showLookbook",
            component: <LookbookPage />
        },

        {
            key: "showGameLeaderboard",
            component: <GameLeaderboard />
        },

        {
            key: "showTravelMemory",
            component: <TravelMemory />
        },

        {
            key: "showDonationTracker",
            component: <DonationTracker />
        },

        {
            key: "showEcoFriendlyTip",
            component: <EcoFriendlyTip />
        },

        {
            key: "showVirtualMuseum",
            component: <VirtualMuseum />
        },

        {
            key: "showVirtualWardrobe",
            component: <VirtualWardrobe />
        },

        {
            key: "showTravelRoutePlanner",
            component: <RoutePlanner />
        },

        {
            key: "showBookExchange",
            component: <BookExchange />
        },

        {
            key: "showAnimatedModal",
            component: <ModalResult />
        },

        {
            key: "showVirtualTourGuide",
            component: <VirtualTourGuide />
        },

        {
            key: "showDigitalPhotoFrame",
            component: <DigitalPhotoFrame />
        },

        {
            key: "showLightboxGallery",
            component: <LightboxGallery />
        },

        {
            key: "showBookFinder",
            component: <BookFinder />
        },

        {
            key: "showBookQuiz",
            component: <BookQuiz />
        },

        {
            key: "showFoodDelivery",
            component: <FoodDelivery />
        },

        {
            key: "showURLShortener",
            component: <URLShortener />
        },

        {
            key: "showPostcardCreator",
            component: <PostcardCreator />
        },

        {
            key: "showMeditationApp",
            component: <MeditationApp />
        },

        {
            key: "showGuestbook",
            component: <Guestbook />
        },

        {
            key: "showArtPortfolio",
            component: <ArtPortfolio />
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