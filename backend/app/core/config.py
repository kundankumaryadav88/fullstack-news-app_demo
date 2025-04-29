import os
from dotenv import load_dotenv

load_dotenv()  # This loads variables from your .env file

def get_serper_api_key():
    key = os.getenv("SERPER_API_KEY")
    if not key:
        raise ValueError("SERPER_API_KEY is not set in environment variables.")
    return key
