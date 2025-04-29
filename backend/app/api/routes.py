from fastapi import APIRouter, HTTPException
from app.services.news_service import fetch_news

router = APIRouter()

@router.get("/search")
async def search_news(name: str):
    try:
        news_data = await fetch_news(name)
        return news_data
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching news: {str(e)}")
