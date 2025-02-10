import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Employee } from './employee.entity';

@Entity()
export class Phished {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  employeeId: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  // Relation avec la table Employee (un phishing est associé à un employé)
  @ManyToOne(() => Employee, (employee) => employee.phished)
  @JoinColumn({ name: 'employeeId', referencedColumnName: 'id' }) // Clé étrangère
  employee: Employee;
}
