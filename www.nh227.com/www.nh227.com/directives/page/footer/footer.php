
<div class="footer-page">
  <div class="main-container">
    <div class="footer-logo-container">
      <div ng-repeat="footerLogo in footerLogos | unique : 'gspNo' | filter: gspLogoUnique ">
        <img ng-src="/common/images/footer/footer-{{footerLogo.gspNo}}.png"
             class="logo-{{footerLogo.gspNo}}"
             alt="{{footerLogo.gspNo}}"
             onerror="this.style.display='none';this.className='none';">
      </div>
    </div>
    <p>Copyright 2020 <span>NEW Heaven Casino</span>. All rights reserved.</p>
  </div>
</div>