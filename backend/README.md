# Backend - FastAPI

## Setup

1. Create virtual environment:
   ```
   python -m venv venv
   source venv/bin/activate  # Linux/Mac
   venv\Scripts\activate  # Windows
   ```

2. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

3. Create a `.env` file:
   ```
   SERPER_API_KEY=your_serper_api_key
   ```

4. Run server:
   ```
   uvicorn app.main:app --reload --port 8000
   ```

## API Endpoint

- `GET /search?name=xyz`
