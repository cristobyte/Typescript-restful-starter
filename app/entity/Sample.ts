import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'

@Entity('sample')
export class Sample extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id: number

    @Column('text')
    public text: string

}
