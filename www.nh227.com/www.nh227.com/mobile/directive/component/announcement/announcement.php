<div class="announcement-wrapper">
  <button class="announcement__btn" ng-click="displayNotice();">공지사항</button>
  <div class="announcement-container marquee-parent">
    <div class="marquee-child">
      <div class="announcement" ng-repeat="announce in announceList | limitTo: 9"
           ng-click="displayNotice(); readBoardContent(announce.Type,announce.BoardCode)">
        <h1 class="announcement__subject" ng-bind="announce.Subject | limitTo: 20"></h1>
        <p class="announcement__date" ng-bind="formatDate(announce.WriteDate) | date:'yyyy-MM-dd'"></p>
        <span style="color: #999999; font-weight: 400; position: relative;">|</span>
      </div>
    </div>
  </div>
</div>


