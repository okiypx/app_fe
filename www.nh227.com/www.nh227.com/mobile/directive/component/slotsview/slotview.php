<main class="m-0">
  <div class="slots slots-view-page clearfix" ng-controller="SlotController">
    <div  class="slots-nav-container" ng-init="loadSlot(activeSlotGsp)">
      <div id="div-{{$index+1}}" class="slots-nav" ng-repeat="slot in slotNav"
           ng-click="loadSlot(slot.gspNo);"
           ng-class="{active: slot.gspNo == navTab}">
        {{ slot.title }}
      </div>
    </div>
    <div class="slot-container">

      <div class="loading-placeholder" ng-show="!gspSlotItems[activeSlotGsp].length">
        <ul>
          <li class="animate fadeIn"><span></span></li>
          <li class="animate fadeIn"><span></span></li>
          <li class="animate fadeIn"><span></span></li>
          <li class="animate fadeIn"><span></span></li>
          <li class="animate fadeIn"><span></span></li>
          <li class="animate fadeIn"><span></span></li>
        </ul>
      </div>

      <div class="mobile-slot-wrapper" ng-cloak="" ng-show="gspSlotItems[activeSlotGsp].length">
        <ul class="responsive-thumbnails">
          <li class="slot-item-wrapper animated fadeInUp {{slot.gname}}"
              ng-repeat="slot in gspSlotItems[activeSlotGsp] | filter:slotFilter"
              ng-click="playGame(slot.game,'slot',slot.GameCode,false,'',slot.gname)">
            <div class="slot-item" ng-if="gspNo == 1036" ng-style="{'background': 'url(' + slot.image + ') left center no-repeat', 'background-size': '200%'}">
              <p class="slot-title text-center no-margin" ng-bind="slot.GameName"></p>
            </div>
            <div class="slot-item" ng-if="gspNo != 1005 && gspNo != 1053 && gspNo != 1038 && gspNo != 1034 && gspNo != 1036 && gspNo != 1012 && gspNo != 1066 && gspNo != 1027 && gspNo != 1061"
                 ng-style="{'background': 'url(' + slot.image + ') top center no-repeat', 'background-size': ' 100%'}">
              <p class="slot-title text-center no-margin" ng-bind="slot.GameName"></p>
            </div>
            <div class="slot-item" ng-if="gspNo == 1005" ng-style="{'background': 'url(' + slot.image + ') 0 0 no-repeat','background-size': '100%'}">
              <p class="slot-title" ng-bind="slot.GameName"></p>
            </div>
            <div class="slot-item" ng-if="gspNo == 1053" ng-style="{'background': 'url(' + slot.image + ') top center no-repeat','background-size': '100%'}">
              <p class="slot-title text-center no-margin" ng-bind="slot.GameName"></p>
            </div>
            <div class="slot-item" ng-if="gspNo == 1027" ng-style="{'background': 'url(' + slot.image + ') top center no-repeat','background-size': '115%'}">
              <img ng-if="slot.PTJackpot" ng-src="api/system/GetJackPotPlayTech?game={{slot.PTJackpot}}">
              <p class="slot-title text-center no-margin" ng-bind="slot.GameName"></p>
            </div>
            <div class="slot-item" ng-if="gspNo == 1012" ng-style="{'background': 'url(' + slot.image + ') 0 0 / 100% no-repeat','background-size': '100%'}">
              <img ng-if="slot.PTJackpot" ng-src="api/system/GetJackPotPlayTech?game={{slot.PTJackpot}}">
              <p class="slot-title text-center no-margin" ng-bind="slot.GameName"></p>
            </div>
            <div class="slot-item" ng-if="gspNo == 1066" ng-style="{'background': 'url(' + slot.image + ') top center / 100% no-repeat'}">
              <img ng-if="slot.PTJackpot" ng-src="api/system/GetJackPotPlayTech?game={{slot.PTJackpot}}">
              <p class="slot-title text-center no-margin" ng-bind="slot.GameName"></p>
            </div>
            <div class="slot-item" ng-if="gspNo == 1061 || gspNo == 1034" ng-style="{'background': 'url(' + slot.image + ') top center / 100% no-repeat'}">
              <img ng-if="slot.PTJackpot" ng-src="api/system/GetJackPotPlayTech?game={{slot.PTJackpot}}">
              <p class="slot-title text-center no-margin" ng-bind="slot.GameName"></p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="clearfix"></div>
  </div>
</main>
