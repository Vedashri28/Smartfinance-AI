import React from 'react';

const BudgetCard = ({ title, value, hint }) => {
  return (
    <div className="budget-card">
      <h4>{title}</h4>
      <p className="budget-card__value">{value}</p>
      {hint && <span>{hint}</span>}
    </div>
  );
};

export default BudgetCard;
