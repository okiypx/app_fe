<div class="overlay" >
  <div class="tbl">
          <span class="center">
            <button type="button" ng-if="activeCategory != 'sports'">
              <img src="/common/images/game-buttons/play-icon.png">
              <i class="fa fa-play" style="color: #08bbff; font-size: 25px;"></i>
            </button>
            <div class="title"  ng-if="activeCategory != 'sports'" ng-click="getActiveCategory(games.gspNo, activeCategory, games.gameId, games.gspName_krw);$event.stopPropagation();">
              <p translate>{{games.gspName_krw}}</p>
            </div>
            <div ng-if="activeCategory == 'sports'" class="title" style="margin-top: 10px" ng-click="getActiveCategory(games.gspNo, activeCategory, games.gameId, games.gspName_krw); $event.stopPropagation();">
              <p translate>{{games.gspName_krw}}</p>
            </div>
            <div class="title" style="margin-top: 10px;" ng-if="activeCategory == 'sports'" ng-click="playGame(games.gspNo, 'live', '');$event.stopPropagation();">
              <p>팝업 플레이</p>
            </div>

          </span>
  </div>
</div>
