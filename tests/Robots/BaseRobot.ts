// BaseRobot.ts
import { expect, Locator, Page } from '@playwright/test';


export class BaseDependencies {
  readonly page: Page;
  

  constructor(page: Page) {
    this.page = page;
   
  }

   async visitWebsite(url: string) {
   
  await this.page.goto(url);
  
    return this;
  }
  
  
}

export class BaseEyes {
 
  
   
 }


export class BaseHands {


}
