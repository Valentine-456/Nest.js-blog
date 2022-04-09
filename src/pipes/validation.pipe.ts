/* eslint-disable prettier/prettier */
import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { ValidationException } from 'src/exceptions/validation.exception';

@Injectable()
export class ValidationPipe implements PipeTransform<Promise<any>> {
  async transform(value: any, metadata: ArgumentMetadata) {
    const obj = plainToClass(metadata.metatype, value);
    const validationErrors = await validate(obj);

    if (validationErrors) {
      const errorMessages = validationErrors.map(
        (error) =>
          `${error.property} - ${Object.values(error.constraints).join('; ')}`,
      );
      throw new ValidationException(errorMessages);
    }
    return value;
  }
}
