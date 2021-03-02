import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderLesson({lesson}) {
    return (
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={lesson.image} alt={lesson.name} />
                <CardBody>
                    <CardTitle>{lesson.name}</CardTitle>
                    <CardText>{lesson.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({comments}) {
    if (comments) {
        return (
            <div class="col-md-5 m-1" >
                <h4>Comments</h4>
                {comments.map(comment => {
                    return(
                        <div key={comment.id}>
                            <p>{comment.text}<br />
                            -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
    return <div />
}
function LessonInfo(props) {
    if (props.lesson) {
        return (
            <div className="container">
                <div className="row">
                    <RenderLesson lesson={props.lesson} />
                    <RenderComments comments={props.lesson.comments} />
                </div>
            </div>
        );
    }
    return <div />;
}


export default LessonInfo;