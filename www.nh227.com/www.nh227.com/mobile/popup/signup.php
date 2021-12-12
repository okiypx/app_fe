<div class="ngdialog-signup">
  <div class="ngdialog__header">
    <div class="ngdialog__header__title">
      <h1 translate="">회원가입</h1>
    </div>
    <div class="ngdialog-close-container">
      <a class="ngdialog-close-btn" href="" ng-click="closeThisDialog(0)"><i class="fa fa-times"></i></a>
    </div>
  </div>
  <div class="ngdialog__content" ng-controller="SignUpController">
    <form name="signUp" novalidate ng-submit="processForm()" autocomplete="off">
      <div class="form-container">

        <!--Member ID-->
        <fieldset class="ngdialog__form-group" ng-class="{'has-error' : signUp.MemberID.$invalid && !signUp.MemberID.$pristine, 'has-success' : signUp.MemberID.$valid}">
          <label class="ngdialog__form__label"><span translate>아이디</span> <i>*</i></label>
          <input type="text"
                 class="ngdialog__form__input form-control"
                 name="MemberID"
                 ng-model="signForm.MemberID"
                 ng-pattern="/^[A-z0-9]*$/"
                 maxlength="16"
                 ng-minlength="4"
                 ng-maxlength="16"
                 user-name-duplicated
                 required
          />
          <p class="signup-error" ng-messages="signUp.MemberID.$error" ng-if="signUp.MemberID.$dirty">
            <span ng-message="required"><span translate>아이디는 필수값입니다</span></span>
            <span ng-message="duplicated"><span translate>사용이 불가능한 아이디 입니다</span></span>
            <span ng-message="minlength"><span translate>4자리 이상 입력해주세요</span></span>
            <span ng-message="maxlength"><span translate>Maximum 16 Characters</span></span>
          </p>
          <div class="form-notice">
            <p class="signup-inquiry" data-toggle="tooltip" data-placement="top" title="{{'ID Must be Between 4-16 Characters' | translate }}" translate>아이디는 4-16자리 입니다</p>
          </div>
        </fieldset>

        <!--Member Password-->
        <fieldset class="ngdialog__form-group" ng-class="{'has-error' : signUp.MemberPwd.$invalid && !signUp.MemberPwd.$pristine, 'has-success' : signUp.MemberPwd.$valid}">
          <label class="ngdialog__form__label"><span translate>비밀번호</span> <i>*</i></label>
          <input type="password"
                 autocomplete="new-password"
                 class="ngdialog__form__input form-control"
                 name="MemberPwd"
                 ng-model="signForm.MemberPwd"
                 maxlength="16"
                 ng-minlength="6"
                 ng-maxlength="16"
                 special-char-c
                 required
          />
          <p class="signup-error" ng-messages="signUp.MemberPwd.$error" ng-if="signUp.MemberPwd.$dirty">
            <span ng-message="required"><span translate>패스워드는 필수값입니다</span></span>
            <span ng-message="minlength"><span translate>6자리 이상 입력해주세요</span></span>
            <span ng-message="maxlength"><span translate>Maximum 16 Characters</span></span>
            <span ng-message="haveSpecialChar"><span translate>Allowed special characters only !@#$%\^&*()-_=+</span></span>
          </p>
          <div class="form-notice">
            <p class="signup-inquiry" data-toggle="tooltip" data-placement="top" title="{{'Password Must be Between 6-16 Characters' | translate}}" translate>패스워드는 6-16 자리 입니다 </p>
          </div>
        </fieldset>

        <!--Member Valid Password-->
        <fieldset ng-class="{'has-error' : signUp.MemberValidPwd.$invalid && !signUp.MemberValidPwd.$pristine, 'has-success' : signUp.MemberValidPwd.$valid}">
          <label class="ngdialog__form__label"><span>비밀번호 재입력</span> <i>*</i></label>
          <input type="password"
                 class="form-control ngdialog__form__input"
                 name="MemberValidPwd"
                 ng-model="signForm.MemberValidPwd"
                 maxlength="16"
                 ng-minlength="6"
                 ng-maxlength="16"
                 use-form-error="noMatch"
                 use-error-expression="signForm.MemberPwd && signForm.MemberValidPwd && signForm.MemberPwd!=signForm.MemberValidPwd"
                 required
          />
          <p class="signup-error" ng-messages="signUp.MemberValidPwd.$error" ng-if="signUp.MemberValidPwd.$dirty">
            <span ng-message="required">패스워드는 필수값입니다</span>
            <span ng-message="minlength">6자리 이상 입력해주세요</span>
            <span ng-message="maxlength">16자리 이하로 입력해주세요</span>
            <span ng-message="noMatch">패스워드가 맞지 않습니다</span>
          </p>
        </fieldset>

        <!--Member Name-->
        <fieldset class="ngdialog__form-group" ng-class="{'has-error' : signUp.MemberName.$invalid && !signUp.MemberName.$pristine, 'has-success' : signUp.MemberName.$valid}">
          <label class="ngdialog__form__label"><span translate>이름</span> <i>*</i></label>
          <input type="text"
                 class="ngdialog__form__input form-control"
                 name="MemberName"
                 ng-model="signForm.MemberName"
                 maxlength="5"
                 ng-minlength="2"
                 required
          />
          <p class="signup-error" ng-messages="signUp.MemberName.$error" ng-if="signUp.MemberName.$dirty">
            <span ng-message="required"><span translate>이름은 필수값입니다</span></span>
            <span ng-message="minlength"><span translate>2자리 이상 입력해주세요/span></span>
            <span ng-message="maxlength"><span translate>Maximum 40 Characters</span></span>
          </p>
          <div class="form-notice">
            <p class="signup-inquiry" data-toggle="tooltip" data-placement="top" title="{{'The Name Is 2-5 Korean Characters' | translate}}" translate>이름은 한글 2-5 자리 입니다</p>
          </div>
        </fieldset>

        <!--Birthday-->
        <fieldset class="form-group" ng-class="{'has-error' : signUp.Birthday.$invalid && !signUp.Birthday.$pristine, 'no-error' : signUp.Birthday.$valid}">
          <label class="ngdialog__form__label"><span translate>Birthday</span> <i>*</i></label>
          <input type="text"
                 placeholder=""
                 id="datetimepicker"
                 class="ngdialog__form__input form-control"
                 name="Birthday"
                 autocomplete="off"
                 ng-model="signForm.Birthday"
                 style="display: none;"
                 required/>
          <div class="ngdialog__form__input form-control birthday-input" id="open_picker" role="button" ng-click="openDatePicker()">
            <p style="margin: 0">{{signForm.Birthday ? signForm.Birthday : ('Select a date' | translate)}}</p>
            <img src="/common/images/calendar.png" alt="birthday calendar icon">
          </div>
          <p class="error-message" ng-messages="signUp.Birthday.$error" ng-if="signUp.Birthday.$dirty">
            <span ng-message="required"><span class="invalid" ng-bind="'Birthday Field Required' | translate"></span></span>
          </p>
          <div class="form-notice">
            <p class="signup-inquiry" data-toggle="tooltip" data-placement="top" title="{{'Guests Under the Age of 21 Are Prohibited From Use' | translate}}" translate>Guests Under the Age of 21 Are Prohibited From Use</p>
          </div>
        </fieldset>
        <script>
          var currentDate = new Date();
          var date = currentDate.toDateString();
          jQuery('#datetimepicker').datetimepicker({
            maxDate: date,
            lang: 'kr',
            timepicker: false,
            format: 'Y-m-d',
            yearStart: 1930,
            parentID: '#open_picker',
            className: 'bdayDatePicker'
          });
        </script>

        <!--Mobile Number-->
        <fieldset class="ngdialog__form-group" ng-show="!isSend" ng-class="{'has-error' : signUp.MemberPhone.$dirty || signUp.MemberPhone.$invalid && !signUp.MemberPhone.$pristine, 'has-success' : signUp.MemberPhone.$valid}">
          <label class="ngdialog__form__label">전화번호 <i class="label-required">*</i></label>
          <div class="col-xs-12 no-padding">
            <div class="col-xs-8 no-padding" style="padding-right: 10px;">
              <div class="iti iti--allow-dropdown">
                <div class="iti__flag-container">
                  <div class="iti__selected-flag" role="combobox" aria-owns="country-listbox" tabindex="0" title="South Korea (대한민국): +82">
                    <div class="iti__flag iti__kr">

                    </div><div class="iti__arrow">

                    </div>
                  </div>
                </div>
                <input type="text"
                       class="no-border form-control ngdialog__form__input phone-input phoneNumberFlagPluginSelector"
                       placeholder="{{ '' | translate }}"
                       name="MemberPhone"
                       placeholder="OOO-OOOO-OOOO"
                       ng-model="signForm.MemberPhone"
                       onkeypress="isInputNumber(event)"
                       required
                />
              </div>
            </div>
            <div class="col-xs-4 clear-container no-padding">
              <button style="height: 40px;" class="btn btn-primary btn-block" ng-click="sendSMS()" translate>Send Code</button>
            </div>
          </div>
        </fieldset>

        <fieldset class="ngdialog__form-group" ng-show="isSend" ng-class="{'has-error' : signUp.VerifyCode.$invalid && !signUp.VerifyCode.$pristine, 'has-success' : signUp.VerifyCode.$valid}">
          <label class="ngdialog__form__label"><span translate>확인 코드</span> <i>*</i></label>
          <input type="text"
                 class="form-control ngdialog__form__input"
                 name="VerifyCode"
                 ng-model="signForm.VerifyCode"
                 required
          />
          <p class="signup-error" ng-messages="signUp.VerifyCode.$error" ng-if="signUp.VerifyCode.$dirty">
            <span ng-message="required">인증번호가 필요합니다</span>
          </p>
        </fieldset>

                <fieldset class="ngdialog__form-group">
          <label class="ngdialog__form__label"><span ng-bind="'은행명' | translate"></span> <i>*</i></label>
          <p>
            <select class="form-control ngdialog__form__input" ng-model="signForm.BankNo">
              <option value="" selected="selected" ng-bind="'은행을 선택해주세요' | translate"></option>
                              <option value="1">SC제일은행</option>
                              <option value="2">경남은행</option>
                              <option value="3">광주은행</option>
                              <option value="4">국민은행</option>
                              <option value="5">신한금융투자</option>
                              <option value="6">기업은행</option>
                              <option value="7">농협중앙회</option>
                              <option value="8">농협회원조합</option>
                              <option value="9">대구은행</option>
                              <option value="10">대신증권</option>
                              <option value="11">대우증권</option>
                              <option value="12">동부증권</option>
                              <option value="13">동양종합금융증권</option>
                              <option value="14">메리츠증권</option>
                              <option value="15">미래에셋증권</option>
                              <option value="16">뱅크오브아메리카(BOA)</option>
                              <option value="17">부국증권</option>
                              <option value="18">부산은행</option>
                              <option value="19">산림조합중앙회</option>
                              <option value="20">산업은행</option>
                              <option value="21">삼성증권</option>
                              <option value="22">상호신용금고</option>
                              <option value="23">새마을금고</option>
                              <option value="24">수출입은행</option>
                              <option value="25">수협중앙회</option>
                              <option value="26">신영증권</option>
                              <option value="27">신한은행</option>
                              <option value="28">신협중앙회</option>
                              <option value="29">에스케이증권</option>
                              <option value="30">에이치엠씨투자증권</option>
                              <option value="31">엔에이치투자증권</option>
                              <option value="32">엘아이지투자증권</option>
                              <option value="33">외환은행</option>
                              <option value="34">우리은행</option>
                              <option value="35">우리투자증권</option>
                              <option value="36">우체국</option>
                              <option value="37">유진투자증권</option>
                              <option value="38">전북은행</option>
                              <option value="39">제주은행</option>
                              <option value="40">키움증권</option>
                              <option value="41">하나대투증권</option>
                              <option value="42">하나은행</option>
                              <option value="43">하이투자증권</option>
                              <option value="44">한국씨티은행</option>
                              <option value="45">한국투자증권</option>
                              <option value="46">한화증권</option>
                              <option value="47">KB(구현대)증권</option>
                              <option value="49">홍콩상하이은행</option>
                              <option value="53">카카오뱅크</option>
                              <option value="54">케이뱅크</option>
                          </select>
          </p>
        </fieldset>

        <fieldset class="ngdialog__form-group" ng-class="{'has-error' : signUp.AccountNumber.$invalid && !signUp.AccountNumber.$pristine, 'has-success' : signUp.AccountNumber.$valid}">
          <label class="ngdialog__form__label"><span ng-bind="'계좌번호' | translate"></span> <i>*</i></label>
          <input type="text"
                 name="AccountNumber"
                 ng-model="signForm.AccountNumber"
                 class="form-control ngdialog__form__input"
                 ng-pattern="/^[0-9]*$/"
                 placeholder="'-'없이 숫자만 입력"
                 required/>
          <p class="signup-error" ng-messages="signUp.AccountNumber.$error" ng-if="signUp.AccountNumber.$dirty">
            <span ng-message="required"><span>계좌 번호는 필수 항목입니다.</span></span>
            <span ng-message="pattern"><span>잘못된 계좌번호 입니다</span></span>
          </p>
        </fieldset>

        <!--Member Reference-->
        <fieldset class="ngdialog__form-group" ng-class="{'has-error' : signUp.MemberReferer.$error.duplicated && signUp.MemberReferer.$dirty, 'has-not-used' : signUp.MemberReferer.$pristine, 'has-success' : signUp.MemberReferer.$valid}">
          <label class="ngdialog__form__label">추천인</label>
          <input type="text"
                 class="form-control ngdialog__form__input"
                 name="MemberReferer"
                 ng-model="signForm.MemberReferer"
                 referrer-check/>
          <p class="signup-error" ng-messages="signUp.MemberReferer.$error" ng-if="signUp.MemberReferer.$dirty">
            <span ng-message="duplicated">아이디를 찾을수 없습니다</span>
          </p>
          <div class="form-notice">
            <p class="signup-inquiry">ID가 없으시면 비워두셔도 됩니다</p>
          </div>
        </fieldset>

        <div class="form-footer">
          <button type="submit" class="btn btn-primary ngdialog__btn" ng-disabled="signUp.$invalid || isProcessing">가입 신청</button>
        </div>
    </form>
  </div>
</div>

<script>
  scrollLock.disablePageScroll(document.querySelector('.ngdialog-content'));

  function isInputNumber(evt){

    var ch = String.fromCharCode(evt.which);

    if(!(/[0-9]/.test(ch))){
      evt.preventDefault();
    }

  }
</script>
