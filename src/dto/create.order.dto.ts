import { IsArray, IsNotEmpty } from 'class-validator';

export class createOrderDto {
  @IsArray()
  @IsNotEmpty()
  coordinates: [number, number];
}
