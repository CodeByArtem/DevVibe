import React from 'react';

const GoBackButton = () => {
  const handleGoBack = () => {
    window.history.back(); // Возвращает пользователя на предыдущую страницу
  };

  return (
    <button onClick={handleGoBack} className="text-white bg-gray-800 p-2 rounded-md hover:bg-gray-600">
      Назад
    </button>
  );
};

export default GoBackButton;
