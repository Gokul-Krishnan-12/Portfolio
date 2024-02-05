import styles from './SideText.module.scss';

const SideText = props => {
  const { variant, className } = props;
  return (
    <div className={`${styles.SideText } ${styles[`SideText__${variant}`]} ${className}`}>
        <span>Gokul krishnan portfolio</span>
    </div>
  );
};


export default SideText;
