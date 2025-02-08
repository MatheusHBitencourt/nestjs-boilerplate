import { Exclude, Expose, Transform } from 'class-transformer';

@Exclude()
export class LineItemEntity {
  @Transform(({ value }) => value.toString())
  @Expose({ name: 'id' })
  platformId: string;

  @Transform(({ value }) => (value ? value.toString() : null))
  @Expose({ name: 'product_id' })
  productId?: string;

  @Expose()
  orderId: string;
}
