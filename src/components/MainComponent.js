
import React, { Component } from 'react';
import Directory from './DirectoryComponent';
<<<<<<< HEAD
//import LessonInfo from './LessonInfoComponent';
=======
import LessonInfo from './LessonInfoComponent';
>>>>>>> ed9115630b2dd7ab65d559eff47ec7fdb5ab6b05
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LESSONS } from '../shared/lessons';
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lessons: LESSONS,
            comments: COMMENTS,
            partners: PARTNERS,
            promotions: PROMOTIONS
        };
    }

    render() {

        const HomePage = () => {
            return (
                <Home
                lesson={this.state.lessons.filter(lesson => lesson.featured)[0]}
                promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
                partner={this.state.partners.filter(partner => partner.featured)[0]}
                 />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory lessons={this.state.lessons} />} />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    };
}

export default Main;