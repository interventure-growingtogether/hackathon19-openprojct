import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ProjectWidget from "./projectWidget/ProjectWidget";
import './main.css';

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
    }
});
const Main = ({data}) => {
    const projects = data.projects.map((data) =>
        <div className="project-item">
        <ProjectWidget title={data.name} desc={data.description}></ProjectWidget>
        </div>
    );
    return(<div style={{backgroundColor:"#e9f5df"}}>
            <AppBar position="static">
                <Toolbar variant="dense" style={{backgroundColor:"#63aa1b"}}>
                    <IconButton edge="start" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                       OPEN PROJCT
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className="project-wrapper">
                {projects}
            </div>

        </div>
    )
}
export default withStyles(styles)(Main)
