import React from 'react';
import Star from '../../img/star.png';
// PROPS:
// username - used for URL purposes
// user - actual Name of user
// date - date posted
// desc - status update
// hashtags - hashtags

class PostStatus extends React.Component {

        constructor(props){
                super(props);
        }
        
        render(){

                var url = "/users/" + this.props.username;
                var fav = "none";

                if (this.props.favorite)
                        fav = "auto";

                return(
                        <div>
                                <h2><date>{this.props.date} </date>
                                <img src={Star} style={{width: '15px', marginRight: '5px', display: fav}} />
                                <a href={url}>{this.props.user}</a> updated their status.</h2>
                                <hr />
                                <p>{this.props.user} says: "{this.props.desc}"</p>
                                <p style={{color: 'blue'}}>{this.props.hashtags}</p>
                                <br /><br /><br />
                        </div>
                );
        }
}

export default PostStatus;