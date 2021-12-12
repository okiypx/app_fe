<div class="button-container">
  <div class="button-content">
    <div role="button" ng-repeat="games in gameCatergory" class="gamebutton">
      <div class="gamebuttons game-button-{{$index+1}} {{games.category}}"
           ng-class="games.category">
      </div>
    </div>
    <div role="button" class="gamebutton"
    >
      <div class="slots-jackpot-container click-disable">
        <div class="jackpot" ng-init="loadCounter();">
          <div class="jackpot-odometer">
            <img src="/common/images/jackpot/won-sign.png" alt=""></div>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
    <div class="clearfix"></div>
  </div>
</div>
