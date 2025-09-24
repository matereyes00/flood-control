import React from 'react';

const ToggleSwitch = ({ isOn, handleToggle, offLabel, onLabel }) => {
  return (
    <div className="flex items-center justify-center space-x-4">
      <span className={`font-semibold text-lg ${!isOn ? 'text-white' : 'text-gray-400'}`}>
        {offLabel}
      </span>

      <button
        onClick={handleToggle}
        className={`relative inline-flex items-center h-8 w-16 rounded-full transition-colors duration-300 ease-in-out focus:outline-none 
          ${isOn ? 'bg-yellow-500' : 'bg-gray-400'}`}
      >
        <span
          className={`inline-block w-6 h-6 bg-white rounded-full transform transition-transform duration-300 ease-in-out
            ${isOn ? 'translate-x-9' : 'translate-x-1'}`}
        />
      </button>

      <span className={`font-semibold text-lg ${isOn ? 'text-white' : 'text-gray-400'}`}>
        {onLabel}
      </span>
    </div>
  );
};

export default ToggleSwitch;