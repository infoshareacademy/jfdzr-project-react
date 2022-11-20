import mainImage from "./image-web-3-desktop.jpg";
import styles from "./MainImage.module.css";

function MainImage() {
  return (
    <div>
      <img src={mainImage} className={styles.mainImage} />
    </div>
  );
}

export default MainImage;
