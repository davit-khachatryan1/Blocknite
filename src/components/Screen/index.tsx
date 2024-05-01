export const Screen = ({ id, scrollY, component }: any) => {
  // Calculate how much this screen should be translated based on the scroll amount.
  const translateY = Math.max(0, window.innerHeight - scrollY);

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