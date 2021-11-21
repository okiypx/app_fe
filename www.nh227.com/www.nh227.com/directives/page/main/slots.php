<div class="slots-games-container slots-page" ng-controller="SlotController">

  <div class="header slot-{{activeSlotGsp}}">
    <div class="slot-header">
      <img ng-src="/common/images/game-buttons/slot-popup/logo/logo-slot-{{gspNo}}.png">
      <p ng-bind="gspName"></p>
    </div>
    <button class="slot-open" ng-click="setActiveCategory('slot')"><i class="fa fa-times-circle-o"></i></button>
  </div>

  <div class="slots-button" ng-init="loadSlot(activeSlotGsp); ">
    <div ng-repeat="slotGamesValues in gameButtons | filter:{gspNo:activeSlotGsp} |limitTo:1">
      <div class="sub-slot-button">
        <ul class="list-inline no-margin clearfix" ng-init="getGspByNoSimplified = getGspByNo(slotGamesValues.gspNo)">
          <li ng-repeat="subSlotGamesValues in getGspByNoSimplified"
              class="{{subSlotGamesValues.subSlotClass}}"
              ng-class="{'active':category==subSlotGamesValues.subSlotParam}"
              ng-click="loadSlot(slotGamesValues.gspNo, subSlotGamesValues.subSlotParam)">
            <span> {{subSlotGamesValues.subSlotName | translate}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="clearfix"></div>

    <div class="slot-wrapper clearfix scrollbar">
      <div class="slot-wrapper__content">
        <div role="button" class="slot-box slot-box-{{gspNo}}" ng-repeat="slot in gspSlotItems[gspNo] | filter:slotFilter | filter: {cat : '!Mobile'}" ng-click="playGame(slot.game,'slot',slot.GameCode,'',slot.gname)">
          <div ng-if="slot.game != 1047 && slot.game != 1052 && slot.game != 1071">
            <div class="slot-box--hover">
              <button class="btn btn-sm play">시작하기</button>
            </div>
            <div class="slot-box__item slot-{{gspNo}}" ng-style="{'background': 'url(' + slot.image + ') 0 0 / 100% no-repeat'}"></div>
            <p class="slot-box__name" ng-bind="slot.GameName"></p>
          </div>

          <div ng-if="slot.game==1047">
            <div class="slot-box--hover">
              <button class="btn btn-sm play">시작하기</button>
            </div>
            <div class="slot-box__item slot-{{gspNo}}" ng-style="{'background': 'url(' + slot.image + ') 0 0 / 100% no-repeat'}">
            </div>
            <p class="slot-box__name" ng-bind="slot.GameName"></p>
          </div>

          <div ng-if="slot.game==1052" class="slot-content-{{gspNo}}">
            <div class="slot-box--hover">
              <button class="btn btn-sm play">시작하기</button>
            </div>
            <div class="slot-box__item slot-{{gspNo}}" back-img="/common/images/slots/bbin/{{slot.image}}">
            </div>
            <p class="slot-box__name" ng-bind="slot.GameName"></p>
          </div>

          <div ng-if="slot.game==1071" class="slot-content-{{gspNo}}">
            <div class="slot-box--hover">
              <button class="btn btn-sm play">시작하기</button>
            </div>
            <div class="slot-box__item slot-{{gspNo}}" back-img="/common/images/slots/coiling-dragon/{{slot.image}}">
            </div>
            <p class="slot-box__name" ng-bind="slot.GameName"></p>
          </div>
        </div>









      </div>

      <div ng-show="isLoadingSlot">
        <img src="/common/images/slots/loading.gif" class="loadingGifSlot" width="80" height="80">
      </div>
    </div>
  </div>
</div>
