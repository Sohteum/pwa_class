<?php include 'sub-header.php' ?>
<h2 class="sub_title">온라인문의</h2>
<section class="contact_section">
  <p class="site_guide">
    접근성을 고려한 반응형 form UI를 설계하였습니다.<br>
    전송 기능은 구현되지 않은 디자인 페이지입니다.
    <button>
      <i class="fa-regular fa-circle-xmark"></i>
    </button>
  </p>
  <p class="sub_desc">
    <em class="emphasis">궁금하신 사항이나 프로젝트 문의사항을 작성해 주세요.</em> <br> 담당자가 확인후 빠른 회신을 약속합니다.
  </p>
  <form class="contact_form">
    <fieldset>
      <p>
        <label for="id1">성명</label><!-- 레이블은 접근성때문에 작성한다! 관련속성. 타이틀 (컴이 읽어주니까)-->
        <input id="id1" type="text" placeholder="단체인 경우 회사이름을 입력해주세요" required><!-- 플레이스홀더는 유아이관련. 사용자편의 -->
      </p>
      <p>
        <label>연락처</label>
        <!-- 여기의 레이블은 의미가 없음 안쪽에서 다 했기때문에  -->
       <span>
          <select>
            <option value="" title="하단의 옵션에서 통신사를 선택하세요">통신사</option>
            <option value="" label="KT">KT</option>
            <option value="" label="LGu+">LGu+</option>
            <option value="" label="SKT">SKT</option>
            <!-- 속성으로 레이블 사용은 옵션뿐 다들 태그로 들어감 긴 설명같은것들은 레이블로 넣으면 옵션에 들어가버리니까 타이틀로 넣어야함 -->
          </select>
          &nbsp;
          <!-- 레이블은 항상 앞쪽에 주는것이 좋음 -->
          <label class="hidden" for="id2-1">연락처 첫번째 세 자리 수 를 입력하세요</label>
          <input type="tel" id="id2-1"  required> -
          <label class="hidden" for="id2-2">연락처 두번째 네 자리 수 를 입력하세요</label>
          <input type="tel" id="id2-2"  required > -
          <label class="hidden" for="id2-3">연락처 세번째 네 자리 수 를 입력하세요</label>
          <input type="tel" id="id2-3"  required>
       </span>
      </p>
      <p>
        <label for="id3">이메일</label>
        <input type="email" id="id3" required>
        <!-- 타입을 입력하면 유효성 검사가 되고 모바일에서는 키패드가 바뀐다 
      프리벤트디폴트하면 유효성검사가 안됨. 유의할것 폼 전송기능이 될때만!!-->
      </p>
      <p>
        <label>문의유형</label>
        <!-- 이건 짝퉁 -->

        <label for="id3-1">
          <input id="id3-1" name="q" type="radio">
          웹사이트제작
        </label>
        <label for="id3-2">
          <input id="id3-2" name="q" type="radio">
          앱제작
        </label>
        <label for="id3-3">
          <input id="id3-3" name="q" type="radio">
          쇼핑몰제작
        </label>
        <label for="id3-4">
          <input id="id3-4" name="q" type="radio">
          기타
        </label>
        <!-- 레이블을 써놓으면 글자를 클릭해도 동그라미에 체크가 된다 유엑스: 사용자가 이미 경험해서 습관처럼 된것들-->
      </p>
      <p>
        <label for="id4">제목</label>
        <input id="id4" type="text" required>
      </p>
      <p>
        <label for="id5">문의사항</label>
        <textarea id="id5" required></textarea>
        <!-- 엔터치면 칸으로 인식되니 하지말기 -->
      </p>
      <p>
        <label for="id6">첨부파일</label>
        <input id="id6" type="file" accept="image/*" title="이미지 파일만 업로드가 가능합니다">
        <!-- accept="jpg, png" 이런것도 가능-->
      </p>
      <p>
        <label>개인정보수집동의</label>
        <label for="id7-1">
          <input id="id7-1" name="agree" type="radio">
          동의함
        </label>
        <label for="id7-2">
          <input id="id7-2" name="agree" type="radio" checked>
          동의하지않음
        </label>
        <!-- 웬만하면 미동의로 해야 스스로 동의를 했다 하는건데 요새는 강제동의를 받기도 함. 좋은건 아님 -->
      </p>
      <p>
        <button>문의하기</button>
        <button>취소하기</button>
      </p>
    </fieldset>
  </form>
</section>
<?php include 'sub-footer.php' ?>