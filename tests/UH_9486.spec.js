import { test, expect } from '@playwright/test';
test.setTimeout(50000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9486_View Player Trip History', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")

  await pa.enterPlayerID('660302931')
  await pa.clickOnSearch()
  await pa.validatePlayerDashboardDisplayed()
  await pa.clickOnTripsTab()
  await pa.validatePlayersTripPageDisplayed()
  await pa.validateTripHistoryDisplayed()
  await pa.validateLifeToDateTripHistoryDisplayed()
  await pa.validatePlayerTripHistoryDisplayed()
  await pa.validateHideGraphInPlayerTripHistoryDisplayed()
  await pa.validateBuildGridDisplayInPlayerTripHistoryDisplayed()
  await pa.validateSaveSearchSettingInPlayerTripHistoryDisplayed()
  await pa.clickOnHideGraphSetting()
  await pa.validateHideGraphSettinghidedExpandGraphSettingDisplayed()
  await pa.clickOnExpandGraphSetting()
  await pa.clickOnBuildGridDiplay()
  await pa.validateGridDisplayedWithTripNumber()
  await pa.validateGridDisplayedWithFromColoumn()
  await pa.validateGideDisplayedWithToColoum()
  await pa.clickOnExpandGraphSetting()
  await pa.selectDateRange()
  await pa.selectProperty()
  await pa.selectRatingType()
  await pa.clickOnSaveSearchSetting()
  await pa.validateUserTripGraphWidowOpened()
  await pa.clickOnOk()
  await pa.validateSearchSettingSaved()
  await common.logout();

  });
