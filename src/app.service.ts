import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Phished } from './phished.entity';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Phished)
    private phishedRepository: Repository<Phished>,
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  async pushOne(employeeId: number): Promise<Phished> {
    const phished = this.phishedRepository.create({ employeeId });

    return await this.phishedRepository.save(phished);
  }

  async getOne(id: number): Promise<Employee> {
    return await this.employeeRepository.findOneBy({ id });
  }
}
