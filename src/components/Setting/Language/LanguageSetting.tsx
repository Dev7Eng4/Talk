import React, { useState } from 'react';
import Radio from 'components/Global/Button/Radio';

const options = [
  {
    label: 'English, UK',
    value: 'uk',
  },
  {
    label: 'English, US',
    value: 'us',
  },
  {
    label: 'VietName',
    value: 'vietnam',
  },

  {
    label: 'Japan',
    value: 'japan',
  },
];

const LanguageSetting = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(options[0].value);

  return (
    <div>
      <h2 className='inline-block mb-4 text-white font-bold text-xl after:block after:w-18 after:h-px after:bg-gray-400'>
        Language
      </h2>

      <Radio
        options={options}
        selected={selectedLanguage}
        onChangeSelected={setSelectedLanguage}
      />
    </div>
  );
};

export default LanguageSetting;
