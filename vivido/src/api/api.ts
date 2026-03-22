import axios from "axios";
import * as mockApi from './mock-api';

// Toggle to enable in-memory mocks instead of calling the real backend.
// Set to `false` to use real network requests.
export const USE_MOCK = true;

// Helper to extract token string from possibly undefined headers
function extractTokenFromHeaders(headers?: any): string | undefined {
  const auth = headers?.Authorization || headers?.authorization || headers?.headers?.Authorization;
  if (!auth) return undefined;
  return String(auth).replace(/^Bearer\s+/i, '');
}

// When USE_MOCK=true we provide an object that matches axios methods used across the app
// so existing api.get/post/put/delete calls continue to work but are routed to mock implementations.
export const api = USE_MOCK
  ? {
      async get(path: string, config?: any) {
        const token = extractTokenFromHeaders(config?.headers);
        // NOTE: In the real backend routes are protected by the token. In mock we ignore token
        // but keep the parameter so components that pass it continue to work.
        if (path.includes('/home/get-data')) {
          const data = await mockApi.mockGetMe(token);
          return { data };
        }
        if (path.includes('/guardian/get-guardians')) {
          const data = await mockApi.mockGetGuardians();
          return { data };
        }
        if (path.includes('/guidance/func/get_guidance')) {
          const data = await mockApi.mockGetCalls();
          return { data };
        }
        if (path.includes('/guidance/userfilter')) {
          const data = await mockApi.mockGetCalls();
          return { data };
        }

        // default mock response
        return { data: null };
      },

      async post(path: string, body?: any, config?: any) {
        const token = extractTokenFromHeaders(config?.headers);
        if (path.includes('/home/login')) {
          // body expected to have { email, password }
          const result = await mockApi.mockLogin(body?.email, body?.password);
          // In the real API the client expects a response object; we mirror that shape.
          return { data: result };
        }
        if (path.includes('/guardian/create')) {
          const created = await mockApi.mockCreateGuardian(body);
          return { data: created };
        }
        if (path.includes('/guidance/create')) {
          const created = await mockApi.mockCreateCall(body);
          return { data: created };
        }

        return { data: null };
      },

      async put(path: string, body?: any, config?: any) {
        const token = extractTokenFromHeaders(config?.headers);
        if (path.includes('/guidance/edit')) {
          const updated = await mockApi.mockUpdateCall(body?.id || body?.guidance_id || body?._id, body);
          return { data: updated };
        }
        if (path.includes('/guardian/edit') || path.includes('/guardian/update')) {
          const updated = await mockApi.mockUpdateGuardian(body?.id, body);
          return { data: updated };
        }
        return { data: null };
      },

      async delete(path: string, config?: any) {
        const token = extractTokenFromHeaders(config?.headers);
        // axios.delete sometimes receives { data: { id } }
        const id = config?.data?.id || config?.data || null;
        if (path.includes('/guidance/deleteByUser')) {
          const removed = await mockApi.mockDeleteCall(id);
          return { data: removed };
        }
        if (path.includes('/guardian/delete')) {
          const removed = await mockApi.mockDeleteGuardian(id);
          return { data: removed };
        }
        return { data: null };
      },
    }
  : axios.create({
      baseURL: 'https://projetovivido-back-end.onrender.com',
      headers: {
        'Content-Type': 'application/json',
      },
    });
