import styles from './style.module.scss'

export const Screen = ({ id, component, imageUrl, mobileImage }: any) => {
  return <div style={{
    // height: '100vh',
    width: '100%',
    position: 'relative',
    display: 'flex'
  }}
    className={styles.container}
    id={id}
  >
    <img src={imageUrl} className={styles.bgImage} alt='main-bg' />
    <img src={mobileImage} className={styles.bgMobile} alt='main-bg' />
    <div style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      zIndex: 1
    }}>
      {component}
    </div>
  </div>;
};