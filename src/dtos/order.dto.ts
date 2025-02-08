import { Exclude, Expose, Transform } from 'class-transformer';
import { LineItemEntity } from './line-item.entity';

@Exclude()
export class OrderDto {
  @Transform(({ value }) => value.toString())
  @Expose({ name: 'id' })
  platformId: string;

  @Expose({ name: 'line_items' })
  lineItem: LineItemEntity[];
}
