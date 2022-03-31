//const incomeColors = ['#DFEEEA','#A7C4BC','#52a77d', '#3abe82','#3a7759', '#234735', '#006b41', '#103625'];
const incomeColors = ['#b0d8c4','#80c0a1','#8db9b2', '#649e94','#008e57', '#006b41', '#2b5f53', '#172f23'];
//const expenseColors = ['#b50d12', '#bf2f1f', '#c9452c', '#d3583a', '#dc6a48', '#e57c58', '#ee8d68', '#f79d79', '#ffae8a', '#cc474b', '#f55b5f'];
const expenseColors = ['#fbb58d', '#f88848', '#f15d08', '#cf5007', '#ac4205', '#c76e32', '#aa512b', '#672803'];

export const incomeCategories = [
  { name: 'Business', amount: 0, color: incomeColors[0] },
  { name: 'Investments', amount: 0, color: incomeColors[1] },
  { name: 'Extra income', amount: 0, color: incomeColors[2] },
  { name: 'Interest', amount: 0, color: incomeColors[3] },
  { name: 'Lottery', amount: 0, color: incomeColors[4] },
  { name: 'Gifts', amount: 0, color: incomeColors[5] },
  { name: 'Salary', amount: 0, color: incomeColors[6] },
  { name: 'Savings', amount: 0, color: incomeColors[7] },
];

export const expenseCategories = [
  { name: 'Bills', amount: 0, color: expenseColors[0] },
  { name: 'Traffic', amount: 0, color: expenseColors[1] },
  { name: 'Entertainment', amount: 0, color: expenseColors[2] },
  { name: 'Travel', amount: 0, color: expenseColors[3] },
  { name: 'Food', amount: 0, color: expenseColors[4] },
  { name: 'Shopping', amount: 0, color: expenseColors[5] },
  { name: 'House', amount: 0, color: expenseColors[6] },
  { name: 'Other', amount: 0, color: expenseColors[7] },
];

export const resetCategories = () => {
  incomeCategories.forEach((c) => c.amount = 0);
  expenseCategories.forEach((c) => c.amount = 0);
};
