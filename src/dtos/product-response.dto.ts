import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ProductResponseDto {
  @Expose()
  id: string;

  @Expose()
  platformId: string;

  @Expose()
  name: string;
}
