<div class="realtime-event-container" ng-init="activeTab = 1">
  <div class="realtime__btn-container">
    <button class="btn btn-plain outline"
            ng-click="activeTab = 1"
            ng-class="{ 'active': activeTab == 1}">공지사항</button>
    <button class="btn btn-plain outline"
            ng-click="activeTab = 2"
            ng-class="{ 'active': activeTab == 2}" >이벤트</button>
  </div>

  <div class="realtime-event">
    <ul class="realtime-event__list event-ticker" ng-show="activeTab == 1">
      <li class="realtime-event__list__item" ng-repeat="announce in announceList | limitTo: 20">
        <div class="realtime-event__list__item__subject"
             ng-bind="announce.Subject"
             ng-click="displayNotice(); readBoardContent(announce.Type,announce.BoardCode)"></div>
        <div class="realtime-event__list__item__date"
             ng-bind="formatDate(announce.WriteDate) | date:'yyyy-MM-dd'"></div>
      </li>
    </ul>

    <ul class="realtime-event__list promotion-ticker" ng-show="activeTab == 2">
      <li class="realtime-event__list__item" ng-repeat="event in eventList | limitTo: 20">
        <div class="realtime-event__list__item__subject"
             ng-bind="event.Subject"
             ng-click="displayPromotionMobile(); readBoardContent(event.Type,event.BoardCode)"></div>
        <div class="realtime-event__list__item__date"
             ng-bind="formatDate(event.WriteDate) | date:'yyyy-MM-dd'"></div>
      </li>
    </ul>
  </div>
</div>
