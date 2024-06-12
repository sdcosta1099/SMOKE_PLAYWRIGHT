import { test, expect } from '@playwright/test';
test.setTimeout(50000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9471_Display Player Transaction Log', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  // await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")

  // await pa.enterPlayerID('807879760')
  // await pa.clickOnSearch()
  // await pa.validatePlayerDashboardDisplayed()
  // await pa.clickOnPlayerFunction()
  // await pa.clickOnPlayerTransactionLog()
  // await pa.validateTransactionDateAndTimeDisplay()
  // //await pa.clickOnLeftArrow()
  

 //await common.logout();

  });
