import React from "react";
import PropTypes from "prop-types";
import Card from '../Card/Card';
import CardMedia from '../CardMedia/CardMedia';
import CardActions from '../CardActions/CardActions';
import CardActionArea from '../CardActionArea/CardActionArea';
import CardContent from '../CardContent/CardContent';
import Typography from '../Typography/Typography';
import Rating from '../Rating/Rating';

/**
 * @uxpindocurl https://mui.com/api/card/
 */
function CardNew(props) {
    return (
      <Card
      sx={{ maxWidth: 345 }}
    >
      <CardMedia
        alt="Cool art"
        height={140}
      />
      <CardActionArea>
        <CardContent
          component="div"
        >
          <Typography
            variant="h6"
            component="div"
            gutterBottom={true}
            color="secondary.main"
          >
            Trends
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
          >
            {props.cardBody}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Rating
          icon="star_border"
          emptyIcon="star"
          value={props.ratingValue}
        />
      </CardActions>
    </Card>
    )
} 

CardNew.propTypes = {

  cardBody: PropTypes.string,
  ratingValue: PropTypes.number

}

export default CardNew