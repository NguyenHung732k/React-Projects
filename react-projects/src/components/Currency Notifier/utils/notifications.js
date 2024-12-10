export const sendNotification = (currency, rate) => {
    if (Notification.permission === 'granted') {
        new Notification(`Threshold reached for ${currency}`, {
            body: `The exchange rate for ${currency} is now ${rate}`,
        })
    }
}