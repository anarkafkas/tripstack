import { database } from '..';

/*
 * /users/{userID}
 */

export const usersCollection = () => database().collection('users');

export const userDoc = (uid: string) => usersCollection().doc(uid);

export interface UserDoc {
  email: string;
  homeCountryCode: string | null;
  lastEventNumber: number;
}

/*
 * Operations
 */

export function setUserDoc(uid: string, doc: UserDoc) {
  return userDoc(uid).set(doc);
}

export function updateUserDoc(uid: string, partialDoc: Partial<UserDoc>) {
  return userDoc(uid).update(partialDoc);
}

export function deleteUserDoc(uid: string) {
  return userDoc(uid).delete();
}

export * from './events';
export * from './residencies';
export * from './travels';
