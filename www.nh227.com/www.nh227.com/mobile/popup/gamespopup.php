<div class="ngdialog-gamespopup"  ng-init="activeCategory">
  <div class="ngdialog__header">
    <div class="ngdialog__header__title">
      <h1 translate="">{{activeCategory|translate}}</h1>
    </div>
    <div class="ngdialog-close-container">
      <a class="ngdialog-close-btn" href="" ng-click="closeThisDialog(0)"><i class="fa fa-times"></i></a>
    </div>
  </div>
  <div class="main-content">
    <div class="games-popup-container">
      <div class="gamebuttons {{activeCategory}}" ng-repeat="button in gameButtons | filter: gameButtonFilter"
           ng-click="launchGame(button.gspNo, activeCategory, button.gameId, button.gspName_krw, button.gameTheme,button.gameType);scrllToSlotNav($index);
          ">
        <img ng-src="/common/images/game-buttons/{{button.gspClass4}}.jpg" ng-if="activeCategory == 'Others' && button.gspClass4">
        <img ng-src="/common/images/game-buttons/{{button.gspClass3}}.jpg" ng-if="activeCategory == 'Others' && button.gspClass3">
        <img ng-src="/common/images/game-buttons/{{button.gspClass2}}.jpg" ng-if="activeCategory == 'slot' && button.gspClass2">
        <img ng-src="/common/images/game-buttons/{{button.gspClass}}.jpg" ng-if="(activeCategory == 'slot' || activeCategory == 'sports' || activeCategory == 'Others') && !button.gspClass2 && !button.gspClass4">
        <img ng-src="/common/images/game-buttons/{{button.gspClass}}.jpg" ng-if="activeCategory == 'live'">
        <div class="overlay">
          <div class="tbl">
            <div class="center">
              <button type="button">
                <img src="/common/images/game-buttons/play-icon.png">
                <i class="fa fa-play"></i>
              </button>

              <button class="btn btn-primary outline"
                      ng-click="preparePlayGame(button.gspNo, activeCategory, button.gameId, button.gspName_krw, button.gameTheme)"
                      ng-bind="button.gspName_krw"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <slots-view></slots-view>
  </div>
</div>
