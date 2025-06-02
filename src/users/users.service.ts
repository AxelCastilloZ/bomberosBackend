import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    { email: 'admin', password: '1234' },
    { email: 'cristhian', password: 'criss' },
  ];

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = this.users.find(u => u.email === email && u.password === password);
    return user || null;
  }
}
