const componentAPI = {
    showAccordion: false,
    showChangeTheme: false,
    showImagesSlider: false,
    showLoadMore: false,
    showModal: false,
    showOutsideClick: false,
    showQRCode: false,
    showRandomColor: false,
    showResizeWindow: false,
    showScrollIndicator: false,
    showScrollToSection: false,
    showScrollToTop: false,
    showSearchAutocomplete: false,
    showStarRating: false,
    showTabs: false,
    showLoginForm: false,
    showSignUp: false,
    showColorPalette: false,
    showStopWatch: false,
    showToDo: false,
    showNewsApp: false,
    showQuizApp: false,
    showWordGame: false,
    showCountryInfo: false,
    showProgressTracker: false,
    showEventCountdown: false,
    showQuotesGenerator: false,
    showEventCalendar: false,
    showSurvey: false,
    showLocationFinder: false,
    showAvatarGenerator: false,
    showIPFinder: false,
    showDictionary: false,
    showRollDice: false,
    showNumberBaseConverter: false,
    showShoppingCart: false,
    showInvoiceGenerator: false,
    showCardValidator: false,
    showDashboard: false,
    showECommerce: false,
    showRockPaperScissors: false,
    showMovie: false,
    showParallax: false,
    showCoinFlipping: false,
    showBlogApp: false,
    showRecipe: false,
    showCalculator: false,
    showFlashCardApp: false,
    showGallery: false,
    showPomodoro: false,
    showCMS: false,
    showStockMarketTracker: false,
    showCRM: false,
    showEventManagement: false,
    showTimeline: false,
    showFinanceTracker: false,
    showInventoryManagement: false,
    showOnlineMarketplace: false,
    showBooksManagement: false,
    showAddressBook: false,
    showChecklist: false,
    showBMICalculator: false,
    showBooksTracker: false,
    showWatchList: false,
    showMusicAlbumCatalog: false,
    showPasswordManager: false,
    showDragAndDrop: false,
    showTicTacToe: false,
    showToursApp: false,
    showArtGallery: false,
    showItineraryPlanner: false,
    showVirtualGarden: false,
    showReactHookForm: false,
    showMarkdownPreviewer: false,
    showUnitConverter: false,
    showCurrencyConverter: false,
    showPasswordGenerator: false,
    showFeedbackForm: false,
    showIngredientSubstituter: false,
    showOnlinePoll: false,
    showNotificationCenter: false,
    showPhotoCollageEditor: false,
    showPersonalKnowledge: false,
    showVirtualStudyPlanner: false,
    showBudgetGame: false,
    showBookmarkManagement: false,
    showTimezoneConverter: false,
    showTextGame: false,
    showCharacterSheet: false,
    showHabitTracker: false,
    showAnimatedFlashcard: false,
    showPagination: false,
    showDigitalDiary: false,
    showLookbook: false,
    showGameLeaderboard: false,
    showTravelMemory: false,
    showDonationTracker: false,
    showEcoFriendlyTip: false,
    showVirtualMuseum: false,
    showVirtualWardrobe: false,
    showTravelRoutePlanner: false,
    showBookExchange: false,
    showAnimatedModal: false,
    showVirtualTourGuide: false,
    showDigitalPhotoFrame: false,
    showLightboxGallery: false,
    showBookFinder: false,
    showBookQuiz: false,
    showFoodDelivery: false,
    showURLShortener: false,
    showPostcardCreator: false,
    showMeditationApp: false,
    showGuestbook: false,
    showArtPortfolio: false,
    showNewsAggregator: false,
    showSocialDashboard: false,
    showCrowdfunding: false,
    showArtCommission: false,
    showDigitalScrapbook: false,
    showLoadingIndicator: false,
    showLanguageTranslator: false,
    showVirtualEscapeRoom: false,
    showWordPuzzle: false,
    showGameShowcase: false,
    showFurniturePlanner: false,
    showDropdownSidebar: false,
    showMoodDiary: false,
    showVirtualTimeCapsule: false,
    showPriceComparison: false,
    showVirtualCalendar: false,
    showGradebook: false,
    showInteractiveMap: false,
    show3DViewer: false,
    showMemoryGame: false,
    showPollingApp: false,
    showBillSplitter: false,
    showPersonalDashboard: false,
    showSimpleBlockchain: false,
    showGreetingCard: false,
    showTimelapseMaker: false,
    showMemoryPalaceGame: false,
    showGIFSearch: false,
    showFlashlight: false,
    showFlashSaleTimer: false,
    showPeriodicTable: false,
    showVirtualTCG: false,
    showBusinessCard: false,
    showRandomName: false,
    showCarRental: false,
    showLiveSportScoreboard: true,
};

const featureFlagsDataServiceCall = () => {
    return new Promise((resolve, reject) => {
        if (componentAPI) setTimeout(resolve(componentAPI), 500);
        else reject("Some error occured! Please try again");
    });
}

export default featureFlagsDataServiceCall;