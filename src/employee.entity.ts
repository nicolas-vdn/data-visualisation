import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Phished } from './phished.entity'; // Assurez-vous que le chemin d'importation est correct

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  name: string;

  @Column()
  position: string;

  @Column()
  age: number;

  @Column()
  seniority: number;

  // Relation avec la table Phished (un employé peut être associé à plusieurs phishings)
  @OneToMany(() => Phished, (phished) => phished.employee)
  phished: Phished[];
}
