import React from 'react';
import FilterLinkContainer from '../containers/FilterLinkContainer';
import { VisibilityFilters } from '../actions/index.js'

const FooterComponent = ({listId}) => (
    <div
        style={{
            marginTop: '50px'
        }}
    >
        <span>Show: </span>
            <FilterLinkContainer 
                filter={VisibilityFilters.SHOW_ALL}
                listId={listId}
            >
                All
            </FilterLinkContainer>
            <FilterLinkContainer 
                filter={VisibilityFilters.SHOW_ACTIVE}
                listId={listId}
            >
                Active
            </FilterLinkContainer>
            <FilterLinkContainer 
                filter={VisibilityFilters.SHOW_COMPLETED}
                listId={listId}
            >
                Completed
            </FilterLinkContainer>
    </div>
);

export default FooterComponent;