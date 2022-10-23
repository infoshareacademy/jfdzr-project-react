import Box from "../../components/Box/Box";
import Button from "../../components/Button/Button";
import Description from "./Description/Description";
import RatingOptions from "./RatingOptions/RatingOptions";
import Star from "./Star/Star";
import ratingStyles from "./Rating.module.css";

const options = [1, 2, 3, 4, 5];

function Rating() {
  return (
    <Box>
      <Star />
      <div className={ratingStyles.wrapper}>
        <Description />
        {/* <RatingOptions options={[1, 2, 3, 4, 5]} /> */}
        <RatingOptions options={options} />
      </div>
      <Button name="SUBMIT" />
    </Box>
  );
}

export default Rating;
