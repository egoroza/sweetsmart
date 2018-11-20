import React from 'react';
import Star from '../../img/star.png';
// PROPS:
// username - used for URL purposes
// user - actual Name of user
// date - date posted
// photo - photo name saved in /img
// desc - photo description
// hashtags - hashtags

class PostPic extends React.Component {

        constructor(props){
                super(props);
        }
        
        render(){

                var url = "/cookie/users/" + this.props.username;
                var photo = this.props.photo;
                var fav = "none";

                if (this.props.favorite)
                        fav = "auto";

                return(
                        <div>
                                <h2><date>{this.props.date} </date>
                                <img src={Star} style={{width: '15px', marginRight: '5px', display: fav}} />
                                <a href={url}>{this.props.user}</a> posted a new picture.</h2>
                                <hr />
                                <img src={require(`../../img/${photo}.png`)} style={{width: '100px', height: '100px', margin: '10px', float: 'left'}}/><p>{this.props.user} says: "{this.props.desc}"</p>
                                <p style={{color: 'blue'}}>{this.props.hashtags}</p>
                                <br /><br /><br />
                        </div>
                );
        }
}

export default PostPic;