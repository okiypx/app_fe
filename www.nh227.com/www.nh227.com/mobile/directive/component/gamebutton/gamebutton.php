<div class="gamebuttons-page">
  <div ng-repeat="gamebutton in gamebuttons"  class="game-buttons {{gamebutton.category}}-open" ng-if=" gamebutton.category=='jackpot'">
    <jackpot-page></jackpot-page>
  </div>
  <div ng-repeat="gamebutton in gamebuttons" ng-if="gamebutton.category == 'casino' "
       class="game-buttons {{gamebutton.category}}-open"
       ng-click="displayGames('live')">
    <img class="gamebutton__img" src="/mobile/common/images/main/mobile-game-button-{{$index+1}}.jpg"/>
  </div>

  <div id="halfwidth" ng-repeat="gamebutton in gamebuttons" ng-if="gamebutton.category != 'casino' && gamebutton.category != 'jackpot' "
       class="game-buttons {{gamebutton.category}}-open"
       ng-click="getActiveCategory(gamebutton.category)">
    <img class="gamebutton__img" src="/mobile/common/images/main/mobile-game-button-{{$index+1}}.jpg"/>
  </div>
</div>
