import { test, expect } from '@playwright/test';
test.setTimeout(50000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9486_View Player Trip History', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
 
  

  });
