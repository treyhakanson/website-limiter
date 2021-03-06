(function(document, browser) {
   let fontLink = document.createElement("link");
   fontLink.rel = "stylesheet";
   fontLink.href = "https://fonts.googleapis.com/css?family=Muli:400,600";
   document.head.appendChild(fontLink);

   let lockIconURL = browser.extension.getURL(
      "node_modules/typicons.font/src/svg/lock-closed-outline.svg"
   );
   let closeIconURL = browser.extension.getURL(
      "node_modules/typicons.font/src/svg/delete.svg"
   );

   let warning = document.createElement("div");
   warning.className = "limit-warning";
   warning.style = `
      z-index: 2147483647 !important;
      position: fixed !important;
      bottom: 10px !important;
      right: 10px !important;
      width: 275px !important;
      background-color: #fff !important;
      border-radius: 5px !important;
      box-shadow: 3px 3px 5px rgba(32, 32, 32, 0.1) !important;
   `;

   let header = document.createElement("div");
   header.className = "limit-warning__header";
   header.style = `
      padding: 25px 35px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: flex-start !important;
      background: #2d74cc !important;
      background: -moz-linear-gradient(
         -45deg,
         #2d74cc 0%,
         #260de3 100%
      ) !important;
      background: -webkit-gradient(
         left top,
         right bottom,
         color-stop(0%, #2d74cc),
         color-stop(100%, #260de3)
      ) !important;
      background: -webkit-linear-gradient(
         -45deg,
         #2d74cc 0%,
         #260de3 100%
      ) !important;
      background: -o-linear-gradient(-45deg, #2d74cc 0%, #260de3 100%) !important;
      background: -ms-linear-gradient(-45deg, #2d74cc 0%, #260de3 100%) !important;
      background: linear-gradient(135deg, #2d74cc 0%, #260de3 100%) !important;
      filter: progid:DXImageTransform.Microsoft.gradient(
            startColorstr="#2d74cc",
            endColorstr="#260de3",
            GradientType=1
         ) !important;
   `;

   let headerIcon = document.createElement("img");
   headerIcon.className = "header__icon";
   headerIcon.src = lockIconURL;
   headerIcon.style = `
      filter: invert(1) !important;
      height: 24px !important;
      width: 24px !important;
      margin-right: 5px !important;
   `;

   let headerText = document.createElement("h3");
   headerText.className = "header__text";
   headerText.textContent = "Approaching Limit";
   headerText.style = `
      color: #fff !important;
      font-family: "Muli", sans-serif !important;
      font-size: 17px !important;
   `;

   let bodyText = document.createElement("p");
   bodyText.className = "limit-warning__body";
   bodyText.textContent =
      "You have used almost all of your visits to this site for the day.";
   bodyText.style = `
      padding: 25px 35px !important;
      font-family: "Muli", sans-serif !important;
      -webkit-box-shadow: 0px -10px 21px -7px rgba(35, 35, 35, 0.4) !important;
      -moz-box-shadow: 0px -10px 21px -7px rgba(35, 35, 35, 0.4) !important;
      box-shadow: 0px -10px 21px -7px rgba(35, 35, 35, 0.4) !important;
      margin: 0 !important;
      font-size: 14px !important;
   `;

   let closeBtn = document.createElement("img");
   closeBtn.className = "header__close";
   closeBtn.src = closeIconURL;
   closeBtn.addEventListener("click", function() {
      warning.remove();
   });
   closeBtn.style = `
      height: 24px !important;
      width: 24px !important;
      filter: invert(1) !important;
      position: absolute !important;
      right: 8px !important;
      top: 8px !important;
   `;

   warning.appendChild(header);
   warning.appendChild(bodyText);

   header.appendChild(closeBtn);
   header.appendChild(headerIcon);
   header.appendChild(headerText);

   document.body.appendChild(warning);
})(document, browser);
