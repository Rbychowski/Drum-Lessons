import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

export default class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLesson: null
        };
    }

    onLessonSelect(lesson) {
        this.setState({selectedLesson: lesson});
    }

    renderSelectedLesson(lesson) {
        if (lesson) {
            return (
                <Card>
                    <CardImg top src={lesson.image} alt={lesson.name} />
                    <CardBody>
                        <CardTitle>{lesson.name}</CardTitle>
                        <CardText>{lesson.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        return <div />
    }

    render() {
        const directory = this.props.lessons.map(lesson => {
            return (
                <div key={lesson.id} className="col-md-5 m-1">
                    <Card onClick={() => this.onLessonSelect(lesson)}>
                        <CardImg width="100" height="300" src={lesson.image} alt={lesson.name} />
                        <CardImgOverlay>
                            <CardTitle>{lesson.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                <div className="row">
                    <div className="col-md-5 m-1">
                        {this.renderSelectedLesson(this.state.selectedLesson)}
                    </div>
                </div>
            </div>
        );
    }
}