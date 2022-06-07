import React, { useState, useEffect } from 'react';
import Nav from '../../../components/yechan/Nav/Nav';
import Feed from '../../../components/yechan/Feed/Feed';
import Aside from '../../../components/yechan/Aside/Aside';
import './Main.scss';

function Main() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/yechankim/feedData.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPostList(data);
      });
  }, []);
  return (
    <div className="Main">
      <Nav />
      <div className="container">
        <div className="feed-wrap">
          {postList.map((feed) => {
            return <Feed feed={feed} key={feed.id} />;
          })}
        </div>
        <Aside />
      </div>
    </div>
  );
}

export default Main;
