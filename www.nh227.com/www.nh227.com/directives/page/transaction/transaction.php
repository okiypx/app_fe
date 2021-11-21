<div class="transaction-page">
  <div class="transaction-container">
    <div class="transaction-table">
      <div class="table-heading">
        <span class="col-xs-8">NEW Heaven 카지노에서 알려드립니다.</span>
        <span class="col-xs-4 pull-right text-right" ng-click="displayCustomer(1); setTab(1);">전체 보기</span>
      </div>
      <ul class=" list-unstyled transaction-list"  style="width: 328px;" id="notice-ticker">
        <li role="button"
            class=""
            ng-repeat="announce in announceList | limitTo: 5"
            ng-style="$index%2 == 0 && {'background-color': '#000000'} || {'background-color':'#121113'}">
          <div class="col-xs-4 text-left"><span ng-bind="formatDate(announce.WriteDate) | date:'yyyy-MM-dd'"></span></div>
          <div class="col-xs-8 text-left text-white"><span ng-bind="announce.Subject | limitTo:20 " ng-click="displayCustomer(1); readBoardContent(announce.Type,announce.BoardCode)"></span></div>
        </li>
      </ul>
    </div>
    <div class="transaction-table">
      <div class="table-heading"><span>실시간 입금 현황</span></div>
      <ul class=" list-unstyled transaction-list"  style="width: 328px;" id="deposit-ticker">
        <li class=""
            ng-repeat="realTimeTransaction in realTimeTransactionList | filter:{Type:1}"
            ng-class="{odd:$index % 2 == 0}">
          <div class="col-xs-5 text-left"><span ng-bind="formatDate(realTimeTransaction.Date) | date:'yyyy-MM-dd H:mm'"></span></div>
          <div class="col-xs-3 text-right goldTxt"><span ng-bind="realTimeTransaction.Amount + ' 원'"></span></div>
          <div class="col-xs-4 text-left" style="padding-left: 10px;"><span ng-bind="realTimeTransaction.Member_id"></span></div>
        </li>
      </ul>
    </div>
    <div class="transaction-table">
      <div class="table-heading"><span>실시간 출금 현황</span></div>
      <ul class=" list-unstyled transaction-list"  style="width: 328px;" id="withdraw-ticker">
        <li class=""
            ng-repeat="realTimeTransaction in realTimeTransactionList | filter:{Type:2}"
            ng-class="{odd:$index % 2 == 0}">
          <div class="col-xs-5 text-left"><span ng-bind="formatDate(realTimeTransaction.Date) | date:'yyyy-MM-dd H:mm'"></span></div>
          <div class="col-xs-3 text-right goldTxt"><span ng-bind="realTimeTransaction.Amount + ' 원'"></span></div>
          <div class="col-xs-4 text-left" style="padding-left: 10px;"><span ng-bind="realTimeTransaction.Member_id"></span></div>
        </li>
      </ul>
    </div>
    <div class="clearfix"></div>
  </div>
</div>


<script>
  setTimeout(function () {
    $('#notice-ticker').newsTicker({
      row_height: 14.5,
      max_rows: 11,
      duration: 2000,
      autostart:0
    });
    $('#deposit-ticker').newsTicker({
      row_height: 32,
      max_rows: 5,
      direction: 'up',
      autostart: 1,
      pauseOnHover: 1,
      delay : 10000
    });
  });
  setTimeout(function () {
    $('#withdraw-ticker').newsTicker({
      row_height: 32,
      max_rows: 5,
      direction: 'up',
      autostart: 1,
      pauseOnHover: 1,
      delay : 10000
    });
  },500);
</script>
