import * as firebase from 'firebase';
import config from './config';

export { User, UserInfo } from 'firebase';

export function initialize() {
  return firebase.initializeApp(config);
}

export * from './auth';
export * from './database';
export * from './events';
export * from './residencies';
export * from './travels';
