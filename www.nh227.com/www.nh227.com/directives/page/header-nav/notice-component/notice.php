<div class="announcement-container">
  <ul class="announcement-list newsticker">
    <li class="announcement-item textOverflow"
        ng-repeat="announce in announceList | limitTo: 7"
        ng-click="displayCustomer(1); readBoardContent(announce.Type,announce.BoardCode)">
      <span class="announcement-item__date" ng-bind="announce.WriteDate"></span>
      <span class="announcement-item__subject" ng-bind="announce.Subject | limitTo:60"></span>
    </li>
  </ul>
</div>

