import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IconSwitch from './IconSwitch';
import ListView from './ListView';
import CardsView from './CardsView';

export default function Store(props) {
    const [icon, setIcon] = useState('view_list');
    const { products } = props;
    const onSwitch = () => {
        setIcon((prevIcon) => {
            if (prevIcon === 'view_list') return 'view_module';
            if (prevIcon === 'view_module') return 'view_list';
        });
    };
    return (
        <>
            <IconSwitch icon={icon} onSwitch={onSwitch} />
            {icon === 'view_list' ? <ListView items={products} /> : null}
            {icon === 'view_module' ? <CardsView cards={products} /> : null}
        </>
    );
}

Store.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
        })
    ).isRequired,
};