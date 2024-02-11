import Accordion from "@components/utilities/Accordion";
import styles from "./SkillSection.module.scss";

const SkillSection = (props) => {
  const { className, variant } = props;
  return (
    <div
      className={`${styles.SkillSection} container`}
    >
      <h2>TECHNOLOGIES I'VE WORKED WITH</h2>
      <Accordion />
    </div>
  );
};

export default SkillSection;
