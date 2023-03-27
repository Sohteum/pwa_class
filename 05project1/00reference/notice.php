<?php include 'sub-header.php' ?>
<h2 class="sub_title">공지사항</h2>
<section class="board_section notice_section">
  <p class="site_guide">
    반응형 시멘틱 테이블을 이용한 게시판 리스트를 설계하였습니다. <br>
    읽기, 쓰기 페이지는 구현되지 않았습니다.
    <button>
      <i class="fa-regular fa-circle-xmark"></i>
    </button>
  </p>

  <p class="sub_desc">
    <em class="emphasis">고객님의 소중한 의견을 주셔서 감사합니다.</em> <br> 언제나 고객님의 눈높이에 맞추어 최상의 서비스가 되기 위해 노력하겠습니다.
  </p>
  <table class="board">
    <thead>
      <tr>
        <th scope="row">번호</th>
        <th scope="row">제목</th>
        <th scope="row">작성자</th>
        <th scope="row">작성일자</th>
        <th scope="row">조회수</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>6</td>
        <td><a href="#">공지사항 게시판 테스트 6번 글</a></td>
        <td>관리자</td>
        <td>2023-03-22</td>
        <td>12</td>
      </tr>
      <tr>
        <td>5</td>
        <td><a href="#">공지사항 게시판 테스트 5번 글</a></td>
        <td>관리자</td>
        <td>2023-03-22</td>
        <td>12</td>
      </tr>
      <tr>
        <td>4</td>
        <td><a href="#">공지사항 게시판 테스트 4번 글</a></td>
        <td>관리자</td>
        <td>2023-03-22</td>
        <td>12</td>
      </tr>
      <tr>
        <td>3</td>
        <td><a href="#">공지사항 게시판 테스트 3번 글</a></td>
        <td>관리자</td>
        <td>2023-03-22</td>
        <td>12</td>
      </tr>
      <tr>
        <td>2</td>
        <td><a href="#">공지사항 게시판 테스트 2번 글</a></td>
        <td>관리자</td>
        <td>2023-03-22</td>
        <td>12</td>
      </tr>
      <tr>
        <td>1</td>
        <td><a href="#">공지사항 게시판 테스트 1번 글</a></td>
        <td>관리자</td>
        <td>2023-03-22</td>
        <td>12</td>
      </tr>
    </tbody>
  </table>

  <nav class="board_paging">
    <a class="active" href="#">1</a>
    <a href="#">2</a>
    <a href="#">3</a>
  </nav>
  <!-- 페이징은 테이블 밖에서 만듦 -->

  <form class="board_search">
    <fieldset><!-- 관례적으로 필드셋을 많이 씀 여러 영역으로 많이 나눌때 이걸로 나눔. 폼 안에서 나누는거. 섹션 안에서 아티클로 구분하는 거랑 비슷함 폼안에서의 정보 영ㅇ역을 분리한다고 생각하면 됨. 필드셋 넣으면 에이전트스타일 있어서 보더가 들어가있음.리젯에서 수정-->
      <select>
        <option label="내용" title="내용으로 검색할 경우 선택하세요">내용</option>
        <option label="제목" title="제목으로 검색할 경우 선택하세요">제목</option>
        <option label="작성자" title="작성자로 검색할 경우 선택하세요">작성자</option>
        <!-- 레이블은 원래 태그야 여기서만 속성임 
      타이틀이 있으면 레이블을 굳이 안넣어도 됨. 보통은 레이블을 더 선호-->
      </select>
      <label for="search_input" class="hidden">검색어를 입력하세요</label>
      <!-- 디스플레이넌은 안만든ㄷ거랑 똑같음. 히든을 짱빡는 css만들어주고 클래스 넣어주면 ㅗ딤. -->
      <input id="search_input" type="text" >
      <button>검색</button>
    </fieldset>
  </form>
</section>
<?php include 'sub-footer.php' ?>