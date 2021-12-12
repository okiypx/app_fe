<div class="ngdialog-login clearfix" ng-controller="LoginController">
  <div class="ngdialog__header">
    <div class="ngdialog__header__title">
      <h1 translate="">로그인</h1>
    </div>
    <div class="ngdialog-close-container">
      <a class="ngdialog-close-btn" href="" ng-click="closeThisDialog(0)"><i class="fa fa-times"></i></a>
    </div>
  </div>
  <div class="ngdialog__logo text-center">
    <img src="common/images/logo-blue-new.png" alt="">
  </div>
  <div class="middle__text">
    <h5 class="ngdialog__title text-center"><strong translate>이용 권한이 없습니다</strong></h5>
  </div>
  <div class="ngdialog__content">
    <form ng-submit="processForm()" class="popup-form">
      <div class="input-group">
        <span class="input-group-addon"><i class="fa fa-user"></i></span>
        <input type="text" class="popup-form__element form-control" ng-model="loginForm.nickname" placeholder="아이디"/>
      </div>
      <div class="input-group second-input">
        <span class="input-group-addon"><i class="fa fa-lock"></i></span>
        <input type="password" class="popup-form__element form-control" ng-model="loginForm.password" placeholder="비밀번호"/>
      </div>
      <button class="btn btn-block btn-primary outline" type="submit" ng-disabled="isProcessing" translate>로그인</button>
    </form>
    <button class="btn btn-block btn-signup" type="submit" ng-click="displaySignUp();" translate>회원가입</button>
  </div>
  <div class="ngdialog__footer text-center">
    <p ng-click="contactCC()" style="vertical-align: inherit">비밀번호를 잊으셨나요?</p>
  </div>
</div>
