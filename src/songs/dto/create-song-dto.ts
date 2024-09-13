// import {
//   IsArray,
//   IsDateString,
//   IsNotEmpty,
//   IsString,
//   IsMilitaryTime,
// } from 'class-validator';

// export class CreateSongDTO {
//   @IsString()
//   @IsNotEmpty()
//   readonly title;

//   @IsArray()
//   @IsString({ each: true })
//   @IsNotEmpty()
//   readonly artists;

//   @IsNotEmpty()
//   @IsDateString()
//   readonly releasedDate;

//   @IsMilitaryTime()
//   @IsNotEmpty()
//   readonly duration;
// }

import {
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsString,
  IsMilitaryTime,
  ArrayNotEmpty,
} from 'class-validator';

export class CreateSongDTO {
  @IsString()
  @IsNotEmpty()
  readonly title: string;  // Explicit typing

  @IsArray()
  @ArrayNotEmpty()  // Ensures the array is not empty
  @IsString({ each: true })  // Ensures each value in the array is a string
  readonly artists: string[];  // Explicit typing

  @IsNotEmpty()
  @IsDateString()  // Ensures the date is in ISO 8601 format
  readonly releasedDate: string;  // Explicit typing

  @IsNotEmpty()
  @IsMilitaryTime()  // Ensures the time is in military HH:MM format
  readonly duration: string;  // Explicit typing
}
