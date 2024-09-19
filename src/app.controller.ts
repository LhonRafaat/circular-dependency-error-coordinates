import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { createOrderDto } from './dto/create.order.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { TOrder } from './dto/order.type';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOkResponse({
    type: TOrder,
  })
  getHello(@Body() createOrderDto: createOrderDto): string {
    console.log(createOrderDto);
    return this.appService.getHello();
  }
}
