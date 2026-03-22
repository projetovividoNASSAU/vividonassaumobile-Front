import { mockData, createId, mockCalls, mockGuardians, mockUsers } from './mock-data';
import type { CallItem, Guardian, User } from './mock-data';

// Simple in-memory mock API that mimics the real backend endpoints used by the app.
// Export functions named to match files under src/api/{get,post,put,delete} so they can be swapped-in easily.

export async function mockLogin(email: string, password: string) {
  // In the real API authentication is required. For mock we ignore password and return a token-like object.
  const user = mockData.users.find(u => u.email === email) || mockData.users[0];
  return {
    token: `mock-token-${user.id}`,
    user,
  };
}

export async function mockGetMe(token?: string) {
  // Token is ignored in mock; return currentUser
  return mockData.currentUser;
}

export async function mockGetGuardians() {
  return mockData.guardians;
}

export async function mockCreateGuardian(payload: Partial<Guardian>) {
  const newG: Guardian = { id: createId('g'), name: payload.name || 'Novo Responsavel', phone: payload.phone, email: payload.email };
  mockData.guardians.push(newG);
  return newG;
}

export async function mockGetCalls() {
  return mockData.calls;
}

export async function mockCreateCall(payload: Partial<CallItem>) {
  const newCall: CallItem = { id: createId('c'), title: payload.title || 'Nova chamada', description: payload.description || '', status: 'open', createdAt: new Date().toISOString(), guardianId: payload.guardianId || null };
  mockData.calls.push(newCall);
  return newCall;
}

export async function mockUpdateCall(id: string, updates: Partial<CallItem>) {
  const idx = mockData.calls.findIndex(c => c.id === id);
  if (idx === -1) throw new Error('Call not found');
  mockData.calls[idx] = { ...mockData.calls[idx], ...updates };
  return mockData.calls[idx];
}

export async function mockDeleteCall(id: string) {
  const idx = mockData.calls.findIndex(c => c.id === id);
  if (idx === -1) throw new Error('Call not found');
  const [removed] = mockData.calls.splice(idx, 1);
  return removed;
}

export async function mockUpdateGuardian(id: string, updates: Partial<Guardian>) {
  const idx = mockData.guardians.findIndex(g => g.id === id);
  if (idx === -1) throw new Error('Guardian not found');
  mockData.guardians[idx] = { ...mockData.guardians[idx], ...updates };
  return mockData.guardians[idx];
}

export async function mockDeleteGuardian(id: string) {
  const idx = mockData.guardians.findIndex(g => g.id === id);
  if (idx === -1) throw new Error('Guardian not found');
  const [removed] = mockData.guardians.splice(idx, 1);
  return removed;
}
