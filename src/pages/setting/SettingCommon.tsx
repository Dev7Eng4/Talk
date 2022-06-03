import React from 'react';

interface CommonProps {
  loading: boolean;
  data: unknown;
}

interface Props {
  component: React.FunctionComponent<CommonProps>;
  loading: boolean;
  data: unknown;
}

const SettingCommon = ({ component, loading, data }: Props) => {
  const Component = component;

  return (
    <div>
      <Component loading={loading} data={data} />
    </div>
  );
};

export default SettingCommon;
