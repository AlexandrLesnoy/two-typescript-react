import React, {useState} from 'react';

export enum CardVariant {
    outlined= 'outlined',
    primary = 'primary'
}

interface CardProps {
    width?: string;
    height?: string;
    children?: React.ReactNode;
    variant: CardVariant;
}

const Card: React.FC<CardProps> = ({
                                       width,
                                       height,
                                       children,
                                       variant,
                                   }) => {
    const [state, setState] = useState(0);
    return (
        <div style={{
            width, height, border: variant === CardVariant.outlined ? '2px solid gray' : 'none',
            background: variant === CardVariant.primary ? 'lightgray' : ''
        }}
        >
            {children}
        </div>
    );
};

export default Card;