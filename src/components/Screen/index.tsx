export const Screen = ({ id, component }: any) => {
  return <div style={{
    height: '100vh',
    width: '100%',
    position: 'relative'
  }}
    id={id}
  >
    {component}
  </div>;
};