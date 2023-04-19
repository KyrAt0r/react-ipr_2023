import React, {Component} from 'react';
import './Content.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as lightStar } from '@fortawesome/free-regular-svg-icons';
import {IBreadcrumbsProps} from "../../interface/IBreadcrumbsProps";

interface ButtonProps {
    text: string;
    type: "submit" | "button";
}

const Button = ({text, type}: ButtonProps) => (
    <button className="my-button" type={type}>{text}</button>
);

interface CardProps {
    imageUrl: string;
    text: string;
}

const Card = ({imageUrl, text}: CardProps) => (
    <div className="card">
        <h2 className="card__title">React</h2>
        <img src={imageUrl} className="card__image" alt="..."/>
        <p className="card__caption">TypeScript</p>
        <div className="card-body">
            <div className="card__description">
                <p>{text}</p>
                <Rating maxStars={5} selectedStars={3}/>
                <Button text="Принять" type="submit"/>
                <Button text="Отмена" type="button"/>
            </div>
        </div>
    </div>
);



const Breadcrumbs = ({breadcrumbsItems}: IBreadcrumbsProps) => (
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            {breadcrumbsItems.map(item => (
                <li key={item.id} className="breadcrumb-item">{item.title}</li>
            ))}
        </ol>
    </nav>
);

interface RatingProps {
    maxStars: number;
    selectedStars: number;
}

const Rating = ({maxStars, selectedStars}: RatingProps) => {
    const stars = [];
    for (let i = 1; i <= maxStars; i++) {
        stars.push(<FontAwesomeIcon size={"2x"} key={i} icon={i <= selectedStars ? solidStar : lightStar} style={{color: 'gold'}} />);
    }
    return (
        <div className="rating"> { stars } </div>
    );
}

class Content extends Component {

    breadcrumbsItems = [
        {title: 'Новости', link: '/news', id: '0'},
        {title: 'О нас', link: '/about', id: '1'},
        {title: 'Контакты', link: '/contacts', id: '2'},
    ];

    render() {
        return (
            <div>

                <Card imageUrl="https://rlemasquerier.github.io/react.svg" text="A JavaScript library for building user interfaces"/>
                <Breadcrumbs breadcrumbsItems={this.breadcrumbsItems}/>
            </div>
        );
    }
}

export default Content;
