<div ng-if="!loggedIn" class="login-page" ng-controller="LoginController">
  <div class="rigth-container-title" style="padding: 10px 20px;">
    <span>멤버 로그인</span>
  </div>
  <div class="login-form">
    <form ng-submit="processForm()">
      <input type="text" class="form-control" ng-model="loginForm.nickname" placeholder="아이디">
      <input type="password" class="form-control" autocomplete="new-password" ng-model="loginForm.password" placeholder="비밀번호">
      <button title="submit" class="btn btn-block btn-black btn-primary-bordered" style="margin-top: 20px" ng-disabled="isProcessing">로그인</button>
      <button type="button" class="btn btn-block btn-primary" ng-click="displaySignUp()">회원가입</button>
    </form>
    <p class="forgot-text" ng-click="contactCC();" role="button">비밀번호를 잊으셨나요?</p>

    <img class="wallet-icon" src="/common/images/wallet.svg" width="56" alt="">
    <p class="walletText">마이 월렛</p>
    <p>로그인 후 이용하실 수 있는 기능입니다.</p>
  </div>
</div>

<div class="wallet-page" ng-show="loggedIn">
  <div class="rigth-container-title">
    <strong> <i role="button" ng-click="displayCustomer(7); setTab(7);" class="guest-dm fa fa-envelope"> <span ng-bind="UnreadDM">4</span></i></strong>
    <p class="logout" class="text-white" role="button" ng-controller="LogoutController" ng-click="logout()">로그아웃</p>
  </div>
  <div class="my-wallet-container">
    <span>마이 월렛</span>
    <i class="fa fa-repeat" ng-click="getBalance(true)"></i>
    <div class="clearfix"></div>
  </div>

  <div class="user-balance-container" >
    <div class="balance-overflow">
      <div ng-repeat="walletCategoryValues in walletCategory">
        <div class="walletCat category-{{walletCategoryValues.target}}" style="text-align: right;">
          <h5 class="walletCat__title" ng-bind="walletCategoryValues.category | translate"></h5>
        </div>
        <div class="balance__content" ng-repeat="agentGsp in agentGspList |  orderBy:'OrderNumber'| limitTo: rightPanelLimit" ng-if="agentGsp.category == walletCategoryValues.category"">
        <span class="gsp-name" ng-bind="agentGsp.gspName | translate"></span>
        <span class="amount text-primary">
          <strong ng-show="agentGsp.amount == 'Loading' && agentGsp.Maintenance != 'Y'" ng-bind="agentGsp.amount"></strong>
          <!--BO  OFF-->
          <strong class="label label-danger" ng-show="agentGsp.amount == '점검중' && agentGsp.Maintenance != 'Y'" ng-bind="agentGsp.amount"></strong>
          <!--Gatherer   OFF-->
          <strong class="label label-danger" ng-show="agentGsp.Maintenance == 'Y'" >점검중</strong>
          <!-- Not Maintenance-->
          <strong ng-show="agentGsp.amount != 'Loading' && agentGsp.amount != '점검중' && agentGsp.Maintenance != 'Y' " ng-bind="agentGsp.amount | customCurrency:cc_currency_symbol[userCurrency]"></strong>
        </span>
      </div>
    </div>
  </div>
  <!--<div class="show-more text-center" ng-if="showMore" ng-click="rightPanelShowMore()"><span translate="">Show More</span></div>
  <div class="show-more text-center" ng-if="showLess" ng-click="rightPanelShowLess()"><span translate="">Show Less</span></div>-->
  <div class="total-balance">
    <strong class="text-uppercase">전체 잔액</strong>
    <strong class="text-uppercase pull-right" ng-show="totalBalance =='Loading'" ng-bind="totalBalance"></strong>
    <strong class="text-uppercase pull-right" ng-show="totalBalance !='Loading'" ng-bind="totalBalance | customCurrency:cc_currency_symbol[userCurrency]"></strong>
  </div>
  <div class="clearfix"></div>
</div>

<div class="transfer-container">
  <div class="transfer-title">
    <span>게임 머니 이동</span>
  </div>

  <div class="money-transfer" ng-controller="TransferController">
    <form novalidate ng-submit="processForm();">
      <fieldset>
        <select class="form-control"
                ng-model="transfer.fromWallet"
                ng-options="agentGsp.gspNo as combinedMaintenance(agentGsp) group by translateWalletCategory(agentGsp) disable when agentGsp.amount == '점검중' | translate  for agentGsp in agentGspList  |  orderBy:'OrderNumber' | filter:maintenanceFilter | filter:combinedMaintenanceByCurrency ">
          <option selected="selected" value="">이동 전 게임을 선택해주세요.</option>
        </select>
      </fieldset>
      <fieldset style="position: relative">
        <input type="text"
               style="color: #08bbff;"
               class="form-control text-right text-primary"
               placeholder="원"
               ng-model="transfer.amount"
               format="number"
               value="{{transfer.amount | number}}"
               valid-method="blur"
        />
        <p class="won-text">원</p>
      </fieldset>
      <fieldset>
        <select class="form-control"
                ng-model="transfer.toWallet"
                ng-options="agentGsp.gspNo as combinedMaintenance(agentGsp) group by translateWalletCategory(agentGsp) disable when agentGsp.amount == '점검중' | translate  for agentGsp in filteredGspWalletList  | filter:{transferEnable:true} |  orderBy:'OrderNumber' | filter:maintenanceFilter | filter:combinedMaintenanceByCurrency ">
          <option selected="selected" value="">이동 후 게임을 선택해주세요.</option>
        </select>
      </fieldset>
      <button style="margin-top: 10px" type="submit" class="btn btn-block btn-black" ng-disabled="isProcessing">게임 머니 이동</button>
    </form>
  </div>
</div>

<ul class="wallet-button" ng-if="loggedIn">
  <li class="btn-primary-bordered" ng-click="displayWallet(1); setTab(1);">마이 월렛</li>
  <li class="btn-primary-bordered" ng-click="displayWallet(2); setTab(2);">입금 신청</li>
  <li class="btn-primary-bordered" ng-click="displayWallet(3); setTab(3);">출금 신청</li>
  <li class="btn-primary-bordered" ng-click="displayWallet(4); setTab(4); setActiveInside(2);" ><span translate>Use Comp</span></li>
  <li class="btn-primary-bordered" style="border-left: 0" ng-click="displayWallet(5); setTab(5);">친구 목록</li>
  <li class="btn-primary-bordered" ng-controller="CouponController" ng-init="loadCoupon()" ng-click="displayWallet(6); setTab(6);">쿠폰 내역 <span class="badge btn-primary ng-binding" ng-bind="couponCount">0</span></li>
  <li class="btn-primary-bordered" style="border-left: 0" ng-controller="SettlementController" ng-init="loadSettlement()" ng-if="aff_user == 'Y'" ng-click="displayWallet(9);setTab(9);" ng-init="loadSettlement()"><span translate>Settlement Payout List</span> <span class="badge btn-primary" ng-bind="settlementCount"></span></li>
  <li class="btn-primary-bordered" ng-if="aff_user == 'N'" style="border-left: 0" ng-click="displayWallet(7); setTab(7);">입출금 내역</li>
  <li class="btn-primary-bordered" ng-if="aff_user == 'Y'" style="border-bottom: 1px solid #08bbff" ng-click="displayWallet(7); setTab(7);">입출금 내역</li>
  <li class="btn-primary-bordered" ng-if="aff_user == 'N'" ng-click="displayWallet(8); setTab(8);">비밀번호 변경</li>
  <li class="btn-primary-bordered" ng-if="aff_user == 'Y'" style="width: 50%; border-left: 0;" ng-click="displayWallet(8); setTab(8);">비밀번호 변경</li>
  <!--      <li class="logout" ng-controller="LogoutController" ng-click="logout()">로그아웃</li>-->
</ul>
</div>
  
