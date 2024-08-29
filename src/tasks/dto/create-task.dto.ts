import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class TasksProps {
  @IsString()
  @MinLength(1)
  title: string;

  @IsBoolean()
  status: boolean;

  @IsOptional()
  @IsNumber()
  id?: number;
}
