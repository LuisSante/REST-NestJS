import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ValidatetasksPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const ageToNumber = parseInt(value.age.toString(), 10);

    if (isNaN(ageToNumber)) {
      throw new HttpException('Invalid age', HttpStatus.BAD_REQUEST);
    }
    return {
      ...value,
      age: ageToNumber,
    };
  }
}
