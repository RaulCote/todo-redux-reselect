import React from 'react';
import FilterLinkContainer from '../containers/FilterLinkContainer';
import { VisibilityFilters } from '../actions/index.js'

const FooterComponent = () => (
    <div
        style={{
            marginTop: '50px'
        }}
    >
        <span>Show: </span>
            <FilterLinkContainer 
                filter={VisibilityFilters.SHOW_ALL}>
                All
            </FilterLinkContainer>
            <FilterLinkContainer 
                filter={VisibilityFilters.SHOW_ACTIVE}>
                Active
            </FilterLinkContainer>
            <FilterLinkContainer 
                filter={VisibilityFilters.SHOW_COMPLETED}>
                Completed
            </FilterLinkContainer>
    </div>
);

export default FooterComponent;