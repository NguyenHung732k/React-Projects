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
    showInvoiceGenerator: true,
};

const featureFlagsDataServiceCall = () => {
    return new Promise((resolve, reject) => {
        if (componentAPI) setTimeout(resolve(componentAPI), 500);
        else reject("Some error occured! Please try again");
    });
}

export default featureFlagsDataServiceCall;