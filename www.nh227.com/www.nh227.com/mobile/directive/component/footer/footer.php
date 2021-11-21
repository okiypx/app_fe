
<footer>
  <ul class="footer__links footer1">
    <li class="footer__links__item"
        ng-repeat="item in footerLinks | filter:{type:1}"
        ng-class="{ 'disable-event': dialogIsOpen }"
        ng-click="prepareRedirect(item.url)">
      <i class="footer__links__item__icon icon {{ item.iconClass }}"></i>
      <h3 class="footer__links__item__title" ng-bind="item.title"></h3>
      <span ng-controller="CouponController" ng-if="item.url =='comph'" class="badge ng-binding" ng-bind="couponCount" ng-show="loggedIn"></span>
    </li>
  </ul>
  <ul class="footer__links">
    <li class="footer__links__item"
        ng-repeat="item in footerLinks | filter:{type:2}"
        ng-class="{ 'disable-event': dialogIsOpen }"
        ng-click="prepareRedirect(item.url)">
      <i class="footer__links__item__icon icon {{ item.iconClass }}"></i>
      <h3 class="footer__links__item__title" ng-bind="item.title"></h3>
    </li>
    <li class="footer__links__item" onclick="LC_API.open_chat_window();return false;">
      <i class="footer__links__item__icon icon live-chat"></i>
      <h3 class="footer__links__item__title">라이브챗</h3>
    </li>
  </ul>

  <button class="btn footer__pc-button btn-primary" onclick="location.href='/mobile/pages/view.php?view=desktop'">PC버전</button>

  <div class="footer-copyright">
    <p>Copyright 2020 <span>NEW Heaven</span> All Rights Reserved.</p>
  </div>
</footer>
