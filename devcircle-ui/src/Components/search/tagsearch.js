import React from "react";

const TagSearch = ({ tags }) => {
    let filterTags = new Set(tags);
    let filteredTags = Array.from(filterTags);
    let paintTags = filteredTags.map(item=>{
        return(
            <div className="search-tag-wrapper ">
                <div className="search-tag-text ">{item}  </div>
                <div className="search-tag-icon "></div>
            </div>
        )
    })
    return (
        <React.Fragment>
            
            {paintTags}
        </React.Fragment>
    );
}

export default TagSearch;