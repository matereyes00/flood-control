const formatCurrency = (num) => {
  if (typeof num !== 'number') return '';
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(num);
};

export default formatCurrency;
