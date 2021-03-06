import './Main.scss';
import { useEffect, useState } from 'react';
import Feed from './Feed';
import Story from './Story';
import Recommend from './Recommend';
import Info from './Info';
import { storyData } from './stroyData';
import { recommendData } from './recommendData';
import { infoData } from './infoData';

function Main() {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.PUBLIC_URL}/data/suhyeon/commentData.json`,
      );
      const feeds = await response.json();
      setFeedList(feeds);
    };
    fetchData();
  }, []);

  return (
    <main className="main_container">
      <nav className="header_style">
        <span className="logo_box">
          <img
            className="logo_image"
            alt="justgram"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAMAAABmmnOVAAAAYFBMVEX///8AAABnZ2fq6ur39/ezs7PIyMgsLCwYGBiEhITw8PBaWlrW1taYmJiNjY1MTExCQkLPz8/AwMAmJiZgYGDj4+MdHR03Nzd3d3cLCwusrKxSUlKhoaFxcXHc3Ny6urqzZhplAAAEvUlEQVR4nN1c2ZaiMBBlR8EGXBDUbv3/v5xmHKWqspAC4qkz9zEguZLaUyEILGiztIqafBMuwCZvoirNWts8RhTZtjkvmR3j3Gyzgkmhrbr1CLzQVZz3kZXrM3iizBwp7GtfFAbUewcKSe+TwoA+meJwWKQKbtgc7By2/ikM2FooFLfPcAjDm1Fd4+ZTHMKwifUc7p+jMOCufQ/6e/O6PEULcCrrXP9kzbsoNGtxKa+7dlKhppC0u2t5UZ/eqHKhymSdLp5/RJGqJvBGb1J08+Ri2VjYn+gcRFMP5PIxXZvCgPRIpkFWKyF28mZQoKWIyaJv4IITf/Hlh8KALzxTP17Z4yvf/jgEwTeea5S8+nMcKIv6NZx9ai2ewCvyinJQHKUo7xrAZglJZ/kca+HYcX29SH/Kuuwf40CMNPUZd1ZwaHX7cHh5jmaUwRTOWA0jBYyrT2tzgP9wlHhoO7thrZBYrm2rH1ohxDZhGIVeo7Y8bw4SxCHs3hegURg8CHTha0tEhUmMz4dS0fzqBsj1Liv67r+g8UH0upCA+OLcIpEoV+YQ05iqfv9LaJsy9GKuK5O403gqf1uhK1okuGw7/jxJ8QvTKrY0fhgjuh0YrYII8GQVEZL28RWVddN1TV1GXw9NMJrQkG40Qy1YqQgqR82Qy8NWCYybrZLe/ZBbRucI+TUBYOQslzuqeuObxSvaksvAkQHJzAMQ2Dna7PtJE7+/cDmhpAazhZEKsNybANwTBQ6IJ0sHPXTE0FKg5wNZDLkkSIyoB4yLttrRJSRaxzpSCfTsHnWX8NL8ENWbTeJA9d6II1SU+L67KynfXBIpncqGKV84k4STOIyYCJjnkWBymGIxi4RhLfK6NBYgrCsyhwTNmH+x6a9vcSuuvabsZ6vSzSBxV/SiTonAayoQR4tHnEGChkjHg8bZJYoKW7wRnwQVysp0I/VsZuFkkyA1tbOlSp6R7QljQscmgX3W2ZopxphFb7qPSwIXOM8TeycFZqEtV84ggQpe9vcwAL8LU5DCJLFDMYzDrglKLC+G6JlJAkm8US+4v2CSgE88unAIAmQv1iCBDPbEdgnjNzwSKGt3TAoSmnUvJJHMytpR1q1lziIBU4eN8/ZqAX2q1o2xSMBai9H8qYBG9qG7gUUC+i5G1g6zbq0XY5GANzM2uwvOcydJwEzDnQOyLtqogkMCKlvOIQHiTq1ic0jArTFWbQ+m/rplZJEApVZWSQssY/d/kJCwHCIEU4SKyjBWIsy2CAcmwpWLCGpEhHcyAl0RIb+M5EdEGigiIZZRGhBRJJFRLhJROJNRQpRRTBVRVpZRYJex1SBj00XG9tPsjbh1SczaklydxIzNWR8kuNvUbiT8btibgTbsvbYuWIBaF7w2cZiBmzh8trNYgNtZfDb2WIAbe3y2OFmAW5x8NntZgJu9vLa9GUHa3rw2ABpBGgC9tkIaQbN2r02hBihNoX7bY/VQ2mM9NwrroDYKe2+ZVqBrmf5A8ziGrnlcRhu9iAMFMo5WiDhkIuO4jYiDRzKOYHk/jJa4HEaTcSxPxAFFGUc1ZRxalXF8NxBxkDmQcaRbxuH2QMQx/wECPngwQMCnHwYI+AjGv/fxoc+B/AFFREq5eI1CrwAAAABJRU5ErkJggg=="
          />
          Justgram
        </span>
        <input className="search_box" type="text" placeholder="??????" />
        <div className="menu_box">
          <img
            alt="aa"
            className="menu_btn"
            src=" https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
          />
          <img
            alt="aa"
            className="menu_btn"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
          />
          <img
            alt="aa"
            className="menu_btn"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
          />
        </div>
      </nav>
      <div className="contents">
        <section className="feed_group">
          {feedList.map((feed) => {
            return (
              <Feed
                key={feed.feedId}
                author={feed.author.nickname}
                content={feed.content}
                date={feed.date}
                comments={feed.comments}
                imageUrl={feed.imageUrl}
                likePeople={feed.likePeople}
                profileImageUrl={feed.author.imageUrl}
                isLiked={feed.isLiked}
              />
            );
          })}
        </section>
        <aside className="aside_section">
          <section className="profile_box">
            <div className="aside_top_content">
              <img
                alt="aa"
                className="profile_box_photo"
                src="https://images.unsplash.com/photo-1652972573839-827e275fbe97?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1665"
              />
              <div className="profile_info">
                <a href="/">JustCode</a>
                <span className="user_info">JustCode | ???????????????</span>
              </div>
            </div>
          </section>
          <section className="story_box">
            <section className="aside_box_header">
              <span>?????????</span>
              <button className="feed_btn aside_btn">?????? ??????</button>
            </section>
            <section className="story_list">
              {storyData.map((v) => (
                <Story
                  key={v.id}
                  imageUrl={v.src}
                  nickname={v.nickname}
                  altValue={v.alt}
                  date={v.date}
                />
              ))}
            </section>
          </section>
          <section className="recommend_box">
            <section className="aside_box_header">
              <span>???????????? ?????? ??????</span>
              <button className="feed_btn aside_btn">?????? ??????</button>
            </section>
            <section className="story_list">
              {recommendData.map((v) => (
                <Recommend
                  key={v.id}
                  imageUrl={v.src}
                  altValue={v.alt}
                  nickname={v.nickname}
                  info={v.info}
                />
              ))}
            </section>
          </section>
          <section className="company_info_box">
            <div className="etc_info">
              {infoData.map((v) => (
                <Info key={v.id} infoName={v.infoName} />
              ))}
            </div>
            <div className="copyright">?? 2022 JUSTGRAM</div>
          </section>
        </aside>
      </div>
    </main>
  );
}

export default Main;
