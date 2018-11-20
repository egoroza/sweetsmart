import React from 'react'
import PostPic from './components/PostPic.js';
import PostStatus from './components/PostStatus.js';

// PROPS:
// username - used for URL purposes
// user - actual Name of user
// date - date posted
// photo - photo name saved in /img
// desc - photo description
// hashtags - hashtags

const Timeline = () => (
  <div className="section">
    <div className="container">
      <h1>Latest Posts</h1>
        <div className="columns">
          <div className="column">

            <PostPic 
              favorite={false}
              username="betty-cosmos"
              user="Betty Cosmos"
              date="11/12/18 @ 5:57PM"
              photo="photo1"
              desc="Today was a beautiful day for a walk with my dog, Fido. We walked to the highest hill in our neighborhood and it was pretty fun!"
              hashtags="#DogLover #LongWalks #LongWalksWithDogs"
            />
            <PostStatus
              favorite={false}
              username="ddpicks"
              user="Dally Dill Pickle"
              date="11/11/18 @ 5:12PM"
              desc="Today I went to WalMart and saw a bunch of pickles in a jar. What a shame...society today..."
              hashtags="#youareAnimals #freeThePickles #WeDontDeserveThis #PickleRick"
            />
          </div>
          <div className="column">
            <PostStatus
              favorite={false}
              username="sally-syrup"
              user="Sally Syrup"
              date="11/11/18 @ 10:22PM"
              desc="Just found out that I will be going to Tokyo this December for Christmas! Thanks mom!!"
              hashtags="#excited #tokyo #japan #funsies"
            />
            <PostStatus
              favorite={true}
              username="tana-lee"
              user="Tana Lee"
              date="11/11/18 @ 7:22PM"
              desc="went to the ice cream shoppe today. :)"
              hashtags="#yum"
            />
            <PostPic 
              favorite={true}
              username="del-pickles"
              user="Tammy Pickles"
              date="11/12/18 @ 5:57PM"
              photo="photo2"
              desc="Here's a fun little pic that I took of myself today. Hope all of you are having a great day!"
              hashtags="#Selfie #PickleSelfie #SelfLove"
            />
          </div>
        </div>
    </div>
  </div>
)
export default Timeline