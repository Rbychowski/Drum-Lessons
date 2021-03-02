import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponent';
import LessonInfo from './LessonInfoComponent';
import { LESSONS } from '../shared/lessons';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lessons: LESSONS,
            selectedLesson: null
        };
    }

    onLessonSelect(lessonId) {
        this.setState({selectedLesson: lessonId});
    }

    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Drum Lessons</NavbarBrand>
                    </div>
                </Navbar>
                <Directory lessons={this.state.lessons} onClick={lessonId => this.onLessonSelect(lessonId)} />
                <LessonInfo lesson={this.state.lessons.filter(lesson => lesson.id === this.state.selectedLesson)[0]} />
            </div>
        );
    };
}

export default Main;