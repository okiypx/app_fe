<div class="ngdialog-signup-page" ng-controller="SignUpController">
  <div class="ngdialog-signup__header">
    <img src="/common/images/logo-blue-new.png">
  </div>
  <div class="ngdialog-signup__content">
    <form name="signUp" novalidate ng-submit="processForm()">

      <div class="ngdialog-signup__fields">
        <!--Member ID-->
        <fieldset ng-class="{'has-error' : signUp.MemberID.$invalid && !signUp.MemberID.$pristine, 'has-success' : signUp.MemberID.$valid}">
          <div class="col-sm-3 text-right">
            <label class="label-required"><span class="text-gray" translate>ID</span> <span>*</span></label>
          </div>
          <div class="col-sm-5">
            <input type="text"
                   class="form-control"
                   name="MemberID"
                   ng-model="signForm.MemberID"
                   ng-pattern="/^[A-z0-9]*$/"
                   maxlength="16"
                   ng-minlength="4"
                   ng-maxlength="16"
                   user-name-duplicated
                   required
            />
          </div>
          <div class="col-sm-4">
            <p class="signup-error" ng-messages="signUp.MemberID.$error" ng-if="signUp.MemberID.$dirty">
              <span ng-message="required"><span translate>Username is Required</span></span>
              <span ng-message="duplicated"><span translate>Username is Unavailable</span></span>
              <span ng-message="minlength"><span translate>Minimum 4 Characters</span></span>
              <span ng-message="maxlength"><span translate>Maximum 16 Characters</span></span>
            </p>
            <span class="signup-inquiry text-gray" data-toggle="tooltip" data-placement="top" title="{{'ID Must be Between 4-16 Characters' | translate }}" translate>ID Must be Between 4-16 Characters</span>
          </div>
        </fieldset>

        <!--Member Password-->
        <fieldset ng-class="{'has-error' : signUp.MemberPwd.$invalid && !signUp.MemberPwd.$pristine, 'has-success' : signUp.MemberPwd.$valid}">
          <div class="col-sm-3 text-right">
            <label class="label-required"><span class="text-gray" translate>Password</span> <span>*</span></label>
          </div>
          <div class="col-sm-5">
            <input type="password"
                   autocomplete="new-password"
                   class="form-control"
                   name="MemberPwd"
                   ng-model="signForm.MemberPwd"
                   maxlength="16"
                   ng-minlength="6"
                   ng-maxlength="16"
                   special-char-c
                   required
            />
          </div>
          <div class="col-sm-4">
            <p class="signup-error" ng-messages="signUp.MemberPwd.$error" ng-if="signUp.MemberPwd.$dirty">
              <span ng-message="required"><span translate>Password is Required</span></span>
              <span ng-message="minlength"><span translate>Minimum 6 Characters</span></span>
              <span ng-message="maxlength"><span translate>Maximum 16 Characters</span></span>
              <span ng-message="haveSpecialChar"><span translate>Allowed special characters only !@#$%\^&*()-_=+</span></span>
            </p>
            <span class="signup-inquiry text-gray" data-toggle="tooltip" data-placement="top" title="{{'Password Must be Between 6-16 Characters' | translate}}" translate>Password Must be Between 6-16 Characters</span>
          </div>
        </fieldset>

        <!--Member Valid Password-->
        <fieldset ng-class="{'has-error' : signUp.MemberValidPwd.$invalid && !signUp.MemberValidPwd.$pristine, 'has-success' : signUp.MemberValidPwd.$valid}">
          <div class="col-sm-3 text-right">
            <label class="label-required"><span class="text-gray" translate>Retype Password</span> <span>*</span></label>
          </div>
          <div class="col-sm-5">
            <input type="password"
                   autocomplete="new-password"
                   class="form-control"
                   name="MemberValidPwd"
                   ng-model="signForm.MemberValidPwd"
                   maxlength="16"
                   ng-minlength="6"
                   ng-maxlength="16"
                   valid-password-c
                   use-form-error="noMatch"
                   use-error-expression="signForm.MemberPwd && signForm.MemberValidPwd && signForm.MemberPwd!=signForm.MemberValidPwd"
                   required
            />
          </div>
          <div class="col-sm-4">
            <p class="signup-error" ng-messages="signUp.MemberValidPwd.$error" ng-if="signUp.MemberValidPwd.$dirty">
              <span ng-message="required"><span translate>Password is Required</span></span>
              <span ng-message="minlength"><span translate>Minimum 6 Characters</span></span>
              <span ng-message="maxlength"><span translate>Maximum 16 Characters</span></span>
              <span ng-message="noMatch"><span translate>Password Not Match</span></span>
            </p>
          </div>
        </fieldset>

        <!--Member Name-->
        <fieldset ng-class="{'has-error' : signUp.MemberName.$invalid && !signUp.MemberName.$pristine, 'has-success' : signUp.MemberName.$valid}">
          <div class="col-sm-3 text-right">
            <label class="label-required"><span class="text-gray" translate>Name</span> <span>*</span></label>
          </div>
          <div class="col-sm-5">
            <input type="text"
                   class="form-control"
                   name="MemberName"
                   ng-model="signForm.MemberName"
                   maxlength="5"
                   ng-minlength="2"
                   required
            />
          </div>
          <div class="col-sm-4">
            <p class="signup-error" ng-messages="signUp.MemberName.$error" ng-if="signUp.MemberName.$dirty">
              <span ng-message="required"><span translate>Name is Required</span></span>
              <span ng-message="minlength"><span translate>2?????? ?????? ??????????????????</span></span>
              <span ng-message="maxlength"><span translate>Maximum 40 Characters</span></span>
            </p>
            <span class="signup-inquiry" data-toggle="tooltip" data-placement="top" title="{{'The Name Is 2-5 Korean Characters' | translate}}" translate>The Name Is 2-5 Korean Characters</span>
          </div>
        </fieldset>

        <!--Birthday-->
        <fieldset ng-class="{'has-error' : signUp.Birthday.$invalid && !signUp.Birthday.$pristine, 'no-error' : signUp.Birthday.$valid}">
          <div class="col-sm-3 text-right">
            <label><span translate>Birthday</span> <span>*</span></label>
          </div>
          <div class="col-sm-5">
            <input type="text"
                   placeholder=""
                   id="datetimepicker"
                   class="form-control"
                   name="Birthday"
                   autocomplete="off"
                   ng-model="signForm.Birthday"
                   style="display: none;"
                   required/>
            <div class="form-control birthday-input" id="open_picker" role="button" ng-click="openDatePicker()">
              <p style="margin: 0">{{signForm.Birthday ? signForm.Birthday : ('Select a date' | translate)}}</p>
              <img src="/common/images/calendar.png" alt="birthday calendar icon">
            </div>
          </div>
          <div class="col-sm-4">
            <p class="signup-error" ng-messages="signUp.Birthday.$error" ng-if="signUp.Birthday.$dirty">
              <span ng-message="required"><span class="invalid" ng-bind="'Birthday Field Required' | translate"></span></span>
            </p>
            <span class="signup-inquiry" data-toggle="tooltip" data-placement="top" ng-bind="'Guests Under the Age of 21 Are Prohibited From Use' | translate"></span>
          </div>
          <div class="clearfix"></div>
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
        <fieldset ng-show="!isSend" class="field-phone" ng-class="{'has-error' : signUp.MemberPhone.$invalid && !signUp.MemberPhone.$pristine, 'has-success' : signUp.MemberPhone.$valid}">
          <div class="col-sm-3 text-right">
            <label class="label-required"><span class="text-gray" translate>Phone Number</span> <span>*</span></label>
          </div>
          <div class="col-sm-5">
            <input type="text"
                   class="form-control phoneNumberFlagPluginSelector"
                   name="MemberPhone"
                   ng-model="signForm.MemberPhone"
                   onkeypress="isInputNumber(event)"
                   placeholder="{{'Enter only numbers' | translate}}"
                   required
                   oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
            />
          </div>
          <div class="col-sm-4">
            <span><button class="btn btn-sync btn-sm btn-red sms" ng-click="sendSMS()" translate>Send Code</button></span>
          </div>
        </fieldset>

        <fieldset ng-show="isSend" ng-class="{'has-error' : signUp.VerifyCode.$invalid && !signUp.VerifyCode.$pristine, 'has-success' : signUp.VerifyCode.$valid}">
          <div class="col-sm-3 text-right">
            <label class="label-required"><span class="text-gray" translate>Verification Code</span> <span>*</span></label>
          </div>
          <div class="col-sm-5">
            <input type="text"
                   class="form-control"
                   name="VerifyCode"
                   ng-model="signForm.VerifyCode"
                   required
            />
          </div>
          <div class="col-sm-4">
            <p class="signup-error" ng-messages="signUp.VerifyCode.$error" ng-if="signUp.VerifyCode.$dirty">
              <span ng-message="required"><span translate>Verification Code is Required</span></span>
            </p>
          </div>
        </fieldset>

        <fieldset>
          <div class="form-group">
            <div class="col-sm-3 text-right">
              <label class="label-required"><span class="text-gray" ng-bind="'Bank' | translate"></span> <span>*</span></label>
            </div>
            <div class="col-sm-5">
              <p>
                <select class="form-control" ng-model="signForm.BankNo">
                  <option value="" selected="selected" ng-bind="'Please Select a Bank' | translate"></option>
                                      <option value="1">SC????????????</option>
                                      <option value="2">????????????</option>
                                      <option value="3">????????????</option>
                                      <option value="4">????????????</option>
                                      <option value="5">??????????????????</option>
                                      <option value="6">????????????</option>
                                      <option value="7">???????????????</option>
                                      <option value="8">??????????????????</option>
                                      <option value="9">????????????</option>
                                      <option value="10">????????????</option>
                                      <option value="11">????????????</option>
                                      <option value="12">????????????</option>
                                      <option value="13">????????????????????????</option>
                                      <option value="14">???????????????</option>
                                      <option value="15">??????????????????</option>
                                      <option value="16">????????????????????????(BOA)</option>
                                      <option value="17">????????????</option>
                                      <option value="18">????????????</option>
                                      <option value="19">?????????????????????</option>
                                      <option value="20">????????????</option>
                                      <option value="21">????????????</option>
                                      <option value="22">??????????????????</option>
                                      <option value="23">???????????????</option>
                                      <option value="24">???????????????</option>
                                      <option value="25">???????????????</option>
                                      <option value="26">????????????</option>
                                      <option value="27">????????????</option>
                                      <option value="28">???????????????</option>
                                      <option value="29">??????????????????</option>
                                      <option value="30">???????????????????????????</option>
                                      <option value="31">????????????????????????</option>
                                      <option value="32">????????????????????????</option>
                                      <option value="33">????????????</option>
                                      <option value="34">????????????</option>
                                      <option value="35">??????????????????</option>
                                      <option value="36">?????????</option>
                                      <option value="37">??????????????????</option>
                                      <option value="38">????????????</option>
                                      <option value="39">????????????</option>
                                      <option value="40">????????????</option>
                                      <option value="41">??????????????????</option>
                                      <option value="42">????????????</option>
                                      <option value="43">??????????????????</option>
                                      <option value="44">??????????????????</option>
                                      <option value="45">??????????????????</option>
                                      <option value="46">????????????</option>
                                      <option value="47">KB(?????????)??????</option>
                                      <option value="49">?????????????????????</option>
                                      <option value="53">???????????????</option>
                                      <option value="54">????????????</option>
                                  </select>
              </p>
            </div>
          </div>
        </fieldset>

        <fieldset ng-class="{'has-error' : signUp.AccountNumber.$invalid && !signUp.AccountNumber.$pristine, 'has-success' : signUp.AccountNumber.$valid}">
          <div class="form-group">
            <div class="col-sm-3 text-right">
              <label class="label-required"><span class="text-gray" ng-bind="'Account Number' | translate"></span> <span>*</span></label>
            </div>
            <div class="col-sm-5">
              <input type="text"
                     name="AccountNumber"
                     ng-model="signForm.AccountNumber"
                     class="form-control"
                     ng-pattern="/^[0-9]*$/"
                     onkeypress="isInputNumber(event)"
                     placeholder="{{'Account Number' | translate}}"
                     required />
            </div>
            <div class="col-sm-4">
              <p class="signup-error" ng-messages="signUp.AccountNumber.$error" ng-if="signUp.AccountNumber.$dirty">
                <span ng-message="required"><span >{{"The account number is required"|translate}}</span></span>
                <span ng-message="pattern"><span>{{"Invalid account number"|translate}}</span></span>
              </p>
            </div>
          </div>
        </fieldset>

        <!--Member Reference-->
        <fieldset class="signup-refferal" ng-class="{'has-error' : signUp.MemberReferer.$error.duplicated && signUp.MemberReferer.$dirty, 'has-not-used' : signUp.MemberReferer.$pristine, 'has-success' : signUp.MemberReferer.$valid}">
          <div class="col-sm-3 text-right">
            <label><span class="text-gray" translate>Recommender</span></label>
          </div>
          <div class="col-sm-5">
            <input type="text"
                   class="form-control"
                   name="MemberReferer"
                   ng-model="signForm.MemberReferer"
                   referrer-check
            />
          </div>
          <div class="col-sm-4">
            <p class="signup-error" ng-messages="signUp.MemberReferer.$error" ng-if="signUp.MemberReferer.$dirty">
              <span ng-message="duplicated"><span translate>Recommender Not Found</span></span>
            </p>
            <span class="signup-inquiry text-gray" translate>If you dont have an ID, you can leave it blank</span>
          </div>
          <div class="clearfix"></div>
        </fieldset>

        <button type="submit" class="btn btn-primary btn-block" ng-disabled="signUp.$invalid || isProcessing" translate>Sign Up</button>

      </div>
    </form>

  </div>
</div>

<script>
  placeholder();
</script>

<script>
  /*phone number plugin*/
  var input = document.querySelector(".phoneNumberFlagPluginSelector");
  window.intlTelInput(input, {
    dropdownContainer: document.body,
    initialCountry: "kr",
    onlyCountries: ['kr'],
    utilsScript: "/common/plugins/build/js/utils.js",
  });
</script>


<script>

  function isInputNumber(evt){

    var ch = String.fromCharCode(evt.which);

    if(!(/[0-9]/.test(ch))){
      evt.preventDefault();
    }

  }

</script>
