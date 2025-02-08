import { Exclude, Expose, Transform } from 'class-transformer';

@Exclude()
export class ProductEntity {
  @Transform(({ value }) => value.toString())
  @Expose({ name: 'id' })
  platformId: string;

  @Expose({ name: 'title' })
  name: string;
}
