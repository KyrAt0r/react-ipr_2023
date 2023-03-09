import React, { Component } from 'react';

interface ButtonProps {
    text: string;
    type: "submit" | "button";
}

const Button = ({ text, type }: ButtonProps) => (
    <button type={type}>{text}</button>
);

interface CardProps {
    imageUrl: string;
    text: string;
}

const Card = ({ imageUrl, text }: CardProps) => (
    <div className="card">
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
            <p className="card-text">{text}</p>
        </div>
    </div>
);

interface breadcrumbsItems {
    title: string;
    link: string;
    id: string;
}

interface BreadcrumbsProps {
    breadcrumbsItems: breadcrumbsItems[];
}

const Breadcrumbs = ({ breadcrumbsItems }: BreadcrumbsProps) => (
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

const Rating = ({ maxStars, selectedStars }: RatingProps) => {
    const stars = [];
    for (let i = 1; i <= maxStars; i++) {
        stars.push(<i key={i} className={i <= selectedStars ? "fas fa-star" : "far fa-star"}></i>);
    }
    return (
        <div>{stars}</div>
    );
}

class Content extends Component {

    breadcrumbsItems = [
        { title: 'Новости', link: '/news', id: '0' },
        { title: 'О нас', link: '/about', id: '1' },
        { title: 'Контакты', link: '/contacts', id: '2' },
    ];

    render() {
        return (
            <div>
                <Button text="Принять" type="submit" />
                <Button text="Отмена" type="button" />
                <Card imageUrl="https://via.placeholder.com/150" text="Карточка" />
                <Breadcrumbs breadcrumbsItems={this.breadcrumbsItems} />
                <Rating maxStars={5} selectedStars={3} />
            </div>
        );
    }
}

export default Content;
