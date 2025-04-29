# Import the router for your API
# Add CORS middleware to handle cross-origin requests
# Allow all origins, or you can specify specific domains
# Allow all HTTP methods (GET, POST, etc.)
# Allow all headers
# Include the router from your API

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes import router  

app = FastAPI(
    title="News Search API",
    description="Backend to proxy search requests to Serper.dev",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)


app.include_router(router)
