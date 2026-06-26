// Currency formatting utility

// Format number as currency
export const formatCurrency = (amount, currency = 'USD', locale = 'en-US') => {
  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  } catch (error) {
    console.error('Currency formatting error:', error);
    return `$${amount.toFixed(2)}`;
  }
};

// Format number as percentage
export const formatPercentage = (value, decimals = 2) => {
  return `${parseFloat(value).toFixed(decimals)}%`;
};

// Format large numbers (K, M, B)
export const formatCompactNumber = (number) => {
  if (number >= 1000000000) {
    return (number / 1000000000).toFixed(2) + 'B';
  } else if (number >= 1000000) {
    return (number / 1000000).toFixed(2) + 'M';
  } else if (number >= 1000) {
    return (number / 1000).toFixed(2) + 'K';
  }
  return number.toString();
};

// Parse currency string to number
export const parseCurrency = (currencyString) => {
  try {
    // Remove currency symbols and spaces
    const cleaned = currencyString.replace(/[^\d.-]/g, '');
    return parseFloat(cleaned);
  } catch (error) {
    console.error('Currency parsing error:', error);
    return 0;
  }
};

// Convert currency between denominations
export const convertCurrency = (amount, fromCurrency, toCurrency, rates = {}) => {
  if (fromCurrency === toCurrency) return amount;
  
  const rate = rates[`${fromCurrency}_${toCurrency}`];
  if (!rate) {
    console.error('Exchange rate not found');
    return amount;
  }
  
  return amount * rate;
};

export default {
  formatCurrency,
  formatPercentage,
  formatCompactNumber,
  parseCurrency,
  convertCurrency,
};
