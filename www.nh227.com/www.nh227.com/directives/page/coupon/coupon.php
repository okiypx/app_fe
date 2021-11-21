<div class="jackpot-container">
  <div class="jackpot-content">
    <form ng-controller="CouponController">
      <div class="form-group">
        <select class="form-control"
                name="GameCode"
                ng-model="transfer.fromWallet"
                ng-options="agentGsp.gspNo as combinedMaintenance(agentGsp) group by translateWalletCategory(agentGsp) disable when agentGsp.amount == '점검중' | translate  for agentGsp in agentGspList  | filter:{transferEnable:true} |  orderBy:'OrderNumber' | filter:maintenanceFilter | filter:combinedMaintenanceByCurrency ">
          <option value="" translate>Please Select a Game</option>
        </select>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="IP당 쿠폰은 1회만 사용 가능합니다." name="CouponCode" ng-model="CouponCode">
      </div>
      <div class="form-group">
        <button ng-if="loggedIn"  class="btn btn-sm btn-primary" ng-click="useCoupon(transfer.fromWallet,CouponCode)">확인</button>
        <button ng-if="!loggedIn" class="btn btn-sm btn-primary" ng-click="displayLogin();">확인</button>
      </div>
    </form>
  </div>
</div>
