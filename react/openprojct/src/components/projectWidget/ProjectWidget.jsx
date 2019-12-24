import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from "@material-ui/core/Tooltip";
import { AvatarGroup } from '@material-ui/lab';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {orange, red} from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import av1 from '../../static/images/avatar1.jpg'
import PersonIcon from '@material-ui/icons/Person'

const useStyles = makeStyles(theme => ({
    card: {
        width: 345,
        margin:5,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function ProjectWidget({title, desc}) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    console.log('data',title)
    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Avatar style={{backgroundColor:"#63aa1b"}}>
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={title}
                subheader="September 14, 2016"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                {/*<IconButton aria-label="add to favorites">*/}
                {/*    <FavoriteIcon />*/}
                {/*</IconButton>*/}
                {/*<IconButton aria-label="share">*/}
                {/*    <ShareIcon />*/}
                {/*</IconButton>*/}
                <PersonIcon/> 35

                <Button size="small" color="primary">
                    LINK
                </Button>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>


            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <AvatarGroup>
                        <Avatar alt="Remy Sharp" src={av1} />
                        <Avatar alt="Travis Howard" src={av1} />
                        <Avatar alt="Cindy Baker" src={av1} />
                        <Tooltip title="Foo • Bar • Baz">
                            <Avatar>+3</Avatar>
                        </Tooltip>
                    </AvatarGroup>
                    <Avatar aria-label="recipe" className={classes.avatar}
                            alt="ll" src={av1} className={classes.small} />
                    <Typography paragraph>Description:</Typography>
                    <Typography paragraph>
                        {desc}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}

