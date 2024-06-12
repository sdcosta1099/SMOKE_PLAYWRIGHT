import { test, expect } from '@playwright/test';
const { setInputFiles } = require('playwright/test');
exports.playerAction = class playerAction {
    constructor(page) {
        this.page = page
        this.configuration_link = page.getByRole('link', { name: 'Configuration' })
        this.itemSearchField = page.getByRole('combobox', { name: 'Enter Keyword or Item No.' })
         
      //9481
      this.PlayerFunctions = page.locator("//a[contains(text(),'Player Functions')]")
      this.ViewTierHistory = page.locator("//a[contains(text(),'View Tier History')]")
      this.vCurrentTier1 = page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').getByText('Progress Current Tier : Star Tier Credits : 00')
      this.vTierCredits1 = page.frameLocator('#ifrContent').getByText('Tier Credits :')
      this.vNextTier1 = page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').getByText('Next Tier :')
      this.vTierCreditsRequired1 = page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').getByText('Next Tier :')
      this.vTierCreditsToEarnNextTier = page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').getByText('Tier Credits to Earn Next Tier :')
      this.vNextTierExpiration = page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').getByText('Next Tier Expiration :')
      this.vNextTierCreditsExpiration = page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').getByText('Next Tier Credits Expiration :')
      this.CancelButton = page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').locator("//input[@id='ImageButton1']")

      
      //UH_9482
      this.PlayerID = page.locator("//input[@id='ctl00_txtPlayerId']")
      this.Search = page.locator("//input[@id='ctl00_ImgSearch']")
      this.playerclubinfo = page.frameLocator('#ifrContent').locator('#ddlPlayerInfo')
      this.ClubInfo = page.frameLocator('#ifrContent').locator('#ddlPlayerInfo')
      this.vCardPic = page.frameLocator('#ifrContent').getByText('Star', { exact: true })
      this.vCurrentTier = page.frameLocator('#ifrContent').locator('(//td[@style="padding: 0; padding-bottom: 2px;"])[1]')
      this.vTireCredits = page.frameLocator('#ifrContent').getByText('Current Tier Credits:')
      this.vNextTier= page.frameLocator('#ifrContent').getByText('Next Tier -')
      this.vTierCreditsRequired = page.frameLocator('#ifrContent').getByText('Tier Credits Required:')
      this.vNextTierCredits = page.frameLocator('#ifrContent').getByText('Required to Next Tier:')
      this.vRequiredToNextTierCredits = page.frameLocator('#ifrContent').locator('//div[@id="tdNextExpirationlabel"]')
      
      //UH_9483
      this.vPlayerName = page.frameLocator('#ifrContent').getByText('Rae  Clark')
      this.vPlayerId = page.frameLocator('#ifrContent').getByText('Player Id')
      this.vPlayerType = page.frameLocator('#ifrContent').getByText('Player Type:')
      this.vDob = page.frameLocator('#ifrContent').getByText('DOB:')
      this.vMemberSince = page.frameLocator('#ifrContent').getByText('Member Since:')
      this.vTierExpiration = page.frameLocator('#ifrContent').getByText('Tier Expiration:')
      this.vAccountType = page.frameLocator('#ifrContent').getByText('Account Type:')
      this.vPredominentLocation = page.frameLocator('#ifrContent').getByText('Predominant Location:')
      this.vShowLinks = page.frameLocator('#ifrContent').getByText('Show Links')
      this.vTierMatchIcon = page.frameLocator('#ifrContent').locator("//input[@id='imgTier']")

      //UH_9484
      this.TripsTab = page.locator("//div[@id='dvTrips']")
      this.vTripPage = page.locator("//span[@id='ctl00_lblContent']")
      this.vTotalTrips = page.frameLocator('#ifrContent').getByText('Total Trips:')
      this.vTotalProperties = page.frameLocator('#ifrContent').getByText('Total Properties:')
      this.vStartDate = page.frameLocator('#ifrContent').locator("//span[@id='lvLive_ctrl0_ctl01_Label1']")
      this.vEndDate = page.frameLocator('#ifrContent').locator("//span[@id='lvLive_ctrl0_ctl01_Label11']")
      this.vDaysPlayed = page.frameLocator('#ifrContent').locator("//span[@id='lvLive_ctrl0_ctl01_Label3']")
      this.vTheoWin = page.frameLocator('#ifrContent').locator("//span[@id='lvLive_ctrl0_ctl01_Label4']")
      this.vActualWin = page.frameLocator('#ifrContent').locator("//span[@id='lvLive_ctrl0_ctl01_Label5']")
      this.vIssued = page.frameLocator('#ifrContent').locator("//span[@id='lvLive_ctrl0_ctl01_Label6']")
      this.vRedeemed = page.frameLocator('#ifrContent').locator("//span[@id='lvLive_ctrl0_ctl01_Label7']")
      this.vPointsEarned = page.frameLocator('#ifrContent').locator("//span[@id='lvLive_ctrl0_ctl01_Label8']")
      this.vTierCreditsEarned = page.frameLocator('#ifrContent').locator("//span[@id='lvLive_ctrl0_ctl01_Label9']")
      
      //UH_9491
      this.vPlayerDashboard = page.locator("//span[@id='ctl00_lblContent']")
      this.Trips = page.locator("//div[@id='dvTrips']")
      this.vLifeToTripHistory = page.frameLocator('#ifrContent').getByText('Life to Date Trip History')
      this.vTripHistory = page.frameLocator('#ifrContent').getByText('Trip History', { exact: true })
      this.vPlayerTripHistory = page.frameLocator('#ifrContent').getByText('PLAYER TRIP HISTORY')
      this.vTripNumber = page.frameLocator('#ifrContent').locator('#lvTrip_ctrl0_ctl01_btnSelect')
      this.vRatingID = page.frameLocator('#ifrContent').getByText('Rating ID')

      //UH_9485
      this.Configuration = page.locator("//a[@id='main_nav_1000000']")
      this.CoreSystemConfiguration = page.locator("//a[contains(text(),'Core System Configurations')]")
      this.ManageTripDefinition = page.locator("//a[contains(text(),'Manage Trip Definition')]")
      this.vManageTripDefinition = page.locator("//span[contains(text(),'Manage Trip Definition')]")
      this.InActiveTab = page.locator("//a[contains(text(),'Inactive')]")
      this.SelectTrip = page.locator("//select[@id='ctl00_ContentPlaceHolder1_lstTrips']")
      this.vTripName = page.locator("//span[contains(text(),'Trip Name:')]")
      this.vTripType = page.locator("//span[contains(text(),'Trip Type:')]")
      this.vTripDescription = page.locator("//span[contains(text(),'Trip Description:')]")
      this.vProperty = page.locator("//span[contains(text(),'Property:')]")
      this.vMaxOfDays = page.locator("//span[contains(text(),'Max # of days in a trip :')]")
      this.vInactivityDays = page.locator("//span[contains(text(),'Inactivity Days:')]")
      this.vSortOrder = page.locator("//span[contains(text(),'Sort Order:')]")
      this.vCompRedemption = page.locator("//option[contains(text(),'Comp Redemption')]")
      this.vOfferRedemption = page.locator("//option[contains(text(),'Offer Redemption')]")
      this.vRating = page.locator("//option[contains(text(),'Rating')]")
      this.ActiveCheckBox = page.locator("//input[@id='ctl00_ContentPlaceHolder1_chkActive']")
      this.Save = page.locator("//input[@name='ctl00$ContentPlaceHolder1$btnSave']")
      this.vActiveList = page.locator("//select[@id='ctl00_ContentPlaceHolder1_lstTrips']")
      this.ActiveTab = page.locator("//a[@id='ctl00_ContentPlaceHolder1_btnActive']")
      this.vInActiveList = page.locator("//select[@id='ctl00_ContentPlaceHolder1_lstTrips']")
      

      //UH_9486
      this.vHideGraphSetting = page.frameLocator('#ifrContent').locator("//div[@id='dbTripSetGraph']")
      this.vBuildGridDisplay = page.frameLocator('#ifrContent').locator("//input[@name='ucUserSeletedGraph$btntdTripBuildGraph']")
      this.vSaveSearchSetting = page.frameLocator('#ifrContent').locator("//input[@id='ucUserSeletedGraph_btnTripSave']")
      this.vExpandGraphSetting =  page.frameLocator('#ifrContent').locator("//div[contains(text(),'Expand Graph Setting')]")
      this.vFrom = page.frameLocator('#ifrContent').locator('#tdTripsTheGraph').getByRole('columnheader', { name: 'From' })
      this.vTo = page.frameLocator('#ifrContent').locator("(//th[contains(text(),'To')])[1]")
      this.DateRange = page.frameLocator('#ifrContent').locator("//select[@id='ddldbTripsDateRange']")
      this.Property = page.frameLocator('#ifrContent').locator("//input[@id='ucUserSeletedGraph_cklProperty_6']")
      this.RatingType =page.frameLocator('#ifrContent').locator("//select[@id='tdTripDdlRatingType']")
      this.SaveSearchSetting = page.frameLocator('#ifrContent').locator("//input[@id='ucUserSeletedGraph_btnTripSave']")
      this.vUserTripGraphWindow = page.locator("//div[contains(text(),'User Trip Graph')]")
      this.Ok = page.locator("//input[@value='OK']")
      this.vSearchSettingSaved = page.locator("//span[@id='ctl00_lblContent']")

      //UH_9471
      this.PlayerFunction = page.locator("//a[@id='main_nav_1000010']")
      this.PlayerTransactionLog = page.locator("//a[contains(text(),'Player Transaction Log')]")
      this.vTransactionDateTime = page.frameLocator('#ctl00_FramePopUp3').locator("//th[contains(text(),'Transaction Date/Time')]")
      this.LeftArrow = page.locator("(//img[@alt='Expand Row'])[1]")
      
    }


   //*******************************************************************************************************************
   
   //UH_9471
   async clickOnPlayerFunction(){
      await this.PlayerFunction.click();
   }
   async clickOnPlayerTransactionLog(){
      await this.PlayerTransactionLog.click();
   }
   async validateTransactionDateAndTimeDisplay(){
      await expect(this.vTransactionDateTime).toBeVisible();
   }
   async clickOnLeftArrow(){
      await this.LeftArrow.click();
     
   }
   //UH_9486
   async validateHideGraphInPlayerTripHistoryDisplayed(){
      await expect(this.vHideGraphSetting).toBeVisible();
   }
   async validateBuildGridDisplayInPlayerTripHistoryDisplayed(){
      await expect(this.vBuildGridDisplay).toBeVisible();
   }
   async validateSaveSearchSettingInPlayerTripHistoryDisplayed(){
      await expect(this.vSaveSearchSetting).toBeVisible();
   }
   async clickOnHideGraphSetting(){
      await this.vHideGraphSetting.click();
   }
   async clickOnExpandGraphSetting(){
      await this.vExpandGraphSetting.click();
   }
   async validateHideGraphSettinghidedExpandGraphSettingDisplayed(){
      await expect(this.vExpandGraphSetting).toBeVisible();  
   }
   async clickOnBuildGridDiplay(){
      await this.vBuildGridDisplay.click();
   }
   async validateGridDisplayedWithTripNumber(){
      await expect(this.vTripNumber).toBeVisible();
   }
   async validateGridDisplayedWithFromColoumn(){
      await expect(this.vFrom).toBeVisible();
   }
   async validateGideDisplayedWithToColoum(){
      await expect(this.vTo).toBeVisible();
   }
   async selectDateRange(){
      await this.DateRange.click();
   }
   async selectProperty(){
      await this.Property.click();
   }
   async selectRatingType(){
      await this.RatingType.click();
   }
   async clickOnSaveSearchSetting(){
      await this.SaveSearchSetting.click();
   }
   async validateUserTripGraphWidowOpened(){
      await expect(this.vUserTripGraphWindow).toBeVisible();
   }
   async clickOnOk(){
      await this.Ok.click();
   }
   async validateSearchSettingSaved(){
      await expect(this.vSearchSettingSaved).toBeVisible();
   }
   
   //UH_9481
   async clickOnPlayerFunctions(){
      await this.PlayerFunctions.click();
   }
   async clickOnViewTierHistory(){
      await this.ViewTierHistory.click();
   }
   async validateViewTierHistoryWindowDisplayed(){
      await expect(this.ViewTierHistory).toBeVisible();
   }
   async validateCurrentTierDisplayed(){
      await expect(this.vCurrentTier1).toBeVisible();
   }
   async validateTierCredits(){
      await expect(this.vTierCredits1).toBeVisible();
   }
   async validateNextTier1(){
      await expect(this.vNextTier1).toBeVisible();
   }
   async validateTierCreditsRequired1(){
      await expect(this.vTierCreditsRequired1).toBeVisible();
   }
   async validateTierCreditsToEarnNextTier(){
      await expect(this.vTierCreditsToEarnNextTier).toBeVisible();
   }
   async validateNextTierExpiration(){
      await expect(this.vNextTierExpiration).toBeVisible();
   }
   async validateNextTierCreditsExpiration(){
      await expect(this.vNextTierCreditsExpiration).toBeVisible();
   }
   async clickOnCancelButton(){
      await this.CancelButton.click();
   }

   //UH_9482
   async enterPlayerID(PlayerID){
      await this.PlayerID.fill(PlayerID); 
   }
   async clickOnSearch(){
      await this.Search.click();
   }
   async clickOnDropdown(){
      await this.playerclubinfo.click();
   }
   async selectClubInfoFromDropdown(){
         await this.ClubInfo.selectOption('2');
   }
   async validateCurrentTierCreditCardPic(){
      await expect(this.vCardPic).toBeVisible();
   }
   async validateCurrentTier(){
      await expect(this.vCurrentTier).toBeVisible();
   }
   async validateCurrentTireCredits(){
      await expect(this.vTireCredits).toBeVisible();
   }
   async validateNextTier(){
      await expect(this.vNextTier).toBeVisible();
   }
   async validateTierCreditsRequired(){
      await expect(this.vTierCreditsRequired).toBeVisible();
   }
   async validateRequiredToNextTierCredits(){
      await expect(this.vRequiredToNextTierCredits).toBeVisible();
   }
   
   //UH_9483
   async validatePlayerNameDisplayed(){
      await expect(this.vPlayerName).toBeVisible();
   }
   async validatePlayerIdDisplayed(){
      await expect(this.vPlayerId).toBeVisible();
   }
   async validatePlayerTypeDisplayed(){
      await expect(this.vPlayerType).toBeVisible();
   }
   async validateDobDisplayed(){
      await expect(this.vDob).toBeVisible(); 
   }
   async validateMemberSinceDisplayed(){
      await expect(this.vMemberSince).toBeVisible();
   }
   async validateTierExpirationDisplayed(){
      await expect(this.vTierExpiration).toBeVisible();
   }
   async validateAccountTypeDisplayed(){
      await expect(this.vAccountType).toBeVisible();  
   }
   async validatePredominentLocationDisplayed(){
      await expect(this.vPredominentLocation).toBeVisible();
   }
   async validateShowLinksDisplayed(){
      await expect(this.vShowLinks).toBeVisible();
   }
   async validateTierMatchIconDisplayed(){
      await expect(this.vTierMatchIcon).toBeVisible();
   }
   async ClickOnActiveCheckBox(){
      await expect(this.vActiveList).toBeVisible();
   }
   
   //UH_9484
   async clickOnTripTab(){
      await this.TripsTab.click();
   }
   async validatePlayersTripPageDisplayed(){
      await expect(this.vTripPage).toBeVisible();
   }
   async validateTotalTripsInLifeToDateTripHistoryDisplayed(){
      await expect(this.vTotalTrips).toBeVisible();
   }
   async validateTotalPropertiesInLifeToDateTripHistoryDisplayed(){
      await expect(this.vTotalTrips).toBeVisible();
   }
   async validateStartDateInLifeToDateTripHistoryDisplayed(){
      await expect(this.vStartDate).toBeVisible();
   }
   async validateEndDateInLifeToDateTripHistoryDisplayed(){
      await expect(this.vEndDate).toBeVisible();
   }
   async validateDaysPlayedInLifeToDateTripHistoryDisplayed(){
      await expect(this.vDaysPlayed).toBeVisible();
   }
   async validateTheoWinInLifeToDateTripHistoryDisplayed(){
      await expect(this.vTheoWin).toBeVisible();
   }
   async validateActualWinInLifeToDateTripHistoryDisplayed(){
      await expect(this.vActualWin).toBeVisible();
   }
   async validateIssuedInLifeToDateTripHistoryDisplayed(){
      await expect(this.vIssued).toBeVisible();
   }
   async validateRedeemedInLifeToDateTripHistoryDisplayed(){
      await expect(this.vRedeemed).toBeVisible();
   }
   async validatePointsEarnedInLifeToDateTripHistoryDisplayed(){
      await expect(this.vPointsEarned).toBeVisible();
   }
   async validateTierCreditsEarnedInLifeToDateTripHistoryDisplayed(){
      await expect(this.vTierCreditsEarned).toBeVisible();
   }
   async validateTripNumberInTripHistoryDisplayed(){
      await this.page.waitForTimeout(3000);
      await expect(this.vTripNumber).toBeVisible();
   }

   //UH_9485
   async clickOnConfiguration(){
      await this.Configuration.click();
   }
   async clickOnCoreSystemConfiguration(){
      await this.CoreSystemConfiguration.click();
   }
   async clickOnManageTripDefinition(){
      await this.ManageTripDefinition.click();
   }
   async validateManageTripDefinitionPageDisplayed(){
      await expect(this.vManageTripDefinition).toBeVisible();
   }
   async clickOnInActiveTab(){
      await this.InActiveTab.click();
   }
   async selectTrip(){
      await this.SelectTrip.click();
   }
   async validateValueInTripNameDisplayed(){
      await expect(this.vTripName).toBeVisible();
   }
   async validateValueInTripTypeDisplayed(){
      await expect(this.vTripType).toBeVisible();
   }
   async validateValueInTripDescriptionDisplayed(){
      await expect(this.vTripDescription).toBeVisible();
   }
   async validateValueInPropertyDisplayed(){
      await expect(this.vProperty).toBeVisible();
   }
   async validateMaxOfDaysDisplayed(){
      await expect(this.vMaxOfDays).toBeVisible();
   }
   async validateInactivityDaysDisplayed(){
      await expect(this.vInactivityDays).toBeVisible();
   }
   async validateSortOrderDisplayed(){
      await expect(this.vSortOrder).toBeVisible();
   }
   async validateCompRedemptionInStartsATripDisplayed(){
      await expect(this.vCompRedemption).toBeVisible();
   }
   async validateOfferRedemptionInStartsATripDisplayed(){
      await expect(this.vOfferRedemption).toBeVisible();
   }
   async validateRatingInStartsATripDisplayed(){
      await expect(this.vOfferRedemption).toBeVisible();
   }
   async clickOnActiveCheckBox(){
      await this.ActiveCheckBox.click();
   }
   async clickOnSave(){
      await this.Save.click();
   }
   async validateTripUnderActiveListDisplayed(){
      await expect(this.vActiveList).toBeVisible();
   }
   async clickOnActiveTab(){
      await this.ActiveTab.click();
   }
   async uncheckActiveCheckBox(){
      await this.ActiveTab.click();
   }
   async validateTripUnderInActiveListDisplayed(){
      await expect(this.vInActiveList).toBeVisible()
   }
   
   //UH_9491
   async validatePlayerDashboardDisplayed(){
      await expect(this.vPlayerDashboard).toBeVisible();
   }
   async clickOnTripsTab(){
      await this.Trips.click();
   }
   async validateTripHistoryDisplayed(){
      await this.page.waitForTimeout(3000);
      await expect(this.vTripHistory).toBeVisible();
      await this.page.waitForTimeout(3000);
   }
   async validateLifeToDateTripHistoryDisplayed(){
      await expect(this.vLifeToTripHistory).toBeVisible();
   }
   async validatePlayerTripHistoryDisplayed(){
      await expect(this.vPlayerTripHistory).toBeVisible();
   }
   async validateTripHistoryHasTripNumber(){
      await expect(this.vTripNumber).toBeVisible();
   }
   async clickOnTripNumberLink(){
      await this.vTripNumber.click();
   }
   async validateRatingIDDataDisplayed(){
      await expect(this.vRatingID).toBeVisible();
   }
}
