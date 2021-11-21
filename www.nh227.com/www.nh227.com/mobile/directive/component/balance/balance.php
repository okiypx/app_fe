<div ng-if="loggedIn" class="user-container" >
  <div class="pull-left">
    <strong></strong><i role="button" ng-click="displayDirectMessage()" class="guest-dm fa fa-envelope"> <span ng-bind="UnreadDM">0</span></i></strong></strong>
  </div>
  <div class="pull-right">
    <div class="player-balance" ng-click="displayWallet()">
      <p ng-show="totalBalance =='Loading'" ng-bind="totalBalance"></p>
      <p ng-show="totalBalance !='Loading'">{{ totalBalance | number }} <span style="color: #02a6e2;font-weight: 700">원</span></p>
    </div>
  </div>
</div>
