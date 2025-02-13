import React from 'react'

const OverspendingAlert = ({ budget, expenses }) => {
  const totalExpenses = expenses.reduce((acc, curr) => acc + parseFloat(curr.amount), 0)

  if (totalExpenses > budget) {
    return (
      <div className="max-w-4xl mx-auto bg-red-100 p-4 rounded-lg flex items-center justify-between">
        <p className="text-red-800 font-semibold">You have overspent your budget!</p>
        <button className="bg-red-600 text-white px-4 py-2 rounded-lg">Dismiss</button>
      </div>
    );
  }

  return null
}

export default OverspendingAlert