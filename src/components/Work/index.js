import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Budget from '../../assets/Budget.jpg'
import Septomeme from '../../assets/Septomeme.jpg'
import HR from '../../assets/HR.png'
import Social from '../../assets/Social-Media.png'
import eCommerce from '../../assets/e-commerce.png'
import bookSearch from '../../assets/Book-Search.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    padding: "10px",
    borderStyle: "solid",
    margin: "10px"
  },
  media: {
    height: 140,
  },
});

function Work() {
    const classes = useStyles();

    return (
        <>
        <h2>
            Below are pictures and links to various projects I have worked on. If any intrigue you, please explore further or feel free to contact me directly!
        </h2>
        <div className="flex-row">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={Budget}
                        title="Budget App PWA"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" className="cardTitle">
                            Budget App
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            This app can be used with or without an internet connection to keep track of your finances over time.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Learn More
                    </Button> 
                </CardActions>
            </Card>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={Septomeme}
                        title="Septomeme"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" className="cardTitle">
                            Septomeme
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Septomeme description goes here and it will be incredibly lengthy because I want to see how far these cards stretch my dude
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Learn More
                    </Button> 
                </CardActions>
            </Card>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={HR}
                        title="Employee Directory"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Employee Directory
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Description goes here and it will be incredibly lengthy because I want to see how far these cards stretch my dude
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Learn More
                    </Button> 
                </CardActions>
            </Card>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={Social}
                        title="Social Media Backend"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Social Media Backend
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Description goes here and it will be incredibly lengthy because I want to see how far these cards stretch my dude
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Learn More
                    </Button> 
                </CardActions>
            </Card>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={eCommerce}
                        title="E-commerce Backend"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            E-Commerce Backend
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Description goes here and it will be incredibly lengthy because I want to see how far these cards stretch my dude
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Learn More
                    </Button> 
                </CardActions>
            </Card>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={bookSearch}
                        title="Book Search App"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Book Search App Refactor
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Description goes here and it will be incredibly lengthy because I want to see how far these cards stretch my dude
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Learn More
                    </Button> 
                </CardActions>
            </Card>
        </div>
        </>
    );
}

export default Work;