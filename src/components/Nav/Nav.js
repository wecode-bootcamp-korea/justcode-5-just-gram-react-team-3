import 'Nav.scss';

function Nav(){
    return (
        <nav>
        <div class="logo-title">
            <img src="./icon/instagram.png" alt="instagram"/>
            <h1>Instagram</h1>
        </div>
        <div class="search">
            <span class="material-symbols-outlined">
             search
            </span>
            <span>검색</span>
            <input type="text" placeholder="검색"/>
        </div>
        <div class="icon-group">
            <span class="material-symbols-outlined">
             explore
            </span>
            <span class="material-symbols-outlined">
             favorite
            </span>
            <span class="material-symbols-outlined">
             person
            </span>
        </div>
    </nav> 
    )
}