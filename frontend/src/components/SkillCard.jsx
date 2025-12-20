import React from 'react';

const SkillCard = ({ skill }) => {
  const getCategoryColor = (category) => {
    switch (category) {
      case 'frontend':
        return 'bg-blue-500';
      case 'backend':
        return 'bg-green-500';
      case 'ai_ml':
        return 'bg-purple-500';
      case 'database':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-white dark:bg-dark-card rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-gray-800 dark:text-white">
          {skill.name}
        </span>
        <span className={`w-3 h-3 ${getCategoryColor(skill.category)} rounded-full`}></span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className={`h-2 rounded-full ${getCategoryColor(skill.category)} transition-all duration-1000`}
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
      <div className="text-right mt-1">
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {skill.level}%
        </span>
      </div>
    </div>
  );
};

export default SkillCard;