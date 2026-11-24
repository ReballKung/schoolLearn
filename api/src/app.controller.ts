import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('Health')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health')
  @ApiOperation({ summary: 'Check API health status' })
  getHealth() {
    return {
      status: 'ok',
      service: 'schoollearn-api',
      timestamp: new Date().toISOString(),
    };
  }
}
