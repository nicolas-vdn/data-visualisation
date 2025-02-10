import { Controller, Get, HttpCode, Query, Redirect } from '@nestjs/common';
import { AppService } from './app.service';
import { Employee } from './employee.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('test')
  @HttpCode(200)
  // @Redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ', 302)
  async getPhished(@Query('id') id: number): Promise<void> {
    console.log(await this.appService.pushOne(id));
  }

  @Get('employee')
  async getOne(@Query('id') id: number): Promise<Employee> {
    return await this.appService.getOne(id);
  }
}
