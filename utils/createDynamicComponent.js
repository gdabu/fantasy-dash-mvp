import React from "react";

export const createDynamicComponent = (components, path = "__typename") => {
  return (props) => {
    const contentType = props[path];
    const Component = components[contentType];

    if (Component) {
      return <Component {...props} />;
    }
    return null;
  };
};
