import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Update = (props) => {
        if(props.show){
            return (
              <ReactCSSTransitionGroup 
              transitionName={props.transitionName}
              >
                <div className="updateModal">
                  {props.children}
                </div>
              </ReactCSSTransitionGroup>
            );
        } else {
            return <ReactCSSTransitionGroup transitionName={props.transitionName} />;
        }
};

export default Update;