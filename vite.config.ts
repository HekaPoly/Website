import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import type { IncomingMessage, ServerResponse } from 'node:http';
import path from 'node:path';
import formsHandler from './api/forms.ts';

function localApiPlugin(): Plugin {
    return {
        name: 'local-api',
        configureServer(server) {
            server.middlewares.use('/api/forms', async (req, res, next) => {
                if (req.method !== 'POST') {
                    next();
                    return;
                }

                const chunks: Buffer[] = [];
                for await (const chunk of req) {
                    chunks.push(Buffer.from(chunk));
                }

                const request = req as IncomingMessage & { body?: unknown };
                request.body = Buffer.concat(chunks).toString('utf8');

                const response = res as unknown as Parameters<typeof formsHandler>[1];
                response.status = (code) => {
                    res.statusCode = code;
                    return response;
                };
                response.json = (body) => {
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(body));
                };

                await formsHandler(request, response);
            });
        },
    };
}

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    Object.assign(process.env, env);
    const base = env.VITE_BASE_PATH || '/Website/';

    return {
        base,

        plugins: [react(), tailwindcss(), localApiPlugin()],

        resolve: {
            alias: {
                '@': path.resolve(import.meta.dirname, './src'),
            },
        },

        server: {
            host: '0.0.0.0',
            port: 5173,
            strictPort: false,
        },

        preview: {
            host: '0.0.0.0',
            port: 5173,
        },
    };
});
