import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
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
                <Header />
                <Directory lessons={this.state.lessons} onClick={lessonId => this.onLessonSelect(lessonId)} />
                <LessonInfo lesson={this.state.lessons.filter(lesson => lesson.id === this.state.selectedLesson)[0]} />
                <Footer />
            </div>
        );
    };
}

export default Main;