import { IClient } from './client.model';

export interface IMessage {
  text: string;
  date: number;
  dir: 'sent' | 'received';
  from: IClient;
}
