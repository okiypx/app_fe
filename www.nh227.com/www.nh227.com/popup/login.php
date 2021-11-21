<div class="ngdialog-login-page" ng-controller="LoginController">
  <div class="ngdialog-login__header logo text-center">
    <img src="/common/images/logo-blue-new.png" width="150" alt="">
  </div>
  <div class="ngdialog-login__content">
    <p class="text-center login-title">이용 권한이 없습니다</p>
    <form ng-submit="processForm()" class="popup-form">
      <div class="input-group">
        <span class="input-group-addon"><i class="fa fa-user"></i></span>
        <input type="text" class="popup-form__element form-control" ng-model="loginForm.nickname" placeholder="아이디"/>
      </div>
      <div class="input-group second-input">
        <span class="input-group-addon"><i class="fa fa-lock"></i></span>
        <input type="password" class="popup-form__element form-control" ng-model="loginForm.password" placeholder="비밀번호"/>
      </div>
      <button class="btn btn-block btn-primary" type="submit" ng-disabled="isProcessing" translate>로그인</button>
    </form>
    <div class=""></div>
    <p class="text-center text-white" ng-click="contactCC();">비밀번호를 잊으셨나요?
      <!-- <span style="color:#08bbff;">신규 계정 생성</span>-->
    </p>
    <div class="clearfix"></div>
  </div>
</div>

<script>
  placeholder();
</script>
