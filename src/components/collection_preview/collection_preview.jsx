import React from "react";
import './collection_preview.scss'
import CollectionItem from "../collection_item/collection_item";

const CollectionPreview = ({ items, title }) => (
  <div className="collection_preview">
    <h1 className="title">{title.toUpperCase()} </h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
