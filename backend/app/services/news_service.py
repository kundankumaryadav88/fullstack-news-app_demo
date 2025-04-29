import os
import httpx
from app.core.config import get_serper_api_key

async def fetch_news(name: str):
    url = "https://google.serper.dev/news"
    headers = {"X-API-KEY": get_serper_api_key(),"Content-Type": "application/json"}
    payload = {"q": name}
    async with httpx.AsyncClient() as client:
        response = await client.post(url, headers=headers, json=payload)
        response.raise_for_status()
        return response.json()