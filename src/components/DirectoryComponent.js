import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


export default class Directory extends Component {

    render() {
        const directory = this.props.lessons.map(lesson => {
            return (
                <div key={lesson.id} className="col-md-5 m-1">
                    <Card onClick={() => this.props.onClick(lesson.id)}>
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
            </div>
        );
    }
}