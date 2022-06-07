import './Aside.scss';

function Aside() {
  return (
    <div className="aside">
      <div className="my-account">
        <img className="profile-img" src="/images/yechanKim/me.jpg" alt="" />
        <div className="profile-info">
          <strong className="id">yechan</strong>
          <span className="info">김예찬</span>
        </div>
      </div>
      <div className="aside-box">
        <div className="header">
          <span className="info">스토리</span>
          <strong>모두 보기</strong>
        </div>
        <div className="list">
          <img className="profile-img" src="/images/yechanKim/me.jpg" alt="" />
          <div className="profile-info">
            <strong className="id">yechan</strong>
            <span className="info">10분전</span>
          </div>
        </div>
      </div>
      <div className="aside-box">
        <div className="header">
          <span className="info">회원님을 위한 추천</span>
          <strong>모두 보기</strong>
        </div>
        <div className="list">
          <img className="profile-img" src="/images/yechanKim/me.jpg" alt="" />
          <div className="profile-info">
            <strong className="id">yechan</strong>
            <span className="info">_legend_님 외 1명이 ...</span>
          </div>
          <strong className="blue">팔로우</strong>
        </div>
      </div>
      <div className="company-info">© 2022 INSTAGRAM FROM META</div>
    </div>
  );
}

export default Aside;
