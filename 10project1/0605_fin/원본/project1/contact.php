<?php include "sub-header.php" ?>
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
    <em class="emphasis">궁금하신점이나 문의사항을 작성해 주세요.</em> <br>
    담당자가 확인후 빠르게 회신드리겠습니다.
  </p>
  <form class="contact_form">
    <fieldset>
      <div>
        <label for="id1">성명</label>
        <div> <input id="id1" type="text" placeholder="단체인 경우 회사이름을 입력해주세요" required></div>
      </div>

      <div>
        <label>연락처</label>
        <div class="tel">
          <select>
            <option value="" title="하단의 옵션에서 통신사를 선택하세요">통신사</option>
            <option value="" label="KT">KT</option>
            <option value="" label="LGu+">LGu+</option>
            <option value="" label="SKT">SKT</option>
          </select>
          &nbsp;
          <label class="hidden" for="id2-1">연락처 첫번째 세 자리 수 를 입력하세요</label>
          <input size="1" type="tel" id="id2-1" required>
          <span> - </span>
          <label class="hidden" for="id2-2">연락처 두번째 네 자리 수 를 입력하세요</label>
          <input size="1" type="tel" id="id2-2" required>
          <span> - </span>
          <label class="hidden" for="id2-3">연락처 세번째 네 자리 수 를 입력하세요</label>
          <input size="1" type="tel" id="id2-3" required>
        </div>
      </div>

      <div>
        <label for="id3">이메일</label>
        <div><input type="email" id="id3" required></div>
      </div>

      <div>
        <label>문의유형</label>
        <div>
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
        </div>
      </div>

      <div>
        <label for="id4">제목</label>
        <div> <input id="id4" type="text" required></div>
      </div>

      <div>
        <label for="id5">문의사항</label>
        <div><textarea id="id5" required></textarea></div>
      </div>

      <div>
        <label for="id6">첨부파일</label>
        <div><input id="id6" type="file" accept="image/*" title="이미지 파일만 업로드가 가능합니다"></div>
      </div>

      <div>
        <label>개인정보수집동의</label>
        <div>
          <label for="id7-1">
            <input id="id7-1" name="agree" type="radio">
            동의함
          </label>
          <label for="id7-2">
            <input id="id7-2" name="agree" type="radio" checked>
            동의하지않음
          </label>
        </div>
      </div>

      <div class="btns">
        <button>문의하기</button>
        <button>취소하기</button>
      </div>

    </fieldset>
  </form>
  <?php include "sub-footer.php" ?>