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
    showPasswordManager: true,
};

const featureFlagsDataServiceCall = () => {
    return new Promise((resolve, reject) => {
        if (componentAPI) setTimeout(resolve(componentAPI), 500);
        else reject("Some error occured! Please try again");
    });
}

export default featureFlagsDataServiceCall;