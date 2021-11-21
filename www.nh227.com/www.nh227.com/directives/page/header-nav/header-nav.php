<header class="header-nav" ng-controller="NavController">
  <div class="header-nav__top">
    <div class="main-container">
      <div class="header-nav__top-item">
        <notice-page></notice-page>
      </div>
      <div class="header-nav__top-item">
        <nav class="sub-nav">
          <ul class="list-inline">
            <li><a href="" ng-click="displayCustomer(2);">자주 묻는 질문</a></li>
            <li><a href="" ng-click="displayCustomer(5);">파트너 제휴 문의</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  <div class="header-nav__menu">
    <div class="main-container">
      <div class="logo">
        <a href="/#/">
          <img src="/common/images/logo-blue-new.png" alt="">
        </a>
      </div>
      <nav class="main-nav">
        <ul class="list-inline">
          <li ng-repeat="navItem in mainNav">
            <a href="" ng-click="navClick(navItem.type, navItem.setTab)">
              <p class="classA {{navItem.classA">{{navItem.title}}</p>
              <p class="classB {{navItem.classB">{{navItem.sub}}</p>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</header>
