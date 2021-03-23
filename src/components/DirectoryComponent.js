import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDirectoryItem({lesson, onClick}) {
    return (
        <Card>
            <CardImg width="100%" src={lesson.image} alt={lesson.name} />
            <CardImgOverlay>
                <CardTitle>{lesson.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

export default function Directory(props) {
    const directory = props.lessons.map(lesson => {
        return (
            <div key={lesson.id} className="col-md-5 m-1">
                <RenderDirectoryItem lesson={lesson} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Directory</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Directory</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {directory}
            </div>
        </div>
    );
}