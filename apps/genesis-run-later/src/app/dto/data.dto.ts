import { IsNotEmpty, IsPositive, IsString } from 'class-validator';

export class DataDto {
  @IsPositive()
  readonly id: number;

  @IsString()
  @IsNotEmpty()
  readonly name: string;
}
