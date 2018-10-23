import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Update = (props) => {
        if(props.show){
            return (
              <ReactCSSTransitionGroup 
              transitionName={props.transitionName}
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}
              >
                <div className="updateModal">
                  {props.children}
                </div>
              </ReactCSSTransitionGroup>
            );
        } else {
            return <ReactCSSTransitionGroup 
            transitionName={props.transitionName}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300} />;
        }
};

export default Update;