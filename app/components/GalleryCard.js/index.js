import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  card: {
    width: "100%",
    height: "250px",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"

  },
  content: {
    fontFamily: "Open Sans",
    textAlign: "center",
    padding: "10px",
    opacity: 0,
    transition: "all 500ms ease-in-out",
    transform: "translate(0, 20px)",
    cursor: "pointer"
  }
});
//https://github.com/chetanverma16/react-portfolio-template

const GalleryCard = (props) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const onMouseLeave = () => {
    setChecked((prev) => false)
  }

  return (
    <div onMouseEnter={handleChange} onMouseLeave={onMouseLeave}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://images.unsplash.com/photo-1492171983775-a51717616c0d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjB8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60"
            title="Contemplative Reptile"
          />
          <Slide direction="up" in={checked} >
            <CardContent className={classes.content} >
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Slide>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default GalleryCard;
