import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface CountriesListItemProps {
  flag: string;
  name: string;
}

const CountriesListItem = (props: CountriesListItemProps) => {
  return (
    <Link to={`list/${props.name}`}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt={`${props.name} flag`}
          image={props.flag}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CountriesListItem;
