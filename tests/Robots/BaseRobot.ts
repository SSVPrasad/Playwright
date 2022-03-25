// BaseRobot.ts
import { expect, Locator, Page } from '@playwright/test';


export class BaseDependencies {
  readonly page: Page;
  

  constructor(page: Page) {
    this.page = page;
   
  }

   async visitWebsite() {
   
  await this.page.goto('https://playwright.dev');
  
    return this;
  }
  
  
}

export class BaseEyes {
 
  
   
 }


export class BaseHands {


}
