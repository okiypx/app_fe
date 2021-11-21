<!--<div class="ngdialog-notice-page" ng-controller="NoticeController" ng-init="readBoardContent(anouncementPopup[ngDialogData.index].Type,anouncementPopup[ngDialogData.index].BoardCode,'',ngDialogData.index)">-->
<div class="ngdialog-notice-page" ng-controller="NoticeController" ng-init="readBoardContent(anouncementPopup.Type,anouncementPopup.BoardCode)">

  <div class="ngdialog__header">
    <div class="ngdialog__header__title">
      <h1 translate="">공지사항</h1>
    </div>
<!--    <div class="ngdialog-close-container">
      <a class="ngdialog-close-btn" href="" ng-click="closeThisDialog(0)"><i class="fa fa-times"></i></a>
    </div>-->
  </div>
  <div class="ngdialog__content" style="padding: 20px;height: calc(100vh - 105px);overflow-y: auto;">
    <h5 ng-bind="readTitle"></h5>
    <p ng-bind-html="readContents"></p>
    <!--    <h5 ng-bind="readTitle[ngDialogData.index]"></h5>
        <p ng-bind-html="readContents[ngDialogData.index]"></p>-->
  </div>
<!--  <button type="button" class="btn btn-block btn-primary fullscreen-footer" ng-click="notToday(ngDialogData.id)" translate>다시 보지 않기</button>-->
  <button type="button" class="btn btn-block btn-primary fullscreen-footer" ng-click="notToday()" translate>다시 보지 않기</button>
</div>
