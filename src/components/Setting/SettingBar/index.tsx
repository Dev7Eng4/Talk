import React from 'react';
import { SubTab, Tab } from 'pages/setting/Setting';
import Text from 'components/Global/Text';

interface Props {
  settings: Tab;
  activeTab: SubTab;
  onActiveTab: React.Dispatch<React.SetStateAction<SubTab>>;
}

const itemClass = `w-52 my-1 p-1.5 rounded outline-none cursor-pointer hover:bg-slate-700`;

const SettingBar = ({ activeTab, settings, onActiveTab }: Props) => {
  return (
    <div className='h-screen pt-5 overflow-y-auto px-4 scroll-transparent bg-secondary dark:bg-secondary text-gray-400'>
      {settings.map((setting, index) => (
        <React.Fragment key={index}>
          <div>
            <h3 className='font-bold p-1.5 text-gray-200'>{setting.label}</h3>
            <ul className='px-3'>
              {setting.subs.map((sub) => (
                <li
                  key={sub}
                  className={`${itemClass} ${
                    activeTab === sub ? 'bg-slate-600' : ''
                  }`}
                  onClick={() => onActiveTab(sub)}
                >
                  <Text content={sub} />
                  {/* {sub} */}
                </li>
              ))}
            </ul>
          </div>

          {index !== settings.length - 1 && (
            <span className='block m-auto w-52 h-px mt-4 mb-5 bg-red-200'></span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default SettingBar;
