import React, { Component } from 'react';
import './ProjectWidget.scss';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
class ProjectWidget extends Component {

  render() {
    return (
      <div className="projects-widget">

        <div className="projects-wrapper">
            <div className="project-card">
                <Card className="card">
                    <CardHeader
                        className="card-header"
                        title={(
                            <div className="title-section">

                                <Typography
                                    className="project-name"
                                    component="h2"
                                    data-test="project-title"
                                >
                                    PROJECT
                                </Typography>

                            </div>
                        )}
                    />

                    <CardContent className="card-content">
                            <Typography
                                className="description"
                                color="textSecondary"
                                data-test="project-description"
                            >
                                DESCRIPTION
                            </Typography>
                    </CardContent>

                </Card>
            </div>
        </div>
      </div>
    );
  }
}

export default ProjectWidget;


