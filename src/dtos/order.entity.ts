import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class OrderEntity {
  @Expose()
  platformId: string;
}
