import React from 'react';

const FeatureCard = ({ feature }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Essential':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Optional':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Advanced':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center">
          <span className="text-2xl mr-3">{feature.icon}</span>
          <h4 className="font-semibold text-gray-900">{feature.name}</h4>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(feature.priority)}`}>
          {feature.priority}
        </span>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
};

export default FeatureCard; 