<div class="ngdialog-games-page" ng-init="activeCategory">
  <nav>
    <ul class="list-inline games-nav">
      <li ng-repeat="navList in gameNav"
          ng-class="{active: navList.categoryEng == activeCategory}"
          ng-click="setActiveCategory(navList.categoryEng); $event.stopPropagation();">
        <a>{{navList.category}}</a>
      </li>
    </ul>
  </nav>

  <div class="game-button-container">
    <div ng-repeat="games in gameButtons | filter: gameButtonFilter"
         class="game-buttons-popup {{activeCategory}} {{activeCategory}}-{{games.gspNo}}"
         ng-click="getActiveCategory(games.gspNo, activeCategory, games.gameId, games.gspName_krw, games.gameTheme)">

      <img ng-src="{{games.icon2}}" ng-if="activeCategory == 'Powerball' && games.gspClass5">
      <img ng-src="{{games.icon2}}" ng-if="activeCategory == 'Others' && games.gspClass4">
      <img ng-src="{{games.icon2}}" ng-if="activeCategory == 'Others' && games.gspClass3">
      <img ng-src="{{games.icon2}}" ng-if="activeCategory == 'slot' && games.gspClass2">
      <img ng-src="{{games.icon2}}" ng-if="(activeCategory == 'slot' || activeCategory == 'sports' || activeCategory == 'Others') && !games.gspClass2">
      <img ng-src="{{games.icon2}}" ng-if="activeCategory == 'live'">
      <button-overlay-page></button-overlay-page>
    </div>
    <div class="clearfix"></div>
  </div>

  <slots-page></slots-page>

</div>
