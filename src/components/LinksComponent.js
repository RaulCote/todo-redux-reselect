import React from 'react';
import PropTypes from 'prop-types';

const LinksComponent = ({
    active, 
    children,
    onClick
}) => (
    <button
        onClick={onClick}
        disabled={active}
        style={{
            marginLeft: '4px'
        }}
    >
        {children}
    </button>
);

LinksComponent.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

export default LinksComponent;