import React, { useState, useEffect } from 'react';

const CurrencyConverter = () => {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [exchangeRates, setExchangeRates] = useState({});
    const [convertedAmount, setConvertedAmount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'VND'];

    useEffect(() => {
        fetchExchangeRates();
    }, [fromCurrency, toCurrency]);

    const fetchExchangeRates = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
            if (!response.ok) throw new Error('Failed to fetch exchange rates');
            const data = await response.json();
            setExchangeRates(data.rates);
            convertCurrency(amount, data.rates[toCurrency]);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const convertCurrency = (amount, rate) => {
        setConvertedAmount(amount * rate);
    };

    const handleAmountChange = (e) => {
        const value = e.target.value;
        setAmount(value);
        convertCurrency(value, exchangeRates[toCurrency]);
    };

    const handleFromCurrencyChange = (e) => {
        setFromCurrency(e.target.value);
    };

    const handleToCurrencyChange = (e) => {
        setToCurrency(e.target.value);
    };

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-lg space-y-4">
            <h1 className="text-3xl font-bold text-center text-blue-600">Currency Converter</h1>
            {loading ? (
                <div className="text-center text-gray-600">Loading...</div>
            ) : error ? (
                <div className="text-center text-red-600">{error}</div>
            ) : (
                <div className="flex flex-col space-y-4">
                    <div>
                        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount:</label>
                        <input
                            id="amount"
                            type="number"
                            value={amount}
                            onChange={handleAmountChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm w-full"
                        />
                    </div>
                    <div>
                        <label htmlFor="fromCurrency" className="block text-sm font-medium text-gray-700">From Currency:</label>
                        <select
                            id="fromCurrency"
                            value={fromCurrency}
                            onChange={handleFromCurrencyChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm w-full"
                        >
                            {currencies.map(currency => (
                                <option key={currency} value={currency}>{currency}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="toCurrency" className="block text-sm font-medium text-gray-700">To Currency:</label>
                        <select
                            id="toCurrency"
                            value={toCurrency}
                            onChange={handleToCurrencyChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm w-full"
                        >
                            {currencies.map(currency => (
                                <option key={currency} value={currency}>{currency}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mt-4">
                        <p className="text-lg font-semibold">Converted Amount:</p>
                        <p className="text-2xl font-bold text-blue-600">{convertedAmount.toFixed(2)} {toCurrency}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CurrencyConverter;