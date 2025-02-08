import { Exclude, Expose } from 'class-transformer';
import { LineItemEntity } from './line-item.entity';

@Exclude()
export class OrderResponseDto {
  @Expose()
  id: string;

  @Expose()
  platformId: string;

  @Expose()
  lineItems: LineItemEntity[];
}
