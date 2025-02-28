import React from "react";
import "./card.css";

interface CardProps {
    title: string;
    description?: string;
}

export const Card: React.FC<CardProps> = (props: CardProps) => {
    return (

        <div className="card">
            <h4>{props.title}</h4>
            <p className="description">{props.description}</p>
        </div>

    );
}

