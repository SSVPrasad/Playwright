import { BaseHands, BaseEyes, BaseDependencies } from './BaseRobot';
import { Page } from '@playwright/test';

export class Dependencies extends BaseDependencies{
  
  constructor(page: Page) {
    super(page);
    
  }
    async visitAmazonWebpage() {
        const url: string="https://www.amazon.in/";
       
       await super.visitWebsite(url);
       

      }
}

export class RobotEyes extends BaseEyes{
    
    
}

export class RobotHands extends BaseEyes{
    
    
}
