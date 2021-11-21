<!--<div class="ngdialog-notice-page" ng-controller="NoticeController" ng-init="readBoardContent(anouncementPopup[ngDialogData.index].Type,anouncementPopup[ngDialogData.index].BoardCode,'',ngDialogData.index)">-->
<div class="ngdialog-notice-page" ng-controller="NoticeController" ng-init="readBoardContent(anouncementPopup.Type,anouncementPopup.BoardCode)">
  <div class="ngdialog-notice__title">
    <img src="/common/images/logo-blue-new.png" alt="">
  </div>
  <hr>
  <div class="notice-body">
    <div class="ngdialog-notice__content__title clearfix">
      <!--      <h5 class="pull-left" ng-bind="readTitle[ngDialogData.index]"></h5>
            <h5 class="pull-right" ng-bind="readDate[ngDialogData.index]"></h5>-->
      <h5 class="pull-left" ng-bind="readTitle"></h5>
      <h5 class="pull-right" ng-bind="readDate"></h5>
    </div>
    <div class="ngdialog-notice__content">
      <p ng-bind-html="readContents"></p>
    </div>
  </div>
  <hr>
  <div class="ngdialog-notice__content__footer clearfix" role="button">
    <h5 class="btn btn-black pull-right" translate="" ng-click="notToday()">Do Not Show This Message for Today</h5>
  </div>
</div>
