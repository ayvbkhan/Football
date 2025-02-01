// api/proxy.ts
import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Получаем параметры из запроса
    const { path, ...queryParams } = req.query;

    // Проверяем наличие обязательного параметра path
    if (!path) {
        return res.status(400).json({ error: 'Missing path parameter' });
    }

    try {
        // Формируем URL для Football Data API
        const apiUrl = new URL(`https://api.football-data.org/v4/${path}`);

        // Добавляем query-параметры
        Object.entries(queryParams).forEach(([key, value]) => {
            if (typeof value === 'string') {
                apiUrl.searchParams.append(key, value);
            }
        });

        // Выполняем запрос к Football Data API
        const response = await fetch(apiUrl.toString(), {
            headers: {
                'X-Auth-Token': process.env.FOOTBALL_DATA_API_KEY || '',
                'Content-Type': 'application/json'
            }
        });

        // Проверяем статус ответа
        if (!response.ok) {
            throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }

        // Возвращаем данные клиенту
        const data = await response.json();
        res.status(200).json(data);

    } catch (error) {
        console.error('Proxy error:', error);
        res.status(500).json({
            error: 'Internal Server Error',
            message: error instanceof Error ? error.message : 'Unknown error'
        });
    }
}