import Medusa from '@medusajs/medusa-js';

const MEDUSA_BACKEND_URL =
    process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:9000';

export const medusa = new Medusa({
    baseUrl: MEDUSA_BACKEND_URL,
});
