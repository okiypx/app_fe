<div class="customer-page">
  <div class="customer-content">
    <div class="customer-buttons" ng-click="displayCustomer(5); setTab(5);">
      <img src="/common/images/customer/partner-icon.png" alt="">
      <div class="text-con">
        <p>파트너를 모십니다. </p>
        <p class="goldTxt">파트너 제휴 문의</p>
      </div>
    </div>
    <div class="customer-buttons" ng-click="displayCustomer(2); setTab(2);">
      <img src="/common/images/customer/faq-icon.png" alt="">
      <div class="text-con">
        <p>궁금한 점이 있으세요?</p>
        <p class="goldTxt">자주 묻는 질문 </p>
      </div>
    </div>
    <div class="customer-buttons text-center">
      <img src="/common/images/customer/kakaotalk-icon.png" alt="">
      <div class="text-con text-left">
        <p>카톡문의</p>
        <p class="goldTxt" ng-bind="techContactNumber"></p>
      </div>
    </div>
    <div class="customer-buttons text-center">
      <img src="/common/images/customer/telegram-icon.png" alt="">
      <div class="text-con text-left">
        <p>텔레그램 문의</p>
        <p class="goldTxt" ng-bind="bankContactNumber">파트너 제휴 문의</p>
      </div>
    </div>
    <div class="clearfix"></div>
  </div>
</div>
