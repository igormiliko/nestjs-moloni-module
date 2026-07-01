import { Module } from '@nestjs/common';
import { MoloniModule } from './provider/moloni/moloni.module';
import { BillingService } from './billing.service';

@Module({
  imports: [MoloniModule],
  providers: [BillingService],
  exports: [BillingService],
})
export class BillingModule {}
